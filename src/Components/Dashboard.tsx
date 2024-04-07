import React from "react";
import "../CSS/Dashboard.css";
import LandlordForm from "./landlord_form";
import lady from "../images/white_lady.jpg";

export default function Dashboard() {
  const [isForm, setForm] = React.useState(true);

  const handleFormView = () => {
    setForm(!isForm);
  };

  return (
    <>
      <div className="Dashboard">
        <div className="landlord-details">
          <div className="landlord-personal">
            <img src={lady} className="landlord-image" alt="Landlord image" />
            <div className="personal-details">
              <h4 className="landlord-name">Name</h4>
              <p className="landlord-address">Address</p>
            </div>
          </div>
          <br />
          <button className="add-house" onClick={handleFormView}>
            Add a house +
          </button>
        </div>
        {!isForm ? <LandlordForm /> : null}
      </div>
    </>
  );
}
