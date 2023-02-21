const express = require('express')
const app = express()
const host = 'localhost'
const port = 1245

app.get('/', (req, res) => {
  res.send('Hello Holberton School!')
})

app.listen(port, host);

module.exports = app;
