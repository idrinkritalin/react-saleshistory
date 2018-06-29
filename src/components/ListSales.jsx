import React from 'react'
import '../styles/listSales.css'
import Money from 'react-icons/lib/fa/money'
import Card from 'react-icons/lib/fa/credit-card'
import PropTypes from 'prop-types'

const ListSales = (props) => (
  <div className="list-sales">
    <h3><Money className="payment-icon"/> Sales History</h3>
    <ul>
      {props.sales.map(sale => {
        let statusStyle = sale.status === 'failed' ? statusFailed : statusSuccessful
        let paymentStyle = sale.status === 'failed' ? paymentFailed : paymentSuccessfull

        return <li className="payment-item" key={sale.id}>
          <p className="date">{sale.date}</p>
          <p style={statusStyle} className="status">
            {sale.status}
          </p>
          <p style={paymentStyle} className="amount">
              {sale.status === 'refunded' && '-'}
              {sale.amount}
          </p>
          <p className="method">
            {sale.method === 'card' &&
              <Card className="payment-icon"/>
            }
            {sale.method === 'cash' &&
              <Money className="payment-icon"/>
            }
          </p>
        </li>
        }
      )}
    </ul>
  </div>
)

const paymentSuccessfull = {
  textDecoration: 'none'
}

const paymentFailed = {
  textDecoration: 'line-through'
}

const statusSuccessful = {
  borderColor: '#223848'
}

const statusFailed = {
  borderColor: 'red'
}

ListSales.propTypes = {
  sales: PropTypes.array.isRequired
}

export default ListSales
