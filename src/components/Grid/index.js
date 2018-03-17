import React from 'react'
import PropTypes from 'prop-types'

const Grid = ({ children, ...rest }) => (
  <div
    {...rest}
    css={{
      display: 'block',
      marginLeft: '-1rem',
      marginRight: '-1rem',

      ':before': {
        content: '" "',
        display: 'table',
      },

      ':after': {
        clear: 'both',
      },
    }}
  >
    {children}
  </div>
)

Grid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
}

export default Grid
