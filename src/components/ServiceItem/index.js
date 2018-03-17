import React from 'react'
import PropTypes from 'prop-types'

const ServiceItem = ({ children, small, ...rest }) => (
  <li
    {...rest}
    css={{
      marginBottom: '0.75rem',
      textAlign: 'center',
      font: '300 italic 1rem/1.5 Adagio_Slab, serif',
      lineHeight: small ? 1.1 : null,
    }}
  >
    {children}
  </li>
)

ServiceItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  small: PropTypes.bool,
}

export default ServiceItem
