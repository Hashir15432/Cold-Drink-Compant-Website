import React from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";
import { useEffect } from "react";
import driverImg from "../../assets/all-images/Nestle-Water-2.png";

const BecomeDriverSection = () => {

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const handleScroll = () => {
      revealElements.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
   <section className="become__driver reveal">
  <Container>
    <Row>
      <Col lg="6" md="6" sm="12" className="become__driver-img">
        <img src={driverImg} alt="" className="w-100" />
      </Col>

      <Col lg="6" md="6" sm="12">
        <h2 className="section__title become__driver-title">
          Want to Work With Us? Become Our Delivery Partner Today
        </h2>

        <button className="btn become__driver-btn mt-4">
          Become a Partner
        </button>
      </Col>
    </Row>
  </Container>
</section>

  );
};

export default BecomeDriverSection;
