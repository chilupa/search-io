import React from "react"
import { Layout } from "../components"
import { Link } from "gatsby"

export default () => {
  return (
    <Layout>
      Oops! You have come to the wrong place. Please return to{" "}
      <Link to="/">Home page</Link>
    </Layout>
  )
}
