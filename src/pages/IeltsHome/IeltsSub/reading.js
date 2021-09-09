import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import { Link } from "react-router-dom";

function Reading() {
  return (
    <div className="page-content">
      <Container fluid>
        <Breadcrumbs
          title="Reading Comprehension"
          breadcrumbItems={[
            { title: "Reading", link: "#" },
            { title: "Reading Comprehension", link: "#" },
          ]}
        />
        <Row>
          <Col xl={3}>
            <Link to="layout">
              <Card style={{ height: "66px" }}>
                <CardBody>
                  <h3>Passage 1</h3>
                </CardBody>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Reading;
