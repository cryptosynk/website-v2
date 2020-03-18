import React from "react";
import "./Styles.css";

import Logo from "../Images/logo.png";
import { Button } from "@material-ui/core";

function Header() {
  function HandleServices() {
    console.log("we got a click");
    window.scrollTo({
      top: 1400,
      left: 0,
      behavior: "smooth"
    });
  }

  function HandleTechnologies() {
    console.log("we got a click");
    window.scrollTo({
      top: 2100,
      left: 0,
      behavior: "smooth"
    });
  }

  function HandleContact() {
    console.log("we got a click");
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
