import React from "react"
import Container from "../../components/container/Container"

import "./styles/OurHistoryStyle.scss"
import { StaticImage } from "gatsby-plugin-image"

const OurHistorySection = () => {
  return (
    <Container
      outerClassName="our-history-section"
      innerClassName="inner-container"
    >
      <div className="title">Our Lorem History</div>

      <div className="card-container one">
        <div className="card one">
          <StaticImage
            className="our-history-icon"
            src="../../images/our-history-icon.png"
            quality={80}
            loading="lazy"
            alt="icon"
          />
          <div className="time">2008</div>
          <div className="desc">Company founded</div>
        </div>
        <div className="card two">
          <StaticImage
            className="our-history-icon"
            src="../../images/our-history-icon.png"
            quality={80}
            loading="lazy"
            alt="icon"
          />
          <div className="time">2016</div>
          <div className="desc">
            AI department launched, specializing in ncomputer vision and machine
            learning
          </div>
        </div>
        <div className="card three">
          <StaticImage
            className="our-history-icon"
            src="../../images/our-history-icon.png"
            quality={80}
            loading="lazy"
            alt="icon"
          />
          <div className="time">2022</div>
          <div className="desc">
            Over 1 000 projects have been completed successfully fot more than
            400 clients
          </div>
        </div>
      </div>
      <div className="card-container two">
        <div className="card four">
          <StaticImage
            className="our-history-icon"
            src="../../images/our-history-icon.png"
            quality={80}
            loading="lazy"
            alt="icon"
          />
          <div className="time">2014</div>
          <div className="desc">
            Mobile app department launched, specializing in native mobile
            development
          </div>
        </div>
        <div className="card five">
          <StaticImage
            className="our-history-icon"
            src="../../images/our-history-icon.png"
            quality={80}
            loading="lazy"
            alt="icon"
          />
          <div className="time">2017</div>
          <div className="desc">
            Blockchain department launched, specializing in blockchain
            department
          </div>
        </div>
      </div>
    </Container>
  )
}

export default OurHistorySection
