import express from 'express'
import mocker from 'mocker-data-generator'

const app = express()
const port = 3001

const sales = {
    id: {
        casual: 'uuid'
    },
    firstName: {
        faker: 'name.firstName'
    },
    lastName: {
        faker: 'name.lastName'
    },
    date: {
        casual: 'date'
    },
    amount: {
        chance: 'euro()'
    },
    status: {
        values: ['successful', 'refunded', 'failed']
    }
}

//app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('test server up and running!')
})

app.get('/sales', (req, res) => {
  let data =
    mocker()
      .schema('sales', sales, 100)
      .build(function(error, data) {
        if (error) {
            throw error
        }
        res.json(data.sales)
    })
})

app.get('*', (req, res) => {
  res.send('Error 404, please refer to /sales for listing the payments')
})

// localhost:3001
app.listen(port, () => {
  console.log(`Sales History app listening on port ${port}`)
})
