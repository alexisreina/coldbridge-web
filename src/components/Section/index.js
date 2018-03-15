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

const SectionContainer = ({ children, wide}) => (
  <div css={{
      width: '100%',
      maxWidth: wide ? '55rem' : '31rem', // 880px | 496px
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingTop: '3rem',
      paddingBottom: '3rem',
      
      '@media(min-width: 768px)': {
        paddingTop: '3rem',
        paddingBottom: '3rem',
      },
      
      '@media(min-width: 1200px)': {
        paddingTop: 0,
        paddingBottom: 0,
      },
    }}
  >
    {children}
  </div>
)

SectionContainer.propTypes = {
  childen: PropTypes.element,
  wide: PropTypes.bool,
}

const Section = ({ children, className, id: idProp, role: roleProp, wide, /*bordered,*/ centered, branded }) => (
  <section css={[
      {
        background: '#fff',
        width: '100%',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        paddingTop: '1.5rem',
        paddingBottom: '1.5rem',
        
        '@media(min-width: 768px)': {
          paddingTop: '3rem',
          paddingBottom: '3rem',
        },
        
        '@media(min-width: 1200px)': {
          minHeight: '100vh',
        },
      },
      
      // bordered && {
      //   borderLeft: '2px solid #E14F2B', // --brand-color;
      //   paddingLeft: '3rem',
      //   marginLeft: '-3rem',   
      // },
      
      centered && {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      
      branded && {
        backgroundColor: '#E14F2B', // --brand-color;
        color: '#fff',
      },
    ]}
    id={idProp}
    role={roleProp}
    className={className}
  >
    <SectionContainer wide={wide}>
      {children}
    </SectionContainer>
  </section>
)

Section.propTypes = {
  childen: PropTypes.element,
  className: PropTypes.string,
  id: PropTypes.string,
  role: PropTypes.string,
  wide: PropTypes.bool,
  // bordered: PropTypes.bool,
  centered: PropTypes.bool,
  branded: PropTypes.bool,
}

export default Section