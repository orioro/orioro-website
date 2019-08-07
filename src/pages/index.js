import React from 'react'

import { Layout } from '../components/layout'
import { SEO } from '../components/seo'
import { ContentSection } from '../components/content-section/content-section'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <ContentSection>
      <h1>Criamos protótipos de produtos e serviços digitais e validamos com o público-alvo. O mais rápido possível.</h1>
    </ContentSection>
    <ContentSection>
      <h2>Ajudamos empreendedores e organizações a projetar serviços digitais (apps, plataformas, sistemas), validando com pessoas reais antes mesmo de começar a desenvolver</h2>
    </ContentSection>
  </Layout>
)

export default IndexPage
