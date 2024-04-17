import express from 'express';
import mongoose from 'mongoose';
import cors from "cors";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import AssignmentRoutes from './Kanbas/assignments/routes.js';
import UserRoutes from "./Users/routes.js";

// connect to the kanbas database
mongoose.connect("mongodb://127.0.0.1:27017/kanbas");

// Set up Express application
const app = express();

// Middleware setup
app.use(express.json());
app.use(cors());

// Register routes
Lab5(app);              // lab
Hello(app);
CourseRoutes(app);      // Kanbas
ModuleRoutes(app);
AssignmentRoutes(app);
UserRoutes(app);        // Users


// Server listening
app.listen(process.env.PORT || 4001);
