import React from 'react'
import PropTypes from 'prop-types'

const ServiceList = ({ children, ...rest }) => (
  <ul {...rest} css={{ listStyleType: 'none' }}>
    {children}
  </ul>
)

ServiceList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
}

export default ServiceList
