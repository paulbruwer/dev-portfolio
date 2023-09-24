import { Col, Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileCol from "../components/ProfileCol";
import Header from "../components/Header";
import ProjectsCol from "../components/ProjectsCol";

export default () => (
    <div className="projects">
      <Header activeNav="/projects" />
      {/* Using the bootstrap container element, this page consists of two columns*/}
      <Container>
        <Row>
          {/* the first columns is a profile column containing:
          - a profile picture
          - name and profession
          - address and email
          - and relevant links*/}
          <Col className="profile-col" xs={3}>
            <ProfileCol />
          </Col>
          <Col className="info-col" xs={8}>
            {/* the second column contains
            - a list of my past projects */}
            <ProjectsCol />
          </Col>
        </Row>
      </Container>
      <style global jsx>{`
        .projects {
          text-align: center;
          background-image: url(./static/grid.png);
          background-size: cover;
          background-color: rgb(48, 64, 89);
        }

        .profile-col {
          background-color: rgb(48, 64, 89);
          margin-left: 4vw;
          color: white;
          font-family: sans-serif;
        }
        .info-col {
          text-align: left;
          font-family: sans-serif;
          background-color: white;
          margin-left: 1vw;
        }

        .info-col h2 {
          color: rgba(48, 64, 89, 0.801);
          font-size: 1.5vw;
          font-weight: 800;
          padding-top: 3vw;
        }

        .info-col h3 {
          font-weight: 700;
          font-size: 1.2vw;
        }

        .info-col i {
          font-size: 2.5vw;
        }
      `}</style>
    </div>
)