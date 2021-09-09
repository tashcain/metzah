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

function PassageLayout() {
  const [inst, setInst] = useState(true);

  // let getSeconds = function () {
  //   return ("0" + parseInt(secondsElapsed % 60)).slice(-2);
  // };
  // let getMinutes = function () {
  //   return ("0" + Math.floor(secondsElapsed / 60)).slice(-2);
  // };
  // var incrementer;
  // let startTimer = () => {
  //   console.log("start");
  //   incrementer = setInterval(() => {
  //     console.log(secondsElapsed);
  //     setSecondsElapsed(secondsElapsed + 0.01);
  //     setMinutes(("0" + Math.floor(secondsElapsed / 60)).slice(-2));
  //     setSeconds(("0" + parseInt(secondsElapsed % 60)).slice(-2));
  //   }, 10);
  // };
  // // let resetTimer = () => {
  // //   setSecondsElapsed(0);
  // // };
  // let stopTimer = () => {
  //   clearInterval(incrementer);
  // };

  let attemptClicked = () => {
    setInst(false);
    // startTimer();
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
                      heading="Reading Comprehension"
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
                  <CardBody>
                    <Passage />
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

export default PassageLayout;
