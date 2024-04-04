function rootHandler(req, res) {
    res.send("Welcome to Node Server!");
}

function sayHello(req, res) {
    res.send("Hello World!");
}

app.get("/", rootHandler); // register handler
app.get("/hello", sayHello);

// embedding an anonymous function using arrow function syntax
app.get("/good", (req, res) => {
    res.send("<h1>Good Morning!</h1>");
})