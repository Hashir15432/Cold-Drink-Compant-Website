import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/Drink-item.css";
import { useEffect } from "react";
const CarItem = (props) => {
  const { imgUrl, model, Name, automatic, speed, price } = props.item;
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
   <Col
  lg="4"
  md="4"
  sm="6"
  className="mb-5 reveal" // <-- Added reveal class for scroll animation
>
  <div className="car__item">
    <div className="car__img">
      <img
        src={imgUrl}
        alt=""
        className="w-100"
        style={{ height: "450px", objectFit: "cover" }}
      />
    </div>

    <div className="car__item-content mt-4">
      <h4 className="section__title text-center">{Name}</h4>
      <h6 className="rent__price text-center mt-">
        ${price}.00 <span></span>
      </h6>

      <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
        <span className="d-flex align-items-center gap-1">
          <i className="ri-goblet-fill"></i> {model}
        </span>

        <span className="d-flex align-items-center gap-1">
          <i className="ri-shield-check-fill"></i> {automatic}
        </span>

        <span className="d-flex align-items-center gap-1">
          <i className="ri-truck-fill"></i> {speed}
        </span>
      </div>

      <button className="w-50 car__item-btn car__btn-rent">
        <Link to={`/Drinks/${Name}`}>Order Now</Link>
      </button>

      <button className="w-50 car__item-btn car__btn-details">
        <Link to={`/Drinks/${Name}`}>Details</Link>
      </button>
    </div>
  </div>
</Col>

  );
};

export default CarItem;
