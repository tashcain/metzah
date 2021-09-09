import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import { Link } from "react-router-dom";

function Writing() {
  return (
    <div className="page-content">
      <Container fluid>
        <Breadcrumbs
          title="Writing Comprehension"
          breadcrumbItems={[
            { title: "Writing", link: "#" },
            { title: "Writing Comprehension", link: "#" },
          ]}
        />
        <Row>
          <Col xl={3}>
            <Link to="writingLayout">
              <Card style={{ height: "66px" }}>
                <CardBody>
                  <h3>Scenario 1</h3>
                </CardBody>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Writing;
