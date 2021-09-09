import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import { Link } from "react-router-dom";

function Speaking() {
  return (
    <div className="page-content">
      <Container fluid>
        <Breadcrumbs
          title="Speaking Skills"
          breadcrumbItems={[
            { title: "Speaking", link: "#" },
            { title: "Speaking Skills", link: "#" },
          ]}
        />
        <Row>
          <Col xl={3}>
            <Link to="speakinglayout">
              <Card style={{ height: "66px" }}>
                <CardBody>
                  <h3>Question 1</h3>
                </CardBody>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Speaking;
