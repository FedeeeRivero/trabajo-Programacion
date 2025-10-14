import express from 'express'
import { Dbfalsa } from './db_falsa.js'
const app = express()
const port = 3000
const db=new Dbfalsa()

app.get('/', (req, res) => {
  res.send('Hello mundo!')
})

app.get('/pelis', (req, res) => {
  res.send(db.recuperarPelis())
})

app.get('/actores', (req, res) => {
  res.send(db.recuperarActores())
})


app.get('/premios', (req, res) => {
  res.send(db.recuperarPremios())
})

app.get('/premios/:id', (req, res) => {
  res.send(db.recuperarPremio(req.params.id))
})


app.get('/peliculas/:id', (req, res) => {
  res.send(db.recuperarPeli(req.params.id))
})

app.get('/actores/:id', (req, res) => {
  res.send(db.recuperarActor(req.params.id))
})










app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
