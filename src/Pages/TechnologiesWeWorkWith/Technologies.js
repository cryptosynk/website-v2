import React from "react";
import "./Technologies.css";

import Section1 from "../../Images/jsLogos/Section1.svg";
import Section2 from "../../Images/jsLogos/Section2.svg";
import Section3 from "../../Images/jsLogos/Section3.svg";

function Technologies() {
  return (
    <div className="Technologies">
      <h5>Technologies We Work With</h5>

      <div className="TechnologiesMain">
        <div className="Section1">
          <img className="Section1Img" src={Section1} alt="Technologies" />

          <div className="Section1Text">
            <h2>Languages</h2>
            <p>
              We are specialize in <b>Python</b>, <b>Javascript</b>,{" "}
              <b>Angular</b> and <b>Node JS</b>
            </p>
          </div>
        </div>

        <div className="Section2">
          <div className="Section2Text">
            <h2>Open Source</h2>
            <p>
              We have deep expertise in <b>Apache Spark</b>, <b>Apache Kafka</b>
              , <b>Tensorflow</b> and <b>Serverless</b> development.
            </p>
          </div>

          <img className="Section2Img" src={Section2} alt="Technologies" />
        </div>

        <div className="Section3">
          <img className="Section3Img" src={Section3} alt="Technologies" />

          <div className="Section3Text">
            <h2>Platforms</h2>
            <p>
              We love <b>AWS Webservices</b>, <b>AWS Lambda</b> and{" "}
              <b>AWS SageMacker</b>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
