const express = require('express')
const { Dbfalsa } = require('./db_falsa')
const app = express()
const port = 3000
const db=new Dbfalsa()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/pelis', (req, res) => {
  res.send(db.recuperarPelis())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
