import express from 'express'
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors";

const app = express();
//app.use(express.json());

app.use(cors());
Lab5(app);
Hello(app);

app.listen(4001);