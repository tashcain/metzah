import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import { Link } from "react-router-dom";

function GenVideoTab() {
  return (
    <div className="page-content">
      <Container fluid>
        <Breadcrumbs
          title="Introductory Video"
          breadcrumbItems={[
            { title: "General", link: "#" },
            { title: "Introductory Video", link: "#" },
          ]}
        />
        <Row>
          <Col xl={3}>
            <Link to="genVid">
              <Card style={{ height: "66px" }}>
                <CardBody>
                  <h3>Introduction</h3>
                </CardBody>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default GenVideoTab;
