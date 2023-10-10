import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>

                <p className="section__description">
                We are dedicated to delivering safe ride solutions that prioritize the well-being of our passengers above all else.
                Our commitment to safety is unwavering, encompassing rigorous driver background checks,
                 regular vehicle inspections, and the implementation of cutting-edge safety technologies.
                 
                </p>

                <p className="section__description">
                We continuously strive to maintain the highest standards in the industry, ensuring that
                 every journey with us is a secure and reliable experience.
                 Your trust in us is our driving force, and we will stop at nothing to uphold it.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+91 8582810031</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    
    </Helmet>
  );
};

export default About;
