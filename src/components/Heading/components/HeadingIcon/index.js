import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

// --brand-color: #E14F2B;
// --text-color: #49453C;
// --placeholder-color: #9d281a;
// --bg-color: #fff;
// --border-color: #f9f9f9;
// --font-serif: 'Adagio_Slab', serif;
// --font-sans: 'Museo Sans', sans-serif;

const iconStyl = css({
  marginRight: '24px',
  marginLeft: '-76px',

  '@media(max-width: 767px)': {
    display: 'none',
  },
})

const circleStyl = css({
  stroke: '#E14F2B',
  strokeWidth: 2,
  fill: 'none',
})

const HeadingIcon = ({ type }) => {
  switch (type) {
    case 'focus':
      return (
        <svg
          css={iconStyl}
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="52"
        >
          <circle cx="26" cy="26" r="24" css={circleStyl} />
        </svg>
      )
    case 'about':
      return (
        <svg
          css={iconStyl}
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="78"
        >
          <circle cx="26" cy="26" r="24" css={circleStyl} />
          <circle cx="26" cy="52" r="24" css={circleStyl} />
        </svg>
      )
    default:
      return null
  }
}

HeadingIcon.propTypes = {
  type: PropTypes.oneOf(['focus', 'about']).isRequired,
}

export default HeadingIcon
