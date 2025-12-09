import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../../styles/hero-slider.css";

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

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
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content reveal">
            <h4 className="text-light mb-3">Fresh Stock Available Daily</h4>
            <h1 className="text-light mb-4">Order Now and Get Special Discounts</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/Drinks">Order Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-02 mt0">
        <Container>
          <div className="slider__content reveal">
            <h4 className="text-light mb-3">Fresh Stock Available Daily</h4>
            <h1 className="text-light mb-4">Order Now and Get Special Discounts</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/Drinks">Order Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content reveal">
            <h4 className="text-light mb-3">Fresh Stock Available Daily</h4>
            <h1 className="text-light mb-4">Order Now and Get Special Discounts</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/Drinks">Order Now</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
