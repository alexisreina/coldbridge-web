import React from 'react'
import Section from './../../components/Section'
import Heading from './../../components/Heading'

export default () => (
  <Section centered id="about">
    <div>
      <Heading icon="about" branded>
        Quienes Somos
      </Heading>  
      <div style={{ marginBottom: '3rem'}}>
        <p>
          Coldbridge Studio está dirigido por <b>Laura Hermoso</b> y <b>Alexis Reina</b>. Compartimos ideales y enfoque sobre el diseño y nos hemos propuesto apoyar a las empresas a través de una mejor experiencia de estudio. Abogamos por un estilo creativo directo y sencillo. Mejoramos constantemente enfocados siempre en la calidad, no en la cantidad.
        </p>
      </div>
    </div>
  </Section>
)