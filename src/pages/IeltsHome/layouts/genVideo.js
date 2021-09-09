import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import { Link } from "react-router-dom";
import CourseVideo from "../../courseVideo/courseVideo";

function GenVideo() {
  return (
    <div className="page-content">
      <Container fluid>
        <Breadcrumbs
          title="Introductory Videos"
          breadcrumbItems={[
            { title: "General", link: "#" },
            { title: "Introductory Videos", link: "#" },
          ]}
        />
        <Row>
          <Link to="audiolayout">
            <Card style={{ height: "auto" }}>
              <CardBody>
                <CourseVideo />
              </CardBody>
            </Card>
          </Link>
        </Row>
      </Container>
    </div>
  );
}

export default GenVideo;
