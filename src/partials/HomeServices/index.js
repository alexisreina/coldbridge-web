import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import Section from './../../components/Section'
import Heading from './../../components/Heading'
import TextHighlighted from './../../components/TextHighlighted'
import ServiceList from './../../components/ServiceList'
import ServiceHeading from './../../components/ServiceHeading'
import ServiceItem from './../../components/ServiceItem'
import Grid from './../../components/Grid'
import GridItem from './../../components/GridItem'

// --brand-color: #E14F2B;
// --text-color: #49453C;
// --placeholder-color: #9d281a;
// --bg-color: #fff;
// --border-color: #f9f9f9;
// --font-serif: 'Adagio_Slab', serif;
// --font-sans: 'Museo Sans', sans-serif;

export default () => (
  <Section centered wide id="services">
    <div>
      <Heading branded centered>
        Qué Hacemos
      </Heading>
      <Grid>
        <GridItem md='1of3'>
          <div>
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
        </GridItem>
        <GridItem md='1of3'>
          <div>
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
        </GridItem>
        <GridItem sm='1of3'>
          <div>
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
        </GridItem>
        <GridItem>
          <div>
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
        </GridItem>
      </Grid>
    </div>
  </Section>
)
