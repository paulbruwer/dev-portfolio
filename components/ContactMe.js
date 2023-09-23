import React from "react";
import { RiContactsBook2Fill } from "react-icons/ri";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";


export default () => (
  <div>
    <h2>
      <i>
        <RiContactsBook2Fill />
      </i>
      Contact Me
    </h2>
    <hr />
    <ul style={{color:"rgba(48, 64, 89, 0.801)"}}>
      <li>
        <h3><a>
            <BiLogoGmail />
          </a> paulbruwer56@gmail.com</h3>
      </li>
      <li>
        <h3>
          <a
            href="https://www.linkedin.com/in/paul-bruwer-390742130"
            target="_blank"
            rel="noopener norefferer"
          >
            <BiLogoLinkedinSquare />
          </a>
          linkedIn
        </h3>
      </li>
      <li>
        <h3>
          <a
            href="https://github.com/paulbruwer"
            target="_blank"
            rel="noopener norefferer"
          >
            <BiLogoGithub />
          </a>
          GitHub
        </h3>
      </li>
    </ul>
    <style jsx>{`
      a {
        font-size: 1.8vw;
        color: rgba(48, 64, 89, 0.801);
        margin-left: 2vw;
        margin-right: 2vw;
      }
    `}</style>
  </div>
);
