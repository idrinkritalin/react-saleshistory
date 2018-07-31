import express from 'express'
import { randData } from './randData'
import { sortByDate } from './helpers'
import mocker from 'mocker-data-generator'

const app = express()
const PORT = 3001

app.use(express.static('public'))

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
  res.send('Error 404, please refer to /sales for listing the payments')
})

app.listen(PORT, () => { console.log(`Sales History app listening on port ${PORT}`) })

///// mocking data with Mocker
// const sales = {
//     id: {
//         casual: 'uuid'
//     },
//     firstName: {
//         faker: 'name.firstName'
//     },
//     lastName: {
//         faker: 'name.lastName'
//     },
//     date: {
//         casual: 'date'
//     },
//     amount: {
//         chance: 'euro()'
//     },
//     method: {
//         values: ['card', 'cash']
//     },
//     status: {
//         values: ['successful', 'refunded', 'failed']
//     }
// }

// app.get('/sales', (req, res) => {
//   let data =
//     mocker()
//       .schema('sales', sales, 2000)
//       .build(function(error, data) {
//         if (error) {
//           throw error
//         }
//         // simulating some latency
//         setTimeout(function(){
//           res.json(data.sales)
//         }, 3000)
//     })
// })