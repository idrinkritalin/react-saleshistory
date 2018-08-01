import React from 'react'
import '../styles/filterBtn.css'
import PropTypes from 'prop-types'

const FiltersBtn = ({ onFilter }) => (
  <div className="filters">
    <button onClick={(f) => onFilter('failed')}>FAILED</button>
    <button onClick={(f) => onFilter('refunded')}>REFUNDED</button>
    <button onClick={(f) => onFilter('successful')}>SUCCESSFULL</button>
  </div>
)

FiltersBtn.propTypes = {
  onFilter: PropTypes.func.isRequired
}

export default FiltersBtn
