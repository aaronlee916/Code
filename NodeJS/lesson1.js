const http = require('http')
const server = http.createServer()
const fs = require('fs')
server.on('request', (req, res) => {
    const file = fs.readFile('./NodeJS/index.html', 'utf-8', (err, data) => {
        if (!err) {
            res.write(data)
            res.end()
            console.log('EOK');
        }
        else {
            console.log(err);
        }
    })
})
server.listen(3000, 'localhost', () => {
    console.log('Server running on http://localhost:3000');
})
