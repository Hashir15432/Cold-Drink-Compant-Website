import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/fleet-small.png";

const AboutSection = ({ aboutClass }) => {

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const handleScroll = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (rect < windowHeight - 100) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content reveal">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to Our Cold Drinks Service</h2>
              <p className="section__description">
                We are a trusted cold drink distribution company providing fresh and
                high-quality beverages including Pepsi, 7Up, Mirinda, Mountain Dew, Sting,
                and more. Our mission is to deliver reliable, fast, and professional supply
                services to shops, cafés, restaurants, supermarkets, and event organizers
                across the region. We ensure every order reaches you on time, fully fresh,
                and ready for your customers.
              </p>

              <div className="about__section-item d-flex align-items-center reveal">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Fresh & high-quality beverages.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Fast and reliable daily delivery.
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center reveal">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Trusted distributor of top brands.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Affordable pricing for retailers.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img reveal">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
