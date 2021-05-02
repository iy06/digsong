import React from "react";
import "./style.scss";
import GitHubIcon from "@material-ui/icons/GitHub";

export const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer__github">
        <a href="https://github.com/iy06/digsong">
          <GitHubIcon />
          <span className="author">©︎iy06</span>
        </a>
      </span>
    </footer>
  );
};
