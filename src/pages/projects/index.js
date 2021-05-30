import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Portfolio = ({ data }) => {
  const { nodes: projects } = data.projectsData
  const { contact } = data.contactData.siteMetadata
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio Projects</h2>
        <p>Check out the list of my portfolio projects</p>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link key={project.id} to={`/projects/${project.frontmatter.slug}`}>
              <div>
                <GatsbyImage
                  image={getImage(project.frontmatter.thumb)}
                  alt={project.frontmatter.title}
                />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>
          Like what you see? mail me at <span className="bold">{contact}</span>{" "}
          to discuss more!
        </p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    projectsData: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          stack
          slug
          thumb {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
        id
      }
    }
    contactData: site {
      siteMetadata {
        contact
      }
    }
  }
`

export default Portfolio
