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
import Audio from "./audio";

function ListeningMockTest() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xl={6}>
            <SimpleBar style={{ height: window.innerHeight - 100 + "px" }}>
              <Card style={{ height: "auto" }}>
                <CardBody>
                  <Audio />
                </CardBody>
              </Card>
            </SimpleBar>
          </Col>

          <Col xl={6}>
            <Question next="writingMockTest" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ListeningMockTest;
