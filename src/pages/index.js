import { graphql, Link } from "gatsby"
import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

const Home = ({ data }) => {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h3>Develop & Deploy</h3>
          <p>Web developer from India</p>
          <Link className={styles.btn} to="/projects">
            My Portfolio
          </Link>
        </div>
        <GatsbyImage
          image={getImage(data.file.childImageSharp)}
          alt={data.file.name}
        />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      relativePath
      name
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
  }
`

export default Home
