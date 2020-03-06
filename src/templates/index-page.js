import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

import AboutPic from '../../static/img/newabout.png'

import { FaCircle } from 'react-icons/fa'
import { FaLongArrowAltRight } from 'react-icons/fa'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        background: `linear-gradient(rgba(29,33,62,.8),rgba(29,33,62,.8)),
        url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div className="container">
      <div class="columns">
            <div class="column is-three-fifths" style={{
              color: "#ffffff"
            }}>
              <h1>{ title }</h1>
              
              <Link to="/" className="btn" style={{
            justifyContent: `left`,
            color: `#ffffff`,
            letterSpacing: `2px`,
            fontWeight: `400`,
            paddingTop: `50px`
          }}><FaCircle className="btn-circle"/>View Case Studies <FaLongArrowAltRight className="btn-arrow" /></Link>
              
              </div>
            <div class="column">Auto</div>
            <div class="column">Auto</div>
      </div>
      </div>
    </div>
<section className="section about-tab">
  <div className="container">
    <div class="columns is-vcentered is-centered">
      <div class="column is-8">
        <img src={ AboutPic } alt="about pic" />
      </div>
      <div class="column">
          <h2> { mainpitch.title } </h2>
          <p class="bd-notification is-primary">{ mainpitch.description }</p>
          <Link to="/" className="btn" style={{
            justifyContent: `left`
          }}><FaCircle className="btn-circle"/>Learn more <FaLongArrowAltRight className="btn-arrow" /></Link>
      </div>
    </div>
  </div>
</section>

<section className="section services-tab">
  <div className="container">
    <div class="columns is-vcentered">
      <div class="column is-3 has-text-centered">
        <h2>OUR SERVICES</h2>
        <p>Elit esse commodo ullamco enim aliqua cupidatat. Magna veniam sint qui labore. Pariatur mollit tempor non fugiat aliquip exercitation ex nisi nostrud. Deserunt commodo laborum Lorem voluptate est est cupidatat esse ut labore. Aute esse aliqua eiusmod quis enim voluptate labore veniam. Non exercitation reprehenderit irure ut sit.</p>
      </div>
      <div class="column is-3 has-text-centered service-one">Service 1</div>
      <div class="column is-3 has-text-centered service-two">Service 2</div>
      <div class="column is-3 has-text-centered service-three">Service 3</div>
    </div>
  </div>
</section>


<section className="section process-tab">
  <div className="container process-content">
    <div class="columns is-vcentered is-centered">
      <div class="column is-8">
        <h3>Our Process</h3>
      </div>
      <div class="column">
          <h2> { mainpitch.title } </h2>
          <p class="bd-notification is-primary">{ mainpitch.description }</p>
      </div>
    </div>
    <div class="columns service-box-wrap">
      <div class="column is-4 service-box">
        <h2>Discover</h2>
        <br /><span className="facircle"><FaCircle /></span><br />
        <p>Commodo esse qui consequat et magna eu pariatur et dolore incididunt et laborum anim. Elit est qui eu ipsum. Dolor non mollit laboris veniam laboris duis incididunt fugiat velit sunt id nostrud. Eu velit aliqua aute aliqua.</p>
      </div>
      <div class="column is-4 service-box">
      <h3>Discover</h3>
        <br /><span className="facircle"><FaCircle /></span><br />
        <p>Commodo esse qui consequat et magna eu pariatur et dolore incididunt et laborum anim. Elit est qui eu ipsum. Dolor non mollit laboris veniam laboris duis incididunt fugiat velit sunt id nostrud. Eu velit aliqua aute aliqua.</p>
      </div>
      <div class="column is-4 service-box">
      <h3>Discover</h3>
        <br /><span className="facircle"><FaCircle /></span><br />
        <p>Commodo esse qui consequat et magna eu pariatur et dolore incididunt et laborum anim. Elit est qui eu ipsum. Dolor non mollit laboris veniam laboris duis incididunt fugiat velit sunt id nostrud. Eu velit aliqua aute aliqua.</p>
      </div>
    </div>

  </div>
</section>



    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
               
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Helpful Blogs
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                  
                    <Link className="btn" to="/blog">
                      <FaCircle className="btn-circle"/>Read more <FaLongArrowAltRight className="btn-arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
