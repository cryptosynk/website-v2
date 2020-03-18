import React, { Fragment } from "react";
import "./Styles.css";
import { Button } from "@material-ui/core";

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

  return (
    <div className="Godsbody">
      <Fragment>
        <div className="MainSection">
          <div className="MainText">
            <div className="TextBody">
              <h1>Serverless AI</h1>
              <h5>
                We help startups productionizing Artificial Intelligent
                applications.
              </h5>
              <Button variant="contained" color="secondary">
                Hire Us
              </Button>
            </div>
          </div>
          <div className="MainSVG">
            <img className="MainSVGImg" src={Main} alt="MainLogo" />
          </div>
        </div>

        <OurExpertise />
        <Services />
        <Technologies />
        <Form />
      </Fragment>
    </div>
  );
}

export default Home;
