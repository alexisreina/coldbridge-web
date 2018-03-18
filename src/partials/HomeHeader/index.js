import React from 'react'
import FadeInLeft from './components/FadeInLeft'
import Logo from './components/Logo'
import Claim from './components/Claim'

// Images
import headerImgXs from './cbs-img-header-xs.jpg'
import headerImg from './cbs-img-header.jpg'

// TODO: create a theme
const brandColor = '#e14f2b'

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
            '@media(max-width: 1024px), (max-heigth: 576px)': {
              background: `linear-gradient(to top, rgba(white, .33), rgba(white, .33)), url(${headerImgXs}) center top / cover no-repeat #dedede`,
            },
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
