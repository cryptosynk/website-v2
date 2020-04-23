import React from "react";
import "./Styles.css";
import { Typography, IconButton } from "@material-ui/core";

import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

function Footer() {
  function HandleGitHubIconButton() {
    window.open("https://twitter.com/zahidsharp", "_blank");
  }
  function HandleTwitterIconButton() {
    window.open("https://github.com/cryptosynk", "_blank");
  }

  return (
    <div className="Footer">
      <div className="FooterContent">
        <Typography>
          © All rights are reserved | 2020 | Made with 💖 by Cryptosynk, LLC
        </Typography>

        <div className="FooterLinks">
          <div className="ButtonIcon">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={HandleGitHubIconButton}
            >
              <GitHubIcon />
            </IconButton>
          </div>

          <div className="ButtonIcon">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={HandleTwitterIconButton}
            >
              <TwitterIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
