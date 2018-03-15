import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import Section from './../../components/Section'
import Heading from './../../components/Heading'
import TextHighlighted from './../../components/TextHighlighted'

// --brand-color: #E14F2B;
// --text-color: #49453C;
// --placeholder-color: #9d281a; 
// --bg-color: #fff;
// --border-color: #f9f9f9;
// --font-serif: 'Adagio_Slab', serif;
// --font-sans: 'Museo Sans', sans-serif;

const ServiceList = ({ children }) => (
  <ul css={{ listStyleType: 'none' }}>
    {children}
  </ul>
)

ServiceList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
}

const ServiceHeading = ({ children, ...rest }) => (
  <h3
    {...rest}
    css={{
      height: '2rem',
      font: '300 1.25rem/1.5 Adagio_Slab, serif',
      textAlign: 'center',
      color: '#DB3420',
    }}
  >
    {children}
  </h3>
)

ServiceHeading.propTypes = {
  children: PropTypes.string.isRequired,
}

const ServiceItem = ({ children, small, ...rest }) => (
  <li
    {...rest}
    css={{
      marginBottom: '0.75rem',
      textAlign: 'center',
      font: '300 italic 1rem/1.5 Adagio_Slab, serif',
      lineHeight: small ? 1.1 : null
    }}
  >
    {children}
  </li>
)

const Grid = ({ children, ...rest }) => (
  <div
    {...rest}
    css={{
      display: 'block',
      marginLeft: '-1rem',
      marginRight: '-1rem',
      
      ':before': {
        content: '" "',
        display: 'table',
      },
      
      ':after': {
        clear: 'both',
      },
    }}
  >
    {children}
  </div>
)

/* Sizes Object */
// .size-25 {
//   width: 25%;
// }
// 
// .size-33 {
//   width: 33.3333333%;
// }
// 
// .size-50 {
//   width: 50%;
// }
// 
// .size-66 {
//   width: 66.6666666%;
// }
// 
// .size-75 {
//   width: 75%;
// }
// 
// @media (min-width: 660px) {
//   .size--sm-25 {
//     width: 25%;
//   }
//   .size--sm-33 {
//     width: 33.3333333%;
//   }
//   .size--sm-50 {
//     width: 50%;
//   }
//   .size--sm-66 {
//     width: 66.6666666%;
//   }
//   .size--sm-75 {
//     width: 75%;
//   }
// }
// 
// @media (min-width: 992px) {
//   .size--md-25 {
//     width: 25%;
//   }
//   .size--md-33 {
//     width: 33.3333333%;
//   }
//   .size--md-50 {
//     width: 50%;
//   }
//   .size--md-66 {
//     width: 66.6666666%;
//   }
//   .size--md-75 {
//     width: 75%;
//   }
// }
// 
// @media (min-width: 1200px) {
//   .size--lg-25 {
//     width: 25%;
//   }
//   .size--lg-33 {
//     width: 33.3333333%;
//   }
//   .size--lg-50 {
//     width: 50%;
//   }
//   .size--lg-66 {
//     width: 66.6666666%;
//   }
//   .size--lg-75 {
//     width: 75%;
//   }
// }

const GridItem = ({ children, ...rest }) => (
  <div
    {...rest}
    css={{
      float: 'left',
      width: '100%',
      paddingleft: '1rem',
      paddingRight: '1rem',
    }}
  >
    {children}
  </div>
)

export default () => (
  <Section centered wide id="services">
    <div>
      <Heading branded centered>
        Qué Hacemos
      </Heading>
      <div className="grid">
        <div className="grid__item size--sm-33">
          <ServiceHeading>
            Brand + Identidad
          </ServiceHeading>
          <ServiceList>
            <ServiceItem>
              Logo + Identidad Visual
            </ServiceItem>
            <ServiceItem>
              Identidad Corporativa
            </ServiceItem>
            <ServiceItem style={{ marginBottom: '2rem' }}>
              Naming
            </ServiceItem>
          </ServiceList>
        </div>
        <div className="grid__item size--sm-33">
          <ServiceHeading>
            Impresión
          </ServiceHeading>
          <ServiceList>
            <ServiceItem>
              Materiales Promocionales
            </ServiceItem>
            <ServiceItem>
              Dossier + Catálogo
            </ServiceItem>
            <ServiceItem>
              Packaging
            </ServiceItem>
            <ServiceItem style={{ marginBottom: '2rem' }}>
              Posters
            </ServiceItem>
          </ServiceList>
        </div>
        <div className="grid__item size--sm-33">
          <ServiceHeading>
            Digital
          </ServiceHeading>
          <ServiceList>
            <ServiceItem>
              Diseño Interacción
            </ServiceItem>
            <ServiceItem>
              User Experience
            </ServiceItem>
            <ServiceItem>
              Diseño Web
            </ServiceItem>
            <ServiceItem style={{ marginBottom: '2rem' }}>
              Diseño Móvil
            </ServiceItem>
          </ServiceList>
        </div>
        <div className="grid__item">
          <ServiceHeading style={{ marginTop: '1rem' }}>
            Otros Servicios*
          </ServiceHeading>
          <ServiceList>
            <ServiceItem>
              Desarrollo de Software y Aplicaciones Web, iOS y Android
            </ServiceItem>
            <ServiceItem>
              Estrategia en Redes Sociales + Community Manager
            </ServiceItem>
            <ServiceItem small style={{ marginBottom: '2rem' }}>
              <span>
                <TextHighlighted>*</TextHighlighted>
                <small>Servicios adicionales ofrecidos a través de nuestra red de colaboradores.</small>
              </span>
            </ServiceItem>
          </ServiceList>
        </div>
      </div>
    </div>
  </Section>
)