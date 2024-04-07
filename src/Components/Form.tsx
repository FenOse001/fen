//@ts-check
import { ReactNode, useState } from "react";
import "../CSS/Form.css";
interface ModalProps {
  isOpen: boolean;
  onClose: React.MouseEventHandler;
}

function Form({ isOpen, onClose }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <form className="form-data">
        <h1 className="form-header">Sign Up</h1>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
        <label htmlFor="firstName" className="label">
          First Name:
        </label>
        <input
          type="text"
          id="firstName"
          placeholder="Osman"
          className="text-input"
          name="firstName"
        />
        <label htmlFor="lastName" className="label">
          Last Name:
        </label>
        <input
          type="text"
          id="lastName"
          placeholder="Jalloh"
          className="text-input"
        />
        <label htmlFor="email" className="label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          placeholder="osmanjalloh098@gmailcom"
          className="text-input"
        />
        <label htmlFor="number" className="label">
          Phone No:
        </label>
        <input
          type="text"
          id="number"
          placeholder="034 15 68 59"
          className="text-input"
        />
        <div className="files">
          <label htmlFor="picture" className="label-input">
            Picture:
          </label>
          <br />
          <input
            type="file"
            name="FileInput"
            id="picture"
            className="file-input"
          />
          <label htmlFor="credentials" className="label-input">
            Credentials:
          </label>
          <br />
          <input
            type="file"
            name="FileInput"
            id="credentials"
            className="file-input"
          />
        </div>
        <button className="submit-btn">Sign Up</button>
      </form>
    </>
  );
}

export default Form;
