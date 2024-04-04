function Calculator(app) {
    app.get("/a5/add/:num1/:num2", (req, res) => {
        const params = req.params;
        res.send(params);
    })
}

export default Calculator;