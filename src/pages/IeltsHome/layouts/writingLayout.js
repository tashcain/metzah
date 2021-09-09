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
import WritingScene from "./writingScene";
import TextArea from "./textArea";
// import Img from '../';

function WritingLayout() {
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
                      heading="Writing Skills"
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
          {/* <Row> */}
          <Row>
            <SimpleBar>
              <Card style={{ height: "auto" }}>
                <CardBody style={{ width: "100%" }}>
                  <Container>
                    <Row>
                      <Col xl={4}>
                        <WritingScene />
                      </Col>
                      <Col>Question Image</Col>
                    </Row>
                  </Container>
                </CardBody>
              </Card>
            </SimpleBar>
          </Row>

          <Row>
            <TextArea />
          </Row>
          {/* </Row> */}
        </Container>
      </div>
    );
  }
}

export default WritingLayout;
