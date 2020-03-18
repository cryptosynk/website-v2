import React from "react";
import "./Form.css";

import { Button, TextField, Typography } from "@material-ui/core/";

import FormSVG from "../../Images/Form/Form.svg";
import HandshakeSVG from "../../Images/Form/Handshake.svg";

function Form() {
  return (
    <div className="BaseContainer">
      <div className="content">
        <div className="image">
          <img src={HandshakeSVG} alt="HandshakeSVG" />
        </div>
        <br></br>
        <Typography className="FormHeader" component="h5" variant="h5">
          Contact Us.
        </Typography>

        <form>
          <div className="FormFields">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Full Name"
              name="username"
              autoComplete="username"
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />

            <TextField
              multiline
              rows="4"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Message"
              name="username"
            />
          </div>
          <Button
            className="FormButton"
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
          >
            Submit
          </Button>
        </form>
      </div>

      <div className="ContentImage">
        <img src={FormSVG} alt="FormSVG" />
      </div>
    </div>
  );
}

export default Form;
