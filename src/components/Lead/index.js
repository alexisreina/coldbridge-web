import React from 'react'
import PropTypes from 'prop-types'

const Lead = ({ children, ...rest }) => (
  <p {...rest} css={{ fontSize: '1.1865rem' }}>
    {children}
  </p>
)

Lead.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
}

export default Lead
