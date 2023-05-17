import React from "react"
import Container from "../container/Container"
import { Link } from "gatsby"

const CoverSection = () => (
  <Container outerClassName="top-section">
    <h1>Lorem Ipsum is simply dummy text of the printing and typesetting.</h1>
    <div className="descrip">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy.
      </p>
    </div>
    <button className="button">
      <Link to="/contact">Let’s chat</Link>
    </button>
  </Container>
)

export default CoverSection