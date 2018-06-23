import React, { Component } from 'react'
import axios from 'axios'
import '../styles/App.css'

class App extends Component {
  state = {
    sales: []
  }

  componentDidMount() {
    axios.get(`/sales`)
      .then(res => {
        const data = res.data;
        this.setState({ sales:data });
      })
  }

  render() {
    const { sales } = this.state
    return (
      <div className="app">
        <ul>
          {sales.map(sale =>
            <li key={sale.id}>
              <p>{sale.id}</p>
              <p>{sale.date}</p>
              <p>{sale.amount}</p>
              <p>{sale.status}</p>
            </li>)
          }
        </ul>
      </div>
    )
  }
}

export default App
