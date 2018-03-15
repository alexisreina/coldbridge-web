import React from 'react'
import { css } from 'glamor'
import Section from './../../components/Section'
import Heading from './../../components/Heading'
import Lead from './../../components/Lead'
import TextHighlighted from './../../components/TextHighlighted'

export default () => (
  <Section id="intro">
    <div css={{
        borderLeft: '2px solid #E14F2B', // $brand-color;
        paddingLeft: '3rem',
        marginLeft: '-3rem',   
      }}
    >
      <Heading main branded>
        El Departamento Creativo
        <br className="hidden-sm" /> 
        de tu Negocio
      </Heading>
      <Lead>
        Somos un estudio de diseño multidisciplinar situado en Elche, Alicante.
      </Lead>
      <Lead>
        Proponemos soluciones de diseño para ayudar a las empresas a desarrollar su visión. En un mundo saturado de ofertas, utilizamos la perspicacia<TextHighlighted>*</TextHighlighted> con el objetivo de lograr resultados conscientes y claros.
      </Lead>
      <Lead>
        Nuestra intención es proporcionar valor, no añadir ruido.
      </Lead>
      <p style={{ lineHeight: 1, marginTop: '3rem' }}>
        <TextHighlighted>*</TextHighlighted><small>Perspicacia: Facultad para percatarse de cosas que pasan inadvertidas a los demás.</small>
      </p>
    </div>
  </Section>
)