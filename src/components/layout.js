import React from "react"
import Header from "./header"

const layout = ({ children }) => {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <Header />
      {children}
    </div>
  )
}

export default layout
