import express from 'express'
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./Kanbas/courses/routes.js"; // Import the CourseRoutes function from the routes.js file
import cors from "cors";

const app = express();
app.use(express.json());

app.use(cors());
CourseRoutes(app);
Lab5(app);
Hello(app);

/*
To host our Node HTTP server on a remote server we need to make a few tweaks. For instance, 
we can't use port 4000 like we do in our local environment. Instead, we need to use the 
port declared in an environment variable called PORT available through process.env.PORT. 
In your Node application, refactor App.js so that it uses the PORT environment variable if
available, or uses 4000 otherwise when running locally on our machines.
*/
app.listen(process.env.PORT || 4001);