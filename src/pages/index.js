import React from 'react'

import { Link } from 'gatsby'
import { Layout } from '../components/Layout/Layout'
import { SEO } from '../components/SEO/SEO'
import { ContentSection } from '../components/ContentSection/ContentSection'

const HomePage = () => (
  <Layout>
    <SEO title='Home' />
    <ContentSection>
      <div className='row p-top-3'>
        <div className='col-md-7 offset-md-1'>
          <h1>
            Somos um estúdio de design de serviços digitais com foco em inovação
          </h1>
        </div>
      </div>
      <div className='row m-top-3'>
        <div className='col-md-7 offset-md-1'>
          <h2>
            Ajudamos empreendedores e organizações a projetar e reimaginar serviços utilizando tecnologias digitais.
          </h2>
        </div>
      </div>
    </ContentSection>
    <ContentSection
      backgroundColor='orange'>
      <div className='row m-bottom-3'>
        <div className='col-md-7 offset-md-1'>
          <h2 className='h1'>
            Pessoas antes,<br />Tecnologia depois.
          </h2>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <div className='oo-rich-text'>
            <p>
              Serviços são feitos por pessoas: gente real, com motivações, angústias, vontades e sentimentos diferentes. A tecnologia é apenas uma peça muito pequena que dá suporte à atuação dessas pessoas.
            </p>
          </div>
        </div>
      </div>
    </ContentSection>
    <ContentSection
      backgroundColor='light-grey'>
      <div className='row'>
        <div className='col-12'>
          <ul className='list list--3'>
            <li>
              <Link
                to='projetos/projeto-1'>
                Projeto 1
              </Link>
            </li>
            <li>
              <Link
                to='projetos/projeto-2'>
                Projeto 2
              </Link>
            </li>
            <li>
              <Link
                to='projetos/projeto-3'>
                Projeto 3
              </Link>
            </li>
            <li>
              <Link
                to='projetos/projeto-4'>
                Projeto 4
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <Link to='projetos'>
            todos os projetos
          </Link>
        </div>
      </div>
    </ContentSection>
  </Layout>
)

export default HomePage
