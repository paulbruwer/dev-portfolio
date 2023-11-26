import React from "react";
import {
  BiCurrentLocation,
  BiLogoGmail,
  BiLogoGithub,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { BsLink45Deg } from "react-icons/bs";
import { Image } from "react-bootstrap";

export default () => (
  <div>
    <div className="profile-image">
      <Image src="../static/ProfilePic.JPG" roundedCircle fluid />
    </div>
    <h3>Paul Bruwer</h3>
    <h5>Full Stack Developer</h5>
    <hr />
    <ul className="contact-list">
      <li className="location">
        <i className="list-icon">
          <BiCurrentLocation />
        </i>
        Somerset West, Western Cape, South Africa
      </li>
      <li className="mail">
        <i className="list-icon">
          <BiLogoGmail />
        </i>
        paulbruwer56@gmail.com
      </li>
      <li className="portfolio">
      <a
        className="list-icon"
        style={{color: "gray !important"}}
        href="https://www.hyperiondev.com/portfolio/156643/"
        target="_blank"
        rel="noopener norefferer"
      >
        <BsLink45Deg />
      </a>
        HyperionDev Portfolio
      </li>
    </ul>
    <hr />
    <p className="links">
      <a
        href="https://github.com/paulbruwer"
        target="_blank"
        rel="noopener norefferer"
      >
        <BiLogoGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/paul-bruwer-390742130"
        target="_blank"
        rel="noopener norefferer"
      >
        <BiLogoLinkedinSquare />
      </a>
    </p>
    <hr />
    <p className="acknowledgment">
      This webpage was made using
      <a href="https://nextjs.org/" target="_blank" rel="noopener norefferer">
        {" "}
        NextJS
      </a>
      . For the full source code, please visit
      <a
        href="https://github.com/paulbruwer/cv"
        target="_blank"
        rel="noopener norefferer"
      >
        {" "}
        my repo
      </a>
      .
    </p>
    <style jsx>{`
      h3 {
        font-size: 2.1vw;
      }

      h5 {
        font-size: 1.5vw;
        font-weight: bold;
        color: gray;
      }

      .profile-image {
        margin: 10%;
      }

      .contact-list {
        list-style-type: none;
        padding-left: 0;
        color: gray;
      }

      .contact-list li {
        padding-bottom: 1vw;
        font-size: 1.2vw;
      }

      .list-icon {
        padding-right: 2.5vw;
      }

      .links a {
        font-size: 2.5vw;
        color: white;
        margin-left: 2vw;
        margin-right: 2vw;
      }

      .acknowledgment {
        font-size: 1.1vw;
      }
    `}</style>
  </div>
);
