import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import * as styles from "../styles/project-details.module.css"

const ProjectDetails = ({ data }) => {
  const {
    frontmatter: { title, stack, featured },
    html,
  } = data.project.nodes[0]
  return (
    <Layout>
      <div>
        <Link to="/projects" className={styles.btn}>
          &lt; Back
        </Link>
      </div>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
          <GatsbyImage image={getImage(featured.childImageSharp)} alt={title} />
        </div>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    project: allMarkdownRemark(
      filter: { frontmatter: { slug: { eq: $slug } } }
    ) {
      nodes {
        html
        frontmatter {
          featured {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
          stack
          title
        }
      }
    }
  }
`

export default ProjectDetails
