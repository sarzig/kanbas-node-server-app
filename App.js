import { express } from "express";
import Hello from "./Hello.js";
import Calculator from "./Calculator.js";   

const app = express();

Hello(app);


app.listen(5000); // start server