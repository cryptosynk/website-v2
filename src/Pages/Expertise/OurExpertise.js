import React from "react";
import "./OurExpertise.css";

import Expertise1 from "../../Images/Expertise/Expertise1.svg";
import Expertise2 from "../../Images/Expertise/Expertise2.svg";
import Expertise3 from "../../Images/Expertise/Expertise3.svg";
import Expertise4 from "../../Images/Expertise/Expertise4.svg";
import Expertise5 from "../../Images/Expertise/Expertise5.png";
import Expertise6 from "../../Images/Expertise/Expertise6.svg";

function OurExpertise() {
  return (
    <div className="OurExpertiseBackground">
      <div className="Godsbody">
        <div className="OurExpertise">
          <div className="ExpertiseHeader">
            <h5>How We Apply Our Data Science Expertise</h5>
          </div>
          <div className="ExpertiseData">
            <div className="ExpertiseBody">
              <div className="ContentBox">
                <div className="ContentImg">
                  <img src={Expertise1} alt="ContentImg" />
                </div>
                <br></br>
                <div className="ContentInfo">
                  <h6>Big Data Analytics</h6>
                </div>
              </div>

              <div className="ContentBox">
                <div className="ContentImg">
                  <img src={Expertise2} alt="ContentImg" />
                </div>
                <br></br>
                <div className="ContentInfo">
                  <h6>NLP & Text Analytics"</h6>
                </div>
              </div>

              <div className="ContentBox">
                <div className="ContentImg">
                  <img src={Expertise3} alt="ContentImg" />
                </div>
                <br></br>
                <div className="ContentInfo">
                  <h6>Computer Vision</h6>
                </div>
              </div>

              <div className="ContentBox">
                <div className="ContentImg">
                  <img src={Expertise4} alt="ContentImg" />
                </div>
                <br></br>
                <div className="ContentInfo">
                  <h6>Predictive Analytics</h6>
                </div>
              </div>

              <div className="ContentBox">
                <div className="ContentImg">
                  <img src={Expertise5} alt="ContentImg" />
                </div>
                <br></br>
                <div className="ContentInfo">
                  <h6>Data Capture / OCR</h6>
                </div>
              </div>

              <div className="ContentBox">
                <div className="ContentImg">
                  <img src={Expertise6} alt="ContentImg" />
                </div>
                <br></br>
                <div className="ContentInfo">
                  <h6>BI Implementation</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurExpertise;
