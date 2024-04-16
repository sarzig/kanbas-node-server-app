import Database from "../Database/index.js";

export default function AssignmentRoutes(app) {

    // Update assignment
    app.put("/api/assignments/:aid", (req, res) => {
        console.log("AssignmentRoutes app put request");
        const { aid } = req.params;
        const assignmentIndex = Database.assignments.findIndex(
            (m) => m._id === aid);
        Database.assignments[assignmentIndex] = {
            ...Database.assignments[assignmentIndex],
            ...req.body
        };
        res.sendStatus(204);
    });

    // Delete assignment
    app.delete("/api/assignments/:aid", (req, res) => {
        console.log("AssignmentsRoutes app delete request");

        const { aid } = req.params;
        Database.assignments = Database.assignments.filter((m) => m._id !== aid);
        res.sendStatus(200);
    });

    // Add assignment
    app.post("/api/courses/:cid/assignments", (req, res) => {
        console.log("AssignmentsRoutes app post request");

        const { cid } = req.params;
        const newAssignment = {
            ...req.body,
            course: cid,
            _id: new Date().getTime().toString(),
        };
        Database.assignments.push(newAssignment);
        res.send(newAssignment);
    });

    // Get all assignments
    app.get("/api/courses/:cid/assignments", (req, res) => {
        console.log("AssignmentsRoutes app get request");

        const { cid } = req.params;
        const assignments = Database.assignments
            .filter((m) => m.course === cid);
        res.send(assignments);
    });
}
