// accept app reference to express module
// create route to welcome users to assignment 5.
// Here we are using the new arrow function syntax

// Initializes the assignment object 
const assignment = {
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: true,
    score: 0,
};

const module = {
    id: 1,
    name: "Baby's First Module",
    description: "This module will teach you how to make a module (META)",
    course: "Baby 101"
};

const todos = [
    { id: 1, title: "Task 1", completed: false, description: "" },
    { id: 2, title: "Task 2", completed: true, description: "" },
    { id: 3, title: "Task 3", completed: false, description: "" },
    { id: 4, title: "Task 4", completed: true, description: "" }
];


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

    // 3.2 Working with Objects
    app.get("/a5/assignment", (req, res) => {
        res.json(assignment);
    });


    app.get("/a5/assignment/title", (req, res) => {
        res.json(assignment.title);
    });

    app.get("/a5/assignment/score", (req, res) => {
        res.json(assignment.score);
    });

    app.get("/a5/assignment/completed", (req, res) => {
        res.json(assignment.completed);
    });


    app.get("/a5/assignment/title/:newTitle", (req, res) => {
        const { newTitle } = req.params;
        assignment.title = newTitle;
        res.json(assignment);
    });

    app.get("/a5/assignment/score/:newScore", (req, res) => {
        const { newScore } = req.params;
        assignment.score = newScore;
        res.json(assignment);
    });

    app.get("/a5/assignment/completed/:newCompleted", (req, res) => {
        const { newCompleted } = req.params;
        assignment.completed = newCompleted;
        res.json(assignment);
    });

    // 3.2.4 on your own (modules)
    app.get("/a5/module", (req, res) => {
        res.json(module);
    });


    app.get("/a5/module/name", (req, res) => {
        res.json(module.name);
    });

    app.get("/a5/module/description", (req, res) => {
        res.json(module.description);
    });

    app.get("/a5/module/id", (req, res) => {
        res.json(module.id);
    });

    app.get("/a5/module/course", (req, res) => {
        res.json(module.course);
    });


    // If you navigate to this link, it updates the module's name
    app.get("/a5/module/name/:newName", (req, res) => {
        const { newName } = req.params;
        module.name = newName;
        res.json(module);
    });

    app.get("/a5/module/description/:newDescription", (req, res) => {
        const { newDescription } = req.params;
        module.description = newDescription;
        res.json(module);
    });

    app.get("/a5/module/id/:newId", (req, res) => {
        const { newId } = req.params;
        module.id = newId;
        res.json(module);
    });

    app.get("/a5/module/course/:newCourse", (req, res) => {
        const { newCourse } = req.params;
        module.course = newCourse;
        res.json(module);
    });

    // Simply return all todos
    app.get("/a5/todos", (req, res) => {
        res.json(todos);
    });

    // 3.3.4 Create a new todo - needs to be before :id otherwise
    // create would be interpreted as a todo
    app.post("/a5/todos", (req, res) => {
        const newTodo = {
            ...req.body,
            id: new Date().getTime(),
        };
        todos.push(newTodo);
        res.json(newTodo);
    });


    // 3.3.2 Get todo by id
    app.get("/a5/todos/:id", (req, res) => {
        const { id } = req.params;
        const todo = todos.find((t) => t.id === parseInt(id));
        res.json(todo);
    });

    // 3.3.3 Get completed todos
    // THIS ISN'T WORKING XXX
    app.get("/a5/todos", (req, res) => {
        const { completed } = req.query;
        if (completed !== undefined) {
            const completedBool = completed === "true";
            const completedTodos = todos.filter(
                (t) => t.completed === completedBool);
            res.json(completedTodos);
            return;
        }
        res.json(todos);
    });

    // get todo by id - this also isn't working
    app.get("/a5/todos", (req, res) => {
        const { id } = req.query;
        if (id !== undefined) {
            const todosWithTargetId = todos.filter(
                (t) => t.id == id);
            res.json(todosWithTargetId);
            return;
        }
        res.json(todos);
    });

    //3.3.5 - Deleting an Item From an Array
    app.delete("/a5/todos/:id", (req, res) => {
        const { id } = req.params;
        const todo = todos.find((t) => t.id === parseInt(id));
        if (!todo) {
            res.status(404)
                .json({ message: `Unable to delete Todo with ID ${id}` });
            return;
        }

        todos.splice(todos.indexOf(todo), 1);
        res.sendStatus(200);
    });


    // 3.3.6 - Updating an Item in an Array
    app.get("/a5/todos/:id/title/:title", (req, res) => {
        const { id, title } = req.params;
        const todo = todos.find((t) => t.id === parseInt(id));
        todo.title = title;
        res.json(todos);
    });
    app.get("/a5/todos/:id/description/:description", (req, res) => {
        const { id, description } = req.params;
        const todo = todos.find((t) => t.id === parseInt(id));
        todo.description = description;
        res.json(todos);
    });

    // 3.5.3 - Updating via app.put 
    app.put("/a5/todos/:id", (req, res) => {
        const { id } = req.params;
        const todo = todos.find((t) => t.id === parseInt(id));
        todo.title = req.body.title;
        todo.description = req.body.description;
        todo.due = req.body.due;
        todo.completed = req.body.completed;
        res.sendStatus(200);
    });

};
export default Lab5;
