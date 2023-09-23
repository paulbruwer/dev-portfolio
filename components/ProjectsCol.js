import React from "react";
import { AiFillProject } from "react-icons/ai";
import { Badge, Stack } from "react-bootstrap";
import { BiLogoGithub } from "react-icons/bi";
import { BsLink45Deg } from "react-icons/bs";

export default () => (
  <div>
    <h2>
      <i>
        <AiFillProject />
      </i>
      Projects
    </h2>
    <hr />
    <ul style={{ color: "rgba(48, 64, 89, 0.801)" }}>
      <li>
        <h3>
          MediaScout
          <a
            href="https://github.com/paulbruwer/MediaScout"
            target="_blank"
            rel="noopener norefferer"
          >
            <BiLogoGithub />
          </a>
        </h3>
        <p>Fullstack web application to search the iTunes store API.</p>
        <Stack direction="horizontal" gap={2}>
          <Badge pill bg="primary">
            NodeJS
          </Badge>
          <Badge pill bg="primary">
            React
          </Badge>
          <Badge pill bg="primary">
            Express
          </Badge>
          <Badge pill bg="primary">
            HTML
          </Badge>
          <Badge pill bg="primary">
            CSS
          </Badge>
        </Stack>
        <br />
      </li>
      <hr />
      <li>
        <h3>
          Hang Man
          <a
            href="https://github.com/paulbruwer/hangman"
            target="_blank"
            rel="noopener norefferer"
          >
            <BiLogoGithub />
          </a>
          <a
            href="https://hang-man-word-game.netlify.app/"
            target="_blank"
            rel="noopener norefferer"
          >
            <BsLink45Deg />
          </a>
        </h3>
        <p>Fun and simplistic version of the classic blackboard game.</p>
        <Stack direction="horizontal" gap={2}>
          <Badge pill bg="primary">
            NodeJS
          </Badge>
          <Badge pill bg="primary">
            React
          </Badge>
          <Badge pill bg="primary">
            HTML
          </Badge>
          <Badge pill bg="primary">
            CSS
          </Badge>
        </Stack>
        <br />
      </li>
      <hr />
      <li>
        <h3>
          My Hobby Page
          <a
            href="https://github.com/paulbruwer/hyperionDevCapstone1"
            target="_blank"
            rel="noopener norefferer"
          >
            <BiLogoGithub />
          </a>
        </h3>
        <p>
          Page about my hobby in machine restoration and projects that I have
          done in pursuit of this.
        </p>
        <Stack direction="horizontal" gap={2}>
          <Badge pill bg="primary">
            JavaScript
          </Badge>
          <Badge pill bg="primary">
            HTML
          </Badge>
          <Badge pill bg="primary">
            CSS
          </Badge>
        </Stack>
        <br />
      </li>
      <hr />
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
