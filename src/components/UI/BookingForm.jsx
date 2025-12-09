import React from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import { useEffect } from "react";

const BookingForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
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
  <Form onSubmit={submitHandler}>
  <FormGroup className="booking__form d-inline-block me-4 mb-4 reveal">
    <input type="text" placeholder="First Name" />
  </FormGroup>

  <FormGroup className="booking__form d-inline-block ms-1 mb-4 reveal">
    <input type="text" placeholder="Last Name" />
  </FormGroup>

  <FormGroup className="booking__form d-inline-block me-4 mb-4 reveal">
    <input type="email" placeholder="Email" />
  </FormGroup>

  <FormGroup className="booking__form d-inline-block ms-1 mb-4 reveal">
    <input type="number" placeholder="Phone Number" />
  </FormGroup>

  <FormGroup className="booking__form d-inline-block me-4 mb-4 reveal">
    <input type="text" placeholder="From Address" />
  </FormGroup>

  <FormGroup className="booking__form d-inline-block ms-1 mb-4 reveal">
    <input type="text" placeholder="To Address" />
  </FormGroup>

  <FormGroup className="booking__form d-inline-block me-4 mb-4 reveal">
    <select>
      <option value="1 bottle">1 Bottle</option>
      <option value="2 bottles">2 Bottles</option>
      <option value="3 bottles">3 Bottles</option>
      <option value="4 bottles">4 Bottles</option>
      <option value="5+ bottles">5+ Bottles</option>
    </select>
  </FormGroup>

  <FormGroup className="booking__form d-inline-block ms-1 mb-4 reveal">
    <select>
      <option value="1 crate">1 Crate</option>
      <option value="2 crates">2 Crates</option>
      <option value="3 crates">3 Crates</option>
      <option value="4 crates">4 Crates</option>
      <option value="5+ crates">5+ Crates</option>
    </select>
  </FormGroup>

  <FormGroup className="booking__form d-inline-block me-4 mb-4 reveal">
    <input type="date" placeholder="Journey Date" />
  </FormGroup>

  <FormGroup className="booking__form d-inline-block ms-1 mb-4 reveal">
    <input type="time" placeholder="Journey Time" className="time__picker" />
  </FormGroup>

  <FormGroup className="reveal">
    <textarea
      rows={5}
      type="textarea"
      className="textarea"
      placeholder="Write"
    ></textarea>
  </FormGroup>
</Form>

);
};

export default BookingForm;
