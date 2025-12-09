import React, { useEffect } from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/Mohsin-team-1.jpg";
import ava02 from "../../assets/all-images/Wajih-Zaidi-team.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
    <Slider {...settings}>
  <div className="testimonial py-4 px-3 reveal">
    <p className="section__description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni
      explicabo molestias recusandae repudiandae, dolor, sapiente placeat
      ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
      voluptate odit?
    </p>

    <div className="mt-3 d-flex align-items-center gap-4">
      <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

      <div>
        <h6 className="mb-0 mt-3">Jhon Doe</h6>
        <p className="section__description">Customer</p>
      </div>
    </div>
  </div>

  <div className="testimonial py-4 px-3 reveal">
    <p className="section__description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni
      explicabo molestias recusandae repudiandae, dolor, sapiente placeat
      ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
      voluptate odit?
    </p>

    <div className="mt-3 d-flex align-items-center gap-4">
      <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

      <div>
        <h6 className="mb-0 mt-3">Jhon Doe</h6>
        <p className="section__description">Customer</p>
      </div>
    </div>
  </div>

  <div className="testimonial py-4 px-3 reveal">
    <p className="section__description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni
      explicabo molestias recusandae repudiandae, dolor, sapiente placeat
      ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
      voluptate odit?
    </p>

    <div className="mt-3 d-flex align-items-center gap-4">
      <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

      <div>
        <h6 className="mb-0 mt-3">Jhon Doe</h6>
        <p className="section__description">Customer</p>
      </div>
    </div>
  </div>

  <div className="testimonial py-4 px-3 reveal">
    <p className="section__description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni
      explicabo molestias recusandae repudiandae, dolor, sapiente placeat
      ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
      voluptate odit?
    </p>

    <div className="mt-3 d-flex align-items-center gap-4">
      <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

      <div>
        <h6 className="mb-0 mt-3">Jhon Doe</h6>
        <p className="section__description">Customer</p>
      </div>
    </div>
  </div>
</Slider>

  );
};

export default Testimonial;
