import React from 'react'
import '../styles/listSales.css'
import Money from 'react-icons/lib/fa/money'
import Card from 'react-icons/lib/fa/credit-card'
import PropTypes from 'prop-types'

const ListSales = (props) => (
  <div className="list-sales">
    <h3><Money className="payment-icon"/> Sales History</h3>
    <ul>
      {props.sales.map(sale =>
        <li className="payment-item" key={sale.id}>
          <p className="date">{sale.date}</p>
          <p style={sale.status === 'failed' ? failedPayment : successfulPayment } className="status">{sale.status}</p>
          <p style={sale.status === 'failed' ? failedText : successfulText } className="amount">
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
      )}
    </ul>
  </div>
)

const failedText = {
  textDecoration: 'line-through'
}

const successfulText = {
  textDecoration: 'none'
}

const successfulPayment = {
  borderColor: '#20384A'
}

const failedPayment = {
  borderColor: 'red'
}
ListSales.propTypes = {
  sales: PropTypes.array.isRequired
}

export default ListSales
