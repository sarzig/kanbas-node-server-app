// accept app reference to express module
// create route to welcome users to assignment 5.
// Here we are using the new arrow function syntax

const Lab5 = (app) => {

    // Serves "Welcome" Link in Lab 5
    app.get("/a5/welcome", (req, res) => {
        res.send("Welcome to Assignment 5");
    });

    // Serves Encoding Parameters in URLs
    // Adding
    app.get("/a5/add/:a/:b", (req, res) => {
        const { a, b } = req.params;
        const sum = parseInt(a) + parseInt(b);
        res.send(sum.toString());
    });

    // Subtracting
    app.get("/a5/subtract/:a/:b", (req, res) => {
        const { a, b } = req.params;
        const sum = parseInt(a) - parseInt(b);
        res.send(sum.toString());
    });

    // Multiply
    app.get("/a5/multiply/:a/:b", (req, res) => {
        const { a, b } = req.params;
        const product = parseInt(a) * parseInt(b);
        res.send(product.toString());
    });

    // Divide
    app.get("/a5/divide/:a/:b", (req, res) => {
        const { a, b } = req.params;
        const divide = parseInt(a) / parseInt(b);
        res.send(divide.toString());
    });

    // 3.1.2 Query Parameters
    app.get("/a5/calculator", (req, res) => {
        const { a, b, operation } = req.query;
        let result = 0;
        switch (operation) {
            case "add":
                result = parseInt(a) + parseInt(b);
                break;
            case "subtract":
                result = parseInt(a) - parseInt(b);
                break;
            case "multiply":
                result = parseInt(a) * parseInt(b);
                break;
            case "divide":
                result = parseInt(a) / parseInt(b);
                break;
            default:
                result = "Invalid operation";
        }
        res.send(result.toString());
    });


    app.get("/a5/assignment/title", (req, res) => {
        res.json(assignment.title);
    });


    app.get("/a5/assignment/title/:newTitle", (req, res) => {
        const { newTitle } = req.params;
        assignment.title = newTitle;
        res.json(assignment);
    });

};
export default Lab5;
