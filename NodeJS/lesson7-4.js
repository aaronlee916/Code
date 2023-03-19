const express = require('express')
const app = express()
const router = express.Router()

app.all('/xx', (req, res) => {
    res.send("xxx")
})

app.listen(3000)

