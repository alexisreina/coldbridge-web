import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'modern-normalize/modern-normalize.css'
import './../fonts/fonts.css'
import './index.css'

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}
    />
    <div>{children()}</div>
    {/* include modal.html */}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired, // eslint-disable-line
}

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default TemplateWrapper
