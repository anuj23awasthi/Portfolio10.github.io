import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.instagram.com/anujawasthi350?igsh=Znc5OTFuZDVxcGxo" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100092181644597&mibextid=ZbWKwL" target="_blank" className="items">
            <CiFacebook className="icons" />
          </a>
          <a href="hhttps://www.linkedin.com/in/anuj-awasthi-475493305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="items">
            <CiLinkedin className="icons" />
         
        </a>
          <a href="https://github.com/anuj23awasthi" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/#inbox"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
