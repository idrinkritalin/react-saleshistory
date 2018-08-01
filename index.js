import express from 'express'
import path from 'path'
import { randData } from './helpers/randData'
import { sortByDate } from './helpers/sortByDate'

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, '../build')))

const sales = randData(100)
const sortedSales = sortByDate(sales)

app.get('/', (req, res) => {
  res.send('test server up and running!')
})

app.get('/sales', (req, res) => {
  const { method, status } = req.query
  const request = req.query

  if('status' in request) {
    let filteredByStatus = sortedSales.filter(sale => sale.status === status)
    res.send(filteredByStatus)
  } else if('method' in request) {
    let filteredByType = sortedSales.filter(sale => sale.method === method)
    res.send(filteredByType)
  } else {
    res.send(sortedSales)
  }
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'))
})

app.listen(PORT, () => { console.log(`Sales History app listening on port ${PORT}`) })