import React from 'react'
import PropTypes from 'prop-types'

const calcGridItemWidth = size => {
  // console.log(size);
  switch (size) {
    case '1of4':
      return '25%'
    case '1of3':
      return '33.33333333%'
    case '1of2':
    case '2of4':
      return '50%'
    case '2of3':
      return '66.66666666%'
    case '3of4':
      return '75%'
    default:
      return null
  }
}

const GridItem = ({ children, xs, sm, md, lg, xl, ...rest }) => (
  <div
    {...rest}
    css={[
      {
        float: 'left',
        width: '100%',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        width: '100%',
      },

      xs && {
        width: calcGridItemWidth(xs),
      },

      sm && {
        '@media(min-width: 600px)': {
          width: calcGridItemWidth(sm),
        },
      },

      md && {
        '@media(min-width: 768px)': {
          width: calcGridItemWidth(md),
        },
      },

      lg && {
        '@media(min-width: 992px)': {
          width: calcGridItemWidth(lg),
        },
      },

      xl && {
        '@media(min-width: 1200px)': {
          width: calcGridItemWidth(xl),
        },
      },
    ]}
  >
    {children}
  </div>
)

const sizePropType = PropTypes.oneOf([
  '1of4',
  '1of3',
  '1of2',
  '2of4',
  '2of3',
  '3of4',
])

GridItem.propTypes = {
  children: PropTypes.element.isRequired,
  xs: sizePropType,
  sm: sizePropType,
  md: sizePropType,
  lg: sizePropType,
  xl: sizePropType,
}

export default GridItem
