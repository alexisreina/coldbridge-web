import React from 'react'
import PropTypes from 'prop-types'

const ServiceHeading = ({ children, ...rest }) => (
  <h3
    {...rest}
    css={{
      height: '2rem',
      font: '300 1.25rem/1.5 Adagio_Slab, serif',
      textAlign: 'center',
      color: '#DB3420',
    }}
  >
    {children}
  </h3>
)

ServiceHeading.propTypes = {
  children: PropTypes.string.isRequired,
}

export default ServiceHeading
