import React, { useState, useEffect } from "react";
import "./style.css";
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
import VoiceRecorder from "./voiceRecorder";

function SpeakingLayout() {
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
                      heading="Speaking Skills"
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
              <Row>
                <Card style={{ height: "auto" }}>
                  <CardBody style={{ width: "100%" }}>
                    <h3>Heading</h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco
                  </CardBody>
                </Card>
              </Row>
              <Row>
                <Card style={{ height: "auto" }}>
                  <CardBody style={{ width: "100%" }}>
                    <Audio />
                  </CardBody>
                </Card>
              </Row>
            </Col>

            <Col xl={6}>
              <Card style={{ height: "auto", width: "100%" }}>
                <VoiceRecorder />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SpeakingLayout;
