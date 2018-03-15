import React from 'react'
import HomeHeader from './../partials/HomeHeader'
import HomeIntro from './../partials/HomeIntro'
import HomeFocus from './../partials/HomeFocus'
import HomeAbout from './../partials/HomeAbout'
import HomeServices from './../partials/HomeServices'

const IndexPage = () => (
  <div>
    <HomeHeader />
    <main>
      <HomeIntro />
      <HomeFocus />
      {/* include home.portfolio.html */}
      {/* include home.reviews.html */}
      <HomeAbout />
      <HomeServices />
    </main>
    <footer>
      {/* include contactForm.html */}
    </footer>
  </div>
)

export default IndexPage
