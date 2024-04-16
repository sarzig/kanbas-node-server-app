import express from 'express'
import cors from "cors";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";

// Set up Express application
const app = express();

// Middleware setup
app.use(express.json());
app.use(cors());

// Register routes
CourseRoutes(app);
ModuleRoutes(app);
Lab5(app);
Hello(app);

// Server listening
app.listen(process.env.PORT || 4001);
