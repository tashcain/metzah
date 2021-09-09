import React from "react";
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

function PassageMockTest() {
  return (
    <div>
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
            <Question next="mockTest/listeningMockTest" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PassageMockTest;
