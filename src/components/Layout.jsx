import React from "react"
import Navbar from "./Navbar"
import "../styles/global.css"

const Layout = props => {
  return (
    <div className="layout">
      <Navbar />
      <main className="content">{props.children}</main>
      <footer className="footer">
        <p>&copy; Copyright 2021 Web Portfolio</p>
      </footer>
    </div>
  )
}

export default Layout
