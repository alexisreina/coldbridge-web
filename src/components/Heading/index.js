import React from 'react'
import PropTypes from 'prop-types'
import { css, selection } from 'glamor'

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
        <svg css={iconStyl} xmlns="http://www.w3.org/2000/svg" width="52" height="52">
          <circle cx="26" cy="26" r="24" css={circleStyl} />
        </svg>
      )
    case 'about':
      return (
        <svg css={iconStyl} xmlns="http://www.w3.org/2000/svg" width="52" height="78">
          <circle cx="26" cy="26" r="24" css={circleStyl} />
          <circle cx="26" cy="52" r="24" css={circleStyl} />
        </svg>
      )
    default:
      return null 
  }
}

const baseStyl = css({
  display: 'flex',
  alignItems: 'center',
  font: '300 2rem/1.2 Adagio_Slab, serif',
  marginBottom: '1.5rem',
  
  '@media (min-width: 768px)': {
    height: '5rem',
  },
})

const centeredStyl = css({
  justifyContent: 'center',
})
 
const brandedStyl = css(
  { color: '#E14F2B' },
  selection({
    backgroundColor: '#E14F2B',
  }),
)

const lightStyl = css({
  color: '#fff',
})

// const HedingPrimary = ({ children, icon, centered, branded, light }) =>

const Heading = ({ children, icon, main, centered, branded, light }) => (
  <div>
    {main 
      ? (<h1 css={[
            baseStyl,
            centered && centeredStyl,
            branded && brandedStyl,
            light && lightStyl,
          ]}
        >
          <HeadingIcon type={icon} />
          {children}
        </h1>)
        
      : <h2 css={[
            baseStyl,
            centered && centeredStyl,
            branded && brandedStyl,
            light && lightStyl,
          ]}
        >
          <HeadingIcon type={icon} />
          {children}
        </h2>
    }
  </div>
)

Heading.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array, PropTypes.string]),
  main: PropTypes.bool,
  centered: PropTypes.bool,
  branded: PropTypes.bool,
  light: PropTypes.bool,
}

export default Heading