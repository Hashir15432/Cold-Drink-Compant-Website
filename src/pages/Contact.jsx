import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { useEffect } from "react";
import "../styles/contact.css";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {

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
    <Helmet title="Contact">
  <CommonSection title="Contact" />

  <section>
    <Container>
      <Row>
        <Col lg="7" md="7" className="reveal">
          <h6 className="fw-bold mb-4">Get In Touch</h6>

          <Form>
            <FormGroup className="contact__form reveal">
              <Input placeholder="Your Name" type="text" />
            </FormGroup>
            <FormGroup className="contact__form reveal">
              <Input placeholder="Email" type="email" />
            </FormGroup>
            <FormGroup className="contact__form reveal">
              <textarea
                rows="5"
                placeholder="Message"
                className="textarea"
              ></textarea>
            </FormGroup>

            <button className="contact__btn reveal" type="submit">
              Send Message
            </button>
          </Form>
        </Col>

        <Col lg="5" md="5" className="reveal">
          <div className="contact__info">
            <h6 className="fw-bold">Contact Information</h6>
            <p className="section__description mb-0">
              123 Islamabad, Punjab, Pakistan
            </p>
            <div className="d-flex align-items-center gap-2 reveal">
              <h6 className="fs-6 mb-0">Phone:</h6>
              <p className="section__description mb-0">+88683896366</p>
            </div>

            <div className="d-flex align-items-center gap-2 reveal">
              <h6 className="mb-0 fs-6">Email:</h6>
              <p className="section__description mb-0">example@gmail.com</p>
            </div>

            <h6 className="fw-bold mt-4 reveal">Follow Us</h6>

            <div className="d-flex align-items-center gap-4 mt-3 reveal">
              {socialLinks.map((item, index) => (
                <Link
                  to={item.url}
                  key={index}
                  className="social__link-icon"
                >
                  <i className={item.icon}></i>
                </Link>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
</Helmet>

  );
};

export default Contact;
