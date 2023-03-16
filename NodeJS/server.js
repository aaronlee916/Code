const http = require('http')
const { MongoClient } = require('mongodb')
const client = new MongoClient('mongodb://localhost:27017')
const server = http.createServer()
server.on('request', (req, res) => {
    res.write("Hello World!")
    res.end()
})