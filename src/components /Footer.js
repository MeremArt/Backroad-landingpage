import React from "react";
import { Pagelink, socialLinks } from "../Data";
const footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {Pagelink.map((link) => {
          const { id, href, text } = link;
          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((social) => {
          return (
            <li key={social.id}>
              <a
                href={social.href}
                rel="noreferrer"
                target="_blank"
                className="footer-icon"
              >
                <i className={social.icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear}</span> all rights reserved
      </p>
    </footer>
  );
};

export default footer;
