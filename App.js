import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";

const app = express()
// pass reference to express module
app.use(express.json());


Lab5(app);
Hello(app);


app.listen(4001)

