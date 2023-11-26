import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { BsLink45Deg } from "react-icons/bs";

export default () => (
  <div>
    <h2>
      <i>
        <FaGraduationCap />
      </i>
      Education
    </h2>
    <hr />
    <h3>B. Ing Mechanical Engineering, North West University</h3>
    <p style={{ color: "gray" }}>2013 - 2018 (incomplete)</p>
    <br />
    <h3>Complete Pyhton 3 Bootcamp (Instructor: Jose Portilla), Udemy.com</h3>
    <p style={{ color: "gray" }}>March 2022</p>
    <a
        className="list-icon"
        style={{color: "gray !important"}}
        href="https://www.udemy.com/certificate/UC-4708dcb1-74bb-41b2-8c14-defe65268e59/"
        target="_blank"
        rel="noopener norefferer"
      >
        <BsLink45Deg /> Certificate
      </a>
    <p>
      Complete course of 22 hours, 155 lectures and 3 milestone projects in
      Python 3.
    </p>
    <br />
    <h3>
      Full Stack Development Course, HyperionDev and Stellenbosch University
    </h3>
    <p style={{ color: "gray" }}>March 2023 - September 2023</p>
    <a
        className="list-icon"
        style={{color: "gray !important"}}
        href="https://www.hyperiondev.com/portfolio/156643/"
        target="_blank"
        rel="noopener norefferer"
      >
        <BsLink45Deg /> HyperionDev Portfolio
      </a>
    <br />
  </div>
);
