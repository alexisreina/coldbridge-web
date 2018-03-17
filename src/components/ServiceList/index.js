import React from 'react'
import PropTypes from 'prop-types'

const ServiceList = ({ children }) => (
  <ul css={{ listStyleType: 'none' }}>
    {children}
  </ul>
)

ServiceList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
}

export default ServiceList
