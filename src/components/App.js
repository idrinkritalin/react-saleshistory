import React, { Component } from 'react'
import Header from './Header'
import ListSales from './ListSales'
import * as PaymentsAPI from '../api/PaymentsAPI'
import ReactLoading from 'react-loading'
import '../styles/App.css'

class App extends Component {
  state = {
    sales: [],
    isLoaded: null
  }

  componentDidMount() {
    PaymentsAPI.get('/sales')
      .then(res => {
        const data = res.data
        data.sort((a, b) => {
          let dateA = new Date(a.date)
          let dateB = new Date(b.date)
          return dateB - dateA
        })
        this.setState({ sales:data, isLoaded:true })
      })
      .catch(error => this.setState({ isLoaded:false }))
  }

  render() {
    const { sales, isLoaded } = this.state
    return (
      <div className="container">
        <Header/>
        { isLoaded ? (
          <ListSales
            sales={sales}
          />
        ) : (
          <div className="container-loading">
            <h4>Loading the payments...</h4>
            <ReactLoading className="loading-icon" type='spokes' color='#20384A' height={20} width={100} />
          </div>
        ) }
      </div>
    )
  }
}

export default App
