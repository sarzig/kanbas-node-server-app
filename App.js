import express from 'express'
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./Kanbas/courses/routes.js"; // Import the CourseRoutes function from the routes.js file
import cors from "cors";

const app = express();
//app.use(express.json());

app.use(cors());
CourseRoutes(app);
Lab5(app);
Hello(app);

app.listen(4001);