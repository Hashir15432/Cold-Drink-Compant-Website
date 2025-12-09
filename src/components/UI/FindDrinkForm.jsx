import React from "react";
import "../../styles/find-Drink-form.css";
import "../../styles/find-Drink-form.css";
import { Form, FormGroup } from "reactstrap";
import { useEffect } from "react";
const FindCarForm = () => {

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
    <Form className="form reveal">
  <div className="d-flex align-items-center justify-content-between flex-wrap">
    <FormGroup className="form__group reveal">
      <input type="text" placeholder="From address" required />
    </FormGroup>  

    <FormGroup className="form__group reveal">
      <input type="text" placeholder="To address" required />
    </FormGroup>

    <FormGroup className="form__group reveal">
      <input type="date" placeholder="Journey date" required />
    </FormGroup>

    <FormGroup className="form__group reveal">
      <input
        className="journey__time"
        type="time"
        placeholder="Journey time"
        required
      />
    </FormGroup>

    <FormGroup className="select__group reveal">
      <select>
        <option value="ac">Cold Drinks</option>
        <option value="non-ac">Hot Drink</option>
      </select>
    </FormGroup>

    <FormGroup className="form__group reveal">
      <button className="btn find__car-btn">Find Drinks</button>
    </FormGroup>
  </div>
</Form>

  );
};

export default FindCarForm;
