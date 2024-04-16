import Database from "../Database/index.js";

export default function CourseRoutes(app) {

  // Get a course by ID
    app.get("/api/courses/:id", (req, res) => {
      console.log("CourseRoutes/routes.js: app get request");

        const { id } = req.params;
        const course = Database.courses
          .find((c) => c._id === id);
        if (!course) {
          res.status(404).send("Course not found");
          return;
        }
        res.send(course);
      });

      
    // Update a course
    app.put("/api/courses/:id", (req, res) => {
      console.log("CourseRoutes/routes.js: app put request");

        const { id } = req.params;
        const course = req.body;
        Database.courses = Database.courses.map((c) =>
          c._id === id ? { ...c, ...course } : c
        );
        res.sendStatus(204);
      });
    

    // Delete a course
    app.delete("/api/courses/:id", (req, res) => {
      console.log("CourseRoutes/routes.js: app delete request");

        const { id } = req.params;
        Database.courses = Database.courses
            .filter((c) => c._id !== id);
        res.sendStatus(204);
    });

    // Add a course
    app.post("/api/courses", (req, res) => {
      console.log("CourseRoutes/routes.js: app post request");

        const course = {
            ...req.body,
            _id: new Date().getTime().toString()
        };
        Database.courses.push(course);
        res.send(course);


    });

    // Get all courses
    app.get("/api/courses", (req, res) => {
      console.log("CourseRoutes/routes.js: app get request");

        const courses = Database.courses;
        res.send(courses);
    });


}