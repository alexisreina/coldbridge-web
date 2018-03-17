import React from 'react'
import PropTypes from 'prop-types'
import { css, selection } from 'glamor'
import HeadingIcon from './components/HeadingIcon'

// --brand-color: #E14F2B;
// --text-color: #49453C;
// --placeholder-color: #9d281a;
// --bg-color: #fff;
// --border-color: #f9f9f9;
// --font-serif: 'Adagio_Slab', serif;
// --font-sans: 'Museo Sans', sans-serif;

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
  })
)

const lightStyl = css({
  color: '#fff',
})

const Heading = ({ children, icon, main, centered, branded, light }) => (
  <div>
    {main ? (
      <h1
        css={[
          baseStyl,
          centered && centeredStyl,
          branded && brandedStyl,
          light && lightStyl,
        ]}
      >
        {icon ? <HeadingIcon type={icon} /> : null}
        {children}
      </h1>
    ) : (
      <h2
        css={[
          baseStyl,
          centered && centeredStyl,
          branded && brandedStyl,
          light && lightStyl,
        ]}
      >
        {icon ? <HeadingIcon type={icon} /> : null}
        {children}
      </h2>
    )}
  </div>
)

Heading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.string,
  ]).isRequired,
  main: PropTypes.bool,
  centered: PropTypes.bool,
  branded: PropTypes.bool,
  light: PropTypes.bool,
  icon: PropTypes.string,
}

Heading.defaultProps = {
  main: false,
  centered: false,
  branded: false,
  light: false,
  icon: null,
}

export default Heading
