import React from "react";
import { Col } from "reactstrap";
import "../../styles/services-list.css";
import servicesData from "../../assets/data/serviceData";
import { useEffect } from "react";
const ServicesList = () => {
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
    <>
      {servicesData.map((item) => (
        <ServiceItem item={item} key={item.id} />
      ))}
    </>
  );
};

const ServiceItem = ({ item }) => (
  <Col
    lg="4"
    md="4"
    sm="6"
    className="mb-3 reveal" // <-- Added reveal class
  >
    <div className="service__item">
      <span className="mb-3 d-inline-block">
        <i className={item.icon} />
      </span>

      <h6>{item.title}</h6>
      <p className="section__description">{item.desc}</p>
    </div>
  </Col>

);

export default ServicesList;
