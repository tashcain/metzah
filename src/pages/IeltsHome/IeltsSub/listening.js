import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import { Link } from "react-router-dom";

function Listening() {
  return (
    <div className="page-content">
      <Container fluid>
        <Breadcrumbs
          title="Listening Skills"
          breadcrumbItems={[
            { title: "Listening", link: "#" },
            { title: "Listening Skills", link: "#" },
          ]}
        />
        <Row>
          <Col xl={3}>
            <Link to="audiolayout">
              <Card style={{ height: "66px" }}>
                <CardBody>
                  <h3>Audio 1</h3>
                </CardBody>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Listening;
