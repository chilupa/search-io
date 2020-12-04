import React from "react"
import { Container, Header } from "../components"

export default ({ children }) => {
  return (
    <Container>
      <Header />
      <br />
      {children}
    </Container>
  )
}
