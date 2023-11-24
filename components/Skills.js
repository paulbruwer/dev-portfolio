import React from "react";
import { GiSkills } from "react-icons/gi";
import { Badge, Stack } from "react-bootstrap";

export default () => (
  <div>
    <h2>
      <i>
        <GiSkills />
      </i>
      Skills
    </h2>
    <hr />
    <Stack direction="horizontal" gap={2}>
      <Badge pill bg="primary">
        Java Script
      </Badge>
      <Badge pill bg="primary">
        HTML
      </Badge>
      <Badge pill bg="primary">
        CSS
      </Badge>
      <Badge pill bg="primary">
        Bootstrap
      </Badge>
      <Badge pill bg="primary">
        NodeJS
      </Badge>
      <Badge pill bg="primary">
        NextJS
      </Badge>
      <Badge pill bg="primary">
        React
      </Badge>
      <Badge pill bg="primary">
        Redux
      </Badge>
    </Stack>
    <br/>
    <Stack direction="horizontal" gap={2}>
      <Badge pill bg="primary">
        Express
      </Badge>
      <Badge pill bg="primary">
        MongoDB
      </Badge>
      <Badge pill bg="primary">
        Mongoose
      </Badge>
      <Badge pill bg="primary">
        Python
      </Badge>
      <Badge pill bg="primary">
        SolidWorks
      </Badge>
      <Badge pill bg="primary">
        Matlab
      </Badge>
    </Stack>
  </div>
);
