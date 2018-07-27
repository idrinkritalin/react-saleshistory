import React, { Component } from 'react'
import Header from './Header'
import FiltersBtn from './FiltersBtn'
import ListSales from './ListSales'
import * as PaymentsAPI from '../api/PaymentsAPI'
import ReactLoading from 'react-loading'
import '../styles/App.css'

class App extends Component {
  state = {
    sales: [],
    isLoaded: null,
    filter: null,
    salesByDate: []
  }

  componentDidMount() {
    PaymentsAPI.get('/sales')
      .then(res => {
        const data = res.data
        this.setState({ sales:data, isLoaded:true })
      })
      .catch(error => this.setState({ isLoaded:false }))
  }

  onFilter = (filter) => {
    PaymentsAPI.get(`/sales?status=${filter}`)
      .then(res => {
        const data = res.data
        this.setState({ sales:data, isLoaded:true })
      })
      .catch(error => this.setState({ isLoaded:false }))
  }

  // implement feature in the UI
  groupByDate(){
    PaymentsAPI.get('/sales')
      .then(res => {
        const data = res.data
        const reducedData = data.reduce((acc, obj) => {
          let key = obj['date']
            if (!acc[key]) {
              acc[key] = []
            }
            acc[key].push(obj)
            return acc
          }, {})
        const salesByDate = []
        salesByDate.push(reducedData)

        this.setState({ salesByDate, isLoaded:true })
      })
      .catch(error => this.setState({ isLoaded:false }))
  }

  render() {
    const { sales, isLoaded } = this.state
    return (
      <div className="container">
        <Header/>
        <FiltersBtn
          onFilter={this.onFilter}
        />
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
