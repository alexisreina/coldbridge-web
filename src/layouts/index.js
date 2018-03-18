import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './../fonts/fonts.css'
import './index.css'
import favicon from './favicon.ico'

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}
    >
      <link rel="shortcut icon" href={favicon} />
    </Helmet>
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
