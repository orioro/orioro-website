import React from 'react'

import { Link } from 'gatsby'
import { Layout } from '../components/Layout/Layout'
import { SEO } from '../components/SEO/SEO'
import { ContentSection } from '../components/ContentSection/ContentSection'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import SubDirectoryArrowRightIcon from '@material-ui/icons/SubDirectoryArrowRight'

import { ProjectThumbnail } from '../components/ProjectThumbnail/ProjectThumbnail'

import './style.less'

const HomePage = ({
  data
}) => {
  return <Layout>
    <SEO title='Home' />
    <ContentSection>
      <div className='row p-top-3'>
        <div className='col-sm-7 offset-sm-1'>
          <h1>
            Somos uma consultoria de design digital com foco em processos de inovação

          {/*
            Somos um estúdio de design de serviços digitais com foco em inovação
          */}
          </h1>
        </div>
      </div>
      <div className='row m-top-4'>
        <div className='col-sm-7 offset-sm-1'>
          <h2>
            Ajudamos empresas e organizações a <strong>criar tecnologia</strong> com base no comportamento das <strong>pessoas</strong>
          </h2>
          {/*

          <h2>
            Ajudamos empreendedores e organizações a projetar e reimaginar serviços utilizando tecnologias digitais.
          </h2>
          */}
        </div>
      </div>
    </ContentSection>
    <ContentSection
      backgroundColor='black'>
      <div className='row m-bottom-3'>
        <div className='col-sm-7 offset-sm-1'>
          <h2 className='h1'>
            Como trabalhamos:
          </h2>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-6 offset-sm-3'>
          <div className='oo-rich-text'>
            <ol className='list-reset oo-steps'>
              <li className='m-bottom-3'>
                <h3 className='h3 m-bottom-7 fg-orange'><span>1.</span><br/>
                Entender o público-alvo</h3>
                <div className='oo-rich-text'>
                  <p>
                    {/* Falar o que é: app, site ou plataforma */}

                    Antes de desenvolver qualquer app, site ou plataforma, é crucial entender as necessidades do público-alvo.
                  </p>
                  <Img fluid={data.image_1_entender.childImageSharp.fluid} />
                  <p>
                    {/* Falar como é factualmente esse passo */}
                    Através de entrevistas e pesquisas em campo, buscamos compreender como as pessoas trabalham, quais desafios enfrentam e como uma nova tecnologia poderá ajudá-las.
                  </p>
                  {/*
                    Antes de projetar qualquer coisa, buscamos entender melhor as pessoas que queremos atender: o que pensam, como trabalham, quais desafios enfrentam e como uma tecnologia digital - um app, um site, uma plataforma - pode ajudá-las no seu dia a dia.

                    Antes de projetar qualquer coisa, buscamos entender as pessoas que queremos atender: o que pensam, como trabalham, quais desafios enfrentam e como<strike>, na sua opinião,</strike> uma tecnologia digital - um app, um site, uma plataforma - pode ajudá-las no seu dia a dia.
                  <p>
                    É para pessoas que estamos projetando - gente de carne e osso com sentimentos, opiniões e realidades diversas.
                  </p>
                  <p>
                    Por isso, antes de começar a projetar soluções, precisamos conversar com elas para entender como pensam, quais desafios enfrentam e como um produto digital pode ajudá-las no seu dia a dia.
                  </p>
                  */}
                </div>
              </li>
              <li className='m-bottom-3'>
                <h3 className='h3 m-bottom-7 fg-orange'><span>2.</span><br/>
                Imaginar soluções</h3>
                <div className='oo-rich-text'>
                  <p>
                    {/* Falar como é factualmente esse passo */}
                    {/* Falar de porquê é um diferencial: facilitado, profissionais diversos, complementação de equipe */}
                    Em sessões facilitadas de co-criação, complementamos as equipes de nossos clientes com especialistas e profissionais de tecnologia para discutir e imaginar soluções inovadoras.
                  </p>
                  <Img fluid={data.image_2_imaginar.childImageSharp.fluid} />
                  <p>
                    {/* Destacar o distanciamento do cotidiano, o ir além, imaginar coisas impossíveis */}
                    Esse é o momento de trazer para a mesa <strong>todas as ideias</strong>: do prático ao futurista, o objetivo é fugir do cotidiano e imaginar o ideal.
                  </p>
                    {/*


                     para tentar imaginar além: em sessões facilitadas de co-criação, discutimos e criamos soluções das mais mirabolantes às mais práticas.

                    Complementamos as equipes de nossos clientes com profissionais especializados - design, tecnologia, comunicação - para tentar imaginar além: em sessões facilitadas de co-criação, discutimos e imaginamos soluções, das mais mirabolantes às mais práticas.

                    A partir da compreensão do público-alvo,



                    Complementamos as equipes de nossos clientes com competências especializadas - tecnologia, subject-matter experts
                    Com uma equipe com competências diversas e especialistas sobre o
                    Em
                    Com uma equipe diversa, trazemos especialistas sobre o assunto


                    Trazemos para a mesa especialistas sobre o assunto, discutimos e imaginamos soluções em sessões de co-criação
                    Em sessões facilitadas de co-criação com a equipe de nossos clientes, discutimos e imaginamos soluções. Esse é o momento de trazer todas as ideias para a mesa, das mais práticas às mais mirabolantes.
                    */}
                </div>
              </li>
              <li className='m-bottom-3'>
                <h3 className='h3 m-bottom-7 fg-orange'><span>3.</span><br/>
                Desenvolver protótipos e testar</h3>
                <div className='oo-rich-text'>
                  <p>
                    De todas as possibilidades, quais são possíveis? Qual é a melhor?
                  </p>
                  <Img fluid={data.image_3_testar.childImageSharp.fluid} />
                  <p>
                    Em conjunto com nossos clientes, selecionamos as ideias mais promissoras e desenvolvemos protótipos para testar com o público-alvo: <strong>na prática</strong>, o que funciona e o que não funciona? O que as pessoas acham? Como se comportam com o produto em mãos?
                  </p>
                    {/*
                       Quais funcionam? Quais devem ser descartadas?
                    com o nosso público. Esse é o momento de coletar <em>feedbacks</em> das pessoas, ouvir
                    suas percepções e verificar quais ideias funcionam e quias devem ser descartadas.

                    Elaboramos protótipos de algumas ideias selecionadas e testamos as ideias com pessoas para ouvir
                    as suas percepções e verificar quais ideias funcionam e quais devem ser descartadas.*/}
                </div>
              </li>
              <li className='m-bottom-3'>
                <h3 className='h3 m-bottom-7 fg-orange'><span>4.</span><br/>
                Decidir com base no comportamento das pessoas</h3>
                <div className='oo-rich-text'>
                  <p>
                    Ajudamos nossos clientes a tomar decisões estratégicas com base no comportamento real das pessoas:
                  </p>
                  <Img fluid={data.image_4_decidir.childImageSharp.fluid} />
                  <p>
                    <strong>Se a recepção foi positiva:</strong><br /><SubDirectoryArrowRightIcon />Investir, aprimorar e desenvolver a tecnologia
                  </p>
                  <p>
                    <strong>Se os resultados foram negativos:</strong><br /><SubDirectoryArrowRightIcon />Rapidamente investigar e projetar novos caminhos
                  </p>
                    {/*


                    Com base no comportamento real das pessoas frente aos protótipos, ajudamos nossos clientes a tomar decisões estratégicas: se a recepção positiva, investir e iniciar o desenvolvimento da tecnologia; se a recepção foi negativa, investigar novos caminhos.



                     buscamos os melhores caminhos a seguir: aprimorar funcionalidades validadas, investigar novas possibilidades

                     Quais ideias funcionaram? Quais devem ser descartadas?  Quais ideias funcionam? Quais devem ser descardatas?

                    Validar e verificar as ideias cedo é crucial para não despender recursos e, mais importante, tempo, em ilusões. Não existe app



                    É a partir dos <em>feedbacks</em> das pessoas que melhoramos


                    A partir dos <em>feedbacks</em> das pessoas durante os testes, aprimoramos o projeto incorporando melhorias aos protótipos

                    Com base no comportamento e nas impressões das pessoas durante os testes...

                    Ao final de cada rodada de testes, incorporamos os aprendizados ao projeto: ajustamos os protótipos, ...., e o mais importante
                    Ao final de cada rodada de testes, analisamos os resultados e incorporamos
                    todo o conhecimento adquirido ao projeto: melhorar os protótipos, refinar
                    a definição de público alvo,
                    */}
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </ContentSection>

    <ContentSection
      backgroundColor='orange'>
      <div className='row m-bottom-3'>
        <div className='col-sm-7 offset-sm-1'>
          <h2 className='h1'>
            Quem já trabalhou conosco:
          </h2>
        </div>
      </div>

      <div className='row'>
        <div className='col-sm-6 offset-sm-3'>
          <div className='oo-rich-text'>
            <ol className='list-reset oo-depoiments'>
              <li className='m-bottom-3'>
                <h3 className='h3 m-bottom-7 fg-black'>
                "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                </h3>
                <div className='oo-rich-text'>
                  <h4>
                    <strong>Nome da pessoa</strong> <br />
                    Empresa / projeto / cargo
                  </h4>
                </div>
              </li>

              <li className='m-bottom-3'>
                <h3 className='h3 m-bottom-7 fg-black'>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed auctor lectus, at pulvinar urna. Mauris sollicitudin aliquet ligula id congue."
                <span>"</span>
                </h3>
                <div className='oo-rich-text'>
                  <h4>
                    <strong>Nome da pessoa</strong> <br />
                    Empresa / projeto / cargo
                  </h4>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </ContentSection>
    <ContentSection
      backgroundColor='light-grey'>
      <div className='row m-bottom-4'>
        <div className='col-12'>
          <h2 className='h1'>
            Projetos que fizemos:
          </h2>
        </div>
      </div>

      <div className='row'>
        <div className='col-12'>
          <ul className='list list--3'>
            {data.projects.edges.map(({ node }, index) => <li key={index}>
              <ProjectThumbnail
                location={node.fields.slug}
                title={node.frontmatter.title}
                date={node.frontmatter.date}
                excerpt={node.excerpt}
                featuredImage={node.frontmatter.featuredImage ?
                  node.frontmatter.featuredImage.childImageSharp.fluid :
                  null
                }
              />
            </li>)}
          </ul>
        </div>
      </div>
      {/*
      <div className='row'>
        <div className='col-12'>
          <Link to='projetos'>
            todos os projetos
          </Link>
        </div>
      </div>
      */}
    </ContentSection>
  </Layout>
}

export default HomePage

export const query = graphql`
  query {
    projects: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { slug: { glob: "/projetos/**" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
    image_1_entender: file(relativePath: { eq: "assets/home/1_entender_publico_alvo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image_2_imaginar: file(relativePath: { eq: "assets/home/2_imaginar_solucoes.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image_3_testar: file(relativePath: { eq: "assets/home/3_testar_prototipos.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image_4_decidir: file(relativePath: { eq: "assets/home/4_decidir_com_base_em_comportamento.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
