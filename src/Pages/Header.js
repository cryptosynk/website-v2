import React from "react";
import "./Styles.css";

import Logo from "../Images/logo.png";
import { Button } from "@material-ui/core";

function Header() {
  function HandleServices() {
    window.scrollTo({
      top: 1300,
      left: 0,
      behavior: "smooth"
    });
  }

  function HandleTechnologies() {
    window.scrollTo({
      top: 2000,
      left: 0,
      behavior: "smooth"
    });
  }

  function HandleContact() {
    window.scrollTo({
      top: 4000,
      left: 0,
      behavior: "smooth"
    });
  }

  return (
    <div className="Header">
      <div className="Logo">
        <img src={Logo} alt="cryptosynk Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Button onClick={HandleServices}>Services</Button>
          </li>
          <li>
            <Button onClick={HandleTechnologies}>Technologies</Button>
          </li>
          <li>
            <Button onClick={HandleContact}>Contact</Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
