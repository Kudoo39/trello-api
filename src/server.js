import express from 'express'

const app = express()

const hostname = 'localhost'
const port = 8017

app.get('/', function (req, res) {
  res.send('Hello World cause you are my world 123')
})

app.listen(port, hostname, () => {
  console.log(`Hello, I'm running at http://${hostname}:${port}`)
})
