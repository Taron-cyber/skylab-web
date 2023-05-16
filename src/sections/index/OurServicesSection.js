import React from "react"
import Container from "../../components/container/Container"
import { StaticImage } from "gatsby-plugin-image"

import "./styles/OurServicesStyle.scss"

const OurServicesSection = () => {
  return (
    <Container
      outerClassName="our-services-section"
      innerClassName="inner-container"
    >
      <div className="title">LOREM services</div>
      <div className="items-container one">
        <div className="services-items">
          <StaticImage
            className="our-services-img"
            src="../../images/phone.png"
            formats={["webp"]}
            quality={100}
            loading="lazy"
            alt="vectors"
          />
          <p className="card-title">Lorem Ipsum</p>
          <p>
            has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled
          </p>
        </div>
        <div className="services-items">
          <StaticImage
            className="our-services-img"
            src="../../images/circle.png"
            formats={["webp"]}
            quality={100}
            loading="lazy"
            alt="vectors"
          />
          <p className="card-title">Lorem Ipsum</p>
          <p>
            has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled
          </p>
        </div>
        <div className="services-items">
          <StaticImage
            className="our-services-img"
            src="../../images/Back.png"
            formats={["webp"]}
            quality={100}
            loading="lazy"
            alt="vectors"
          />
          <p className="card-title">Lorem Ipsum</p>
          <p>
            has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled
          </p>
        </div>
      </div>
      <div className="items-container two">
        <div className="services-items">
          <StaticImage
            className="our-services-img"
            src="../../images/Ai.png"
            formats={["webp"]}
            quality={100}
            loading="lazy"
            alt="vectors"
          />
          <p className="card-title">Lorem Ipsum</p>
          <p>
            has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled
          </p>
        </div>
        <div className="services-items">
          <StaticImage
            className="our-services-img"
            src="../../images/phone.png"
            formats={["webp"]}
            quality={100}
            loading="lazy"
            alt="vectors"
          />
          <p className="card-title">Lorem Ipsum</p>
          <p>
            has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled
          </p>
        </div>
        <div className="services-items">
          <StaticImage
            className="our-services-img"
            src="../../images/People.png"
            formats={["webp"]}
            quality={100}
            loading="lazy"
            alt="vectors"
          />
          <p className="card-title">Lorem Ipsum</p>
          <p>
            has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled
          </p>
        </div>
      </div>
    </Container>
  )
}

export default OurServicesSection