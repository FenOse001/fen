import * as React from "react";
import { Fragment } from "react/jsx-runtime";
import "../CSS/LandingPage.css";
import logo from "../images/logo.png";
import white_building from "../images/white_building.jpg";
import house from "../images/house_on_map.png";
import exchange from "../images/money_exchange.png";
import chat from "../images/chat.png";
import lady from "../images/white_lady.jpg";
import NavTabs from "./NavBar";
import Form from "./Form";

function LandingPage() {
  const [formView, setFormView] = React.useState(false);

  const handleFormView = () => {
    setFormView(true);
  };

  const closeFormView = (e: React.FormEvent) => {
    e.preventDefault();
    setFormView(false);
  };

  return (
    <Fragment>
      <NavTabs />

      <div className="Hero-Section">
        <div className="Hero-Section--Details">
          <h3 className="Welcome-Title">Welcome To Fen</h3>
          <p className="Welcome-Note">
            Lorem ipsum dolor sit amet. Et pariatur quia aut natus omnis hic{" "}
            <br />
            dolorem enim id voluptates nulla eos odio reprehenderit et facilis{" "}
            <br />
            expedita? Non culpa architecto et asperiores sint et quae <br />
            consequuntur est officia ipsam et quia minus. <br />
          </p>
        </div>
        <img
          src={white_building}
          alt="white building"
          className="white-building"
        />
        <button className="get-started-button" onClick={handleFormView}>
          Get Started
        </button>
      </div>

      <div className="features">
        <div className="Feature-Component">
          <img
            src={house}
            className="feature-image"
            alt="Image showing a home on a map"
          />
          <h5 className="feature-header">Access places remotely</h5>
          <p className="feature-description">
            Lorem ipsum dolor sit amet. Et pariatur quia aut natus omnis hic
            dolorem enim id voluptates nulla eos odio reprehenderit et facilis
            expedita? Non culpa architecto et asperiores sint et quae
            consequuntur est officia ipsam et quia minus.
          </p>
        </div>
        <div className="Feature-Component">
          <img
            className="feature-image"
            alt="earners shown splitting the bill"
            src={exchange}
          />
          <h5 className="feature-header">Split the bill</h5>
          <p className="feature-description">
            Lorem ipsum dolor sit amet. Et pariatur quia aut natus omnis hic
            dolorem enim id voluptates nulla eos odio reprehenderit et facilis
            expedita? Non culpa architecto et asperiores sint et quae
            consequuntur est officia ipsam et quia minus.
          </p>
        </div>
        <div className="Feature-Component">
          <img
            src={chat}
            className="feature-image"
            alt="people shown chatting"
          />
          <h5 className="feature-header">Chat with your Landlord directly</h5>
          <p className="feature-description">
            Lorem ipsum dolor sit amet. Et pariatur quia aut natus omnis hic
            dolorem enim id voluptates nulla eos odio reprehenderit et facilis
            expedita? Non culpa architecto et asperiores sint et quae
            consequuntur est officia ipsam et quia minus.
          </p>
        </div>
      </div>

      <div className="Testimonials">
        <div className="testimonial-description">
          <h5 className="Name-Of--Testimonial">Melody Duncan</h5>
          <p className="description">
            Lorem ipsum dolor sit amet. Et pariatur quia aut natus omnis hic
            <br />
            dolorem enim id voluptates nulla eos odio reprehenderit et facilis
            <br />
            expedita? Non culpa architecto et asperiores sint et quae
            <br />
            consequuntur est officia ipsam et quia minus.
          </p>
        </div>
        <img
          className="testimonial-person"
          src={lady}
          alt="An image of someone who has given testimonial"
        />
      </div>
      <Form isOpen={formView} onClose={closeFormView} />
    </Fragment>
  );
}

export default LandingPage;
