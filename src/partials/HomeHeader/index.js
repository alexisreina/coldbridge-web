import React from 'react'
import PropTypes from 'prop-types'
import Transition from 'react-transition-group/Transition'
import Logo from './components/Logo'
import Claim from './components/Claim'
import headerImg from './cbs-img-header-xs.jpg'

const duration = 250

const brandColor = '#e14f2b'

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

class Header extends React.Component {
  constructor() {
    super()
    this.state = { show: false }
  }

  componentDidMount() {
    this.show()
  }

  show() {
    this.setState(({ show }) => ({
      show: !show,
    }))
  }

  render() {
    return (
      <header
        css={{
          borderTop: '.5rem solid #fff',
          borderLeft: '.5rem solid #fff',
          borderRight: '.5rem solid #fff',
        }}
        id="home"
        role="banner"
      >
        <section
          css={{
            background: `linear-gradient(to top, rgba(255,255,255,.33), rgba(255,255,255,.33)), url(${headerImg}) center top/cover no-repeat #dedede`,
            padding: '1rem',
            minHeight: 'calc(100vh - .5rem)',
          }}
        >
          <Logo fill={brandColor} />
          <FadeInLeft in={this.state.show}>
            <Claim fill={brandColor} />
          </FadeInLeft>
        </section>
      </header>
    )
  }
}

export default Header
