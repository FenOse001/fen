import React from "react";
import "../CSS/Dashboard.css";
import lady from "../images/white_lady.jpg";

export default function LandlordForm() {
  return (
    <>
      <div className="house-form">
        <form className="house-form-data">
          <h2 className="form-title">Add a house</h2>
          <input type="text" className="form-input" placeholder="Address" />
          <select className="select-apartment">
            <option>Select type</option>
            <option>Estate</option>
            <option>One Bedroom apartment</option>
          </select>
          <br />
          <input
            type="number"
            placeholder="number of bedrooms"
            className="form-input"
          />
          <input
            type="number"
            placeholder="number of toilets optional"
            className="form-input"
          />
          <br />
          <input
            type="number"
            placeholder="number of parlours optional"
            className="form-input"
          />
          <input
            type="number"
            placeholder="number of kitchen"
            className="form-input"
          />
          <br />
          <input type="text" placeholder="price" className="form-input" />
          <input
            type="file"
            placeholder="house credential"
            className="house-credential"
          />
          <br />
          <button className="list-button">Add House</button>
        </form>
      </div>
    </>
  );
}
