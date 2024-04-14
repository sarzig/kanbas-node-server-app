
export default function Hello(app) {
    // to see this, go to localhost:4001/hello
    app.get('/hello', (req, res) => {
        res.send('Life is good!')
    })

    // to see this, go to localhost:4001
    app.get('/', (req, res) => {
        res.send('Welcome to Full Stack Development!')
    })
}