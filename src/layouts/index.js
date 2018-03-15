// import './../fonts/2BBA62_7_0.eot'
// import './../fonts/2BBA62_7_0.ttf'
// import './../fonts/2BBA62_7_0.woff'
// import './../fonts/2BBA62_10_0.eot'
// import './../fonts/2BBA62_10_0.ttf'
// import './../fonts/2BBA62_10_0.woff'
// import './../fonts/2BBA62_11_0.eot'
// import './../fonts/2BBA62_11_0.ttf'
// import './../fonts/MuseoSans_500-webfont.eot'
// import './../fonts/MuseoSans_500-webfont.svg'
// import './../fonts/MuseoSans_500-webfont.ttf'
// import './../fonts/MuseoSans_500-webfont.woff'
// import './../fonts/MuseoSans-300.eot'
// import './../fonts/MuseoSans-300.svg'
// import './../fonts/MuseoSans-300.ttf'
// import './../fonts/MuseoSans-300.woff'

import './../fonts/fonts.css'
import './index.css'
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}
    />
    <div>
      {children()}
    </div>
    {/* include modal.html */}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title,
        description
      }
    }
  }
`

export default TemplateWrapper
