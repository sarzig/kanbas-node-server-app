import Database from "../Database/index.js";

export default function ModuleRoutes(app) {

    // Update module
    app.put("/api/modules/:mid", (req, res) => {
        console.log("app put request");
        const { mid } = req.params;
        const moduleIndex = Database.modules.findIndex(
            (m) => m._id === mid);
        Database.modules[moduleIndex] = {
            ...Database.modules[moduleIndex],
            ...req.body
        };
        res.sendStatus(204);
    });

    // Delete module
    app.delete("/api/modules/:mid", (req, res) => {
        console.log("ModulesRoutes/routes.js: app delete request");

        const { mid } = req.params;
        Database.modules = Database.modules.filter((m) => m._id !== mid);
        res.sendStatus(200);
    });

    // Add module
    app.post("/api/courses/:cid/modules", (req, res) => {
        console.log("app post request");

        const { cid } = req.params;
        const newModule = {
            ...req.body,
            course: cid,
            _id: new Date().getTime().toString(),
        };
        Database.modules.push(newModule);
        res.send(newModule);
    });

    // Get all modules
    app.get("/api/courses/:cid/modules", (req, res) => {
        console.log("app get request");

        const { cid } = req.params;
        const modules = Database.modules
            .filter((m) => m.course === cid);
        res.send(modules);
    });
}
