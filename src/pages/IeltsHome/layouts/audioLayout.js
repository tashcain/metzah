import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Collapse,
  Button,
} from "reactstrap";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import Question from "./question";
import Passage from "./passage";
import Instruction from "./instruction";
import Stopwatch from "./stopwatch";
import Audio from "./audio";

function AudioLayout() {
  const [inst, setInst] = useState(true);

  let attemptClicked = () => {
    setInst(false);
  };

  if (inst) {
    return (
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col>
              <SimpleBar style={{ height: window.innerHeight - 100 + "px" }}>
                <Card style={{ height: "auto", width: "100%" }}>
                  <CardBody style={{ height: "auto", width: "100%" }}>
                    <Instruction
                      heading="Listening Skills"
                      attemptClicked={attemptClicked}
                    />
                  </CardBody>
                </Card>
              </SimpleBar>
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="page-content">
        <Stopwatch />
        <Container fluid>
          <Row>
            <Col xl={6}>
              <SimpleBar style={{ height: window.innerHeight - 100 + "px" }}>
                <Card style={{ height: "auto" }}>
                  <CardBody style={{ width: "100%" }}>
                    <Audio />
                  </CardBody>
                </Card>
              </SimpleBar>
            </Col>

            <Col xl={6}>
              <Question />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AudioLayout;
