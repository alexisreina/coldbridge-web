import React from 'react'
import PropTypes from 'prop-types'

const TextHightlighted = ({ children }) => (
  <span style={{ color: '#E14F2B' }}>{children}</span>
)

TextHightlighted.propTypes = {
  children: PropTypes.string.isRequired,
}

export default TextHightlighted
