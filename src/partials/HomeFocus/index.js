import React from 'react'
import Section from './../../components/Section'
import Heading from './../../components/Heading'

// --brand-color: #E14F2B;
// --text-color: #49453C;
// --placeholder-color: #9d281a;
// --bg-color: #fff;
// --border-color: #f9f9f9;
// --font-serif: 'Adagio_Slab', serif;
// --font-sans: 'Museo Sans', sans-serif;

export default () => (
  <Section centered id="focus">
    <div>
      <Heading icon="focus" branded>
        Enfoque
      </Heading>
      <div style={{ fontFamily: 'Adagio_Slab, serif' }}>
        <p>
          Nuestra metodología se centra en la información. Escuchamos tu
          historia, identificamos el potencial de la marca y formulamos una
          estrategia centrada en las necesidades reales.
        </p>

        <p>
          Sabemos que no existe una solución única para todos los trabajos. Cada
          nuevo proyecto aporta un conjunto de características únicas que merece
          su propia medida. Nuestro tamaño nos permite adaptarnos con eficacia y
          rapidez.
        </p>

        <p>
          A un buen trabajo lo antecede una gran relación. Tratamos cada
          proyecto como una conversación. Alentamos la colaboración en cada paso
          del proceso, con el fin de lograr resultados reflexionados y bien
          fundamentados.
        </p>
      </div>
    </div>
  </Section>
)
