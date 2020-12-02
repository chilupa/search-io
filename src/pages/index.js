import React from "react"
import Layout from "../components/layout"

const Home = () => {
  const links = [
    {
      href:
        "https://www.gatsbyjs.com/tutorial/part-three/#-add-navigation-links-between-pages",
      name: "Navigating between pages",
    },
    {
      href: "https://www.gatsbyjs.com/docs/using-typography-js/#typographyjs",
      name: "Typography.js",
    },
  ]
  return (
    <Layout>
      <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
        <p>Useful links</p>
        {links.map((props, index) => (
          <li key={index}>
            <a href={props.href} target="_">
              {props.name}
            </a>
          </li>
        ))}
      </div>
    </Layout>
  )
}

export default Home
