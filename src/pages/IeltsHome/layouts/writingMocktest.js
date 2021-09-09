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
import WritingScene from "./writingScene";
import TextArea from "./textArea";

function WritingMockTest() {
  return (
    <div>
      <Container fluid>
        <Row>
          <SimpleBar>
            <Card style={{ height: "auto" }}>
              <CardBody style={{ width: "100%" }}>
                <Row>
                  <Col>
                    <WritingScene />
                  </Col>
                  <Col>Question Image</Col>
                </Row>
              </CardBody>
            </Card>
          </SimpleBar>
        </Row>
        <Row>
          <TextArea />
        </Row>
      </Container>
    </div>
  );
}

export default WritingMockTest;
