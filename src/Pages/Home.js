import React, { Fragment } from "react";
import "./Styles.css";
import { Button } from "@material-ui/core";

import Logo from "../Images/logo.png";
import Main from "../Images/ContentSVGs/OBJECTSB.svg";

import OurExpertise from "./Expertise/OurExpertise.js";
import Services from "./Services/Services.js";
import Technologies from "./TechnologiesWeWorkWith/Technologies.js";
import Form from "./Form/Form.js";

function Home() {
  const theme = {
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 600
    }
  };

  function HandleContact() {
    window.scrollTo({
      top: 4000,
      left: 0,
      behavior: "smooth"
    });
  }

  return (
    <div className="Godsbody">
      <div className="Header">
        <div className="Logo">
          <img src={Logo} alt="cryptosynk Logo" />
        </div>
        <nav>
          <ul>
            <li>
              <Button onClick={() => window.location.replace("#Services")}>Services</Button>
            </li>
            <li>
              <Button onClick={() => window.location.replace("#Technologies")}>Technologies</Button>
            </li>
            <li>
              <Button onClick={() => window.location.replace("#Contact")}>Contact</Button>
            </li>
          </ul>
        </nav>
      </div >

      <Fragment>
        <div className="MainSection">
          <div className="MainText">
            <div className="TextBody">
              <h1>Serverless AI</h1>
              <h5>
                We help startups productionizing Artificial Intelligent
                applications.
              </h5>
              <Button
                variant="contained"
                color="secondary"
                onClick={HandleContact}
              >
                Hire Us
              </Button>
            </div>
          </div>
          <div className="MainSVG">
            <img className="MainSVGImg" src={Main} alt="MainLogo" />
          </div>
        </div>

        <OurExpertise />

        <div id="Services" >
          <Services />
        </div>

        <div id="Technologies" >
          <Technologies />
        </div>
        <div id="Contact" >
          <Form />
        </div>
      </Fragment>
    </div>
  );
}

export default Home;
