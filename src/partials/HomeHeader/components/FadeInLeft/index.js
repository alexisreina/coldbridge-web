import React from 'react'
import PropTypes from 'prop-types'
import Transition from 'react-transition-group/Transition'

const duration = 250

const defaultStyle = {
  transition: `all ${duration}ms ease-in-out`,
  transform: `translateX(1rem)`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0, transform: `translateX(1rem)` },
  entered: { opacity: 1, transform: `translateX(0)` },
}

const FadeInLeft = ({ in: inProp, children }) => (
  <Transition in={inProp} timeout={duration}>
    {state => (
      <div
        style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}
      >
        {children}
      </div>
    )}
  </Transition>
)

FadeInLeft.propTypes = {
  in: PropTypes.bool,
  children: PropTypes.element.isRequired,
}

FadeInLeft.defaultProps = {
  in: false,
}

export default FadeInLeft
