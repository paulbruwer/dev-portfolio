import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default (props) => {

    const activeNav = props.activeNav

  return (
    <div>
      <Nav
        className="justify-content-center"
        variant="tabs"
        defaultActiveKey={activeNav}
      >
        <Nav.Item>
          <Nav.Link href="/">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/projects">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact">Contact Me</Nav.Link>
        </Nav.Item>
      </Nav>
      <style global jsx>{`
        .nav-tabs {
          background-color: rgb(48, 64, 89) !important;
        }
        .nav-item a {
          color: black !important;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};
