// accept app reference to express module
// create route to welcome users to assignment 5.
// Here we are using the new arrow function syntax

const Lab5 = (app) => {
    app.get("/a5/welcome", (req, res) => {
      res.send("Welcome to Assignment 5");
    });
  };
  export default Lab5;
  