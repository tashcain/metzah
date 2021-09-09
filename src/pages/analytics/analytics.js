import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import SalesAnalytics from "../Dashboard/SalesAnalytics";
import BarChart from "../AllCharts/chartjs/barchart";

//Import Components

class Analytics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbItems: [
        { title: "metzah", link: "#" },
        { title: "Analytics", link: "#" },
      ],
      reports: [
        {
          icon: "ri-stack-line",
          title: "Number of Sales",
          value: "IELTS",
          rate: "2.4%",
          desc: "From previous period",
        },
        {
          icon: "ri-store-2-line",
          title: "Sales Revenue",
          value: "Course Two",
          rate: "2.4%",
          desc: "From previous period",
        },
        {
          icon: "ri-briefcase-4-line",
          title: "Average Price",
          value: "Course Three",
          rate: "2.4%",
          desc: "From previous period",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <Breadcrumbs
              title="Analytics"
              breadcrumbItems={this.state.breadcrumbItems}
            />
            <Row>
              <Col xl={8}>
                <Card style={{ width: "100%", height: "auto" }}>
                  <CardBody style={{ width: "100%", height: "auto" }}>
                    <h4 className="card-title mb-4">Reading</h4>

                    <Row className="text-center">
                      <Col xs={4}>
                        <h5 className="mb-0">2541</h5>
                        <p className="text-muted text-truncate">Activated</p>
                      </Col>
                      <Col xs={4}>
                        <h5 className="mb-0">84845</h5>
                        <p className="text-muted text-truncate">Pending</p>
                      </Col>
                      <Col xs={4}>
                        <h5 className="mb-0">12001</h5>
                        <p className="text-muted text-truncate">Deactivated</p>
                      </Col>
                    </Row>

                    <BarChart />
                  </CardBody>
                </Card>
              </Col>

              <Col xl={4}>
                {/* sales Analytics */}
                <SalesAnalytics />

                {/* earning reports */}
                {/* <EarningReports /> */}
              </Col>
            </Row>

            <Row>
              <Col xl={6}>
                <Card style={{ width: "100%", height: "auto" }}>
                  <CardBody style={{ width: "100%", height: "auto" }}>
                    <h4 className="card-title mb-4">Listening</h4>

                    <Row className="text-center">
                      <Col xs={4}>
                        <h5 className="mb-0">2541</h5>
                        <p className="text-muted text-truncate">Activated</p>
                      </Col>
                      <Col xs={4}>
                        <h5 className="mb-0">84845</h5>
                        <p className="text-muted text-truncate">Pending</p>
                      </Col>
                      <Col xs={4}>
                        <h5 className="mb-0">12001</h5>
                        <p className="text-muted text-truncate">Deactivated</p>
                      </Col>
                    </Row>

                    <BarChart />
                  </CardBody>
                </Card>
              </Col>
              <Col xl={6}>
                <Card style={{ width: "100%", height: "auto" }}>
                  <CardBody style={{ width: "100%", height: "auto" }}>
                    <h4 className="card-title mb-4">Writing</h4>

                    <Row className="text-center">
                      <Col xs={4}>
                        <h5 className="mb-0">2541</h5>
                        <p className="text-muted text-truncate">Activated</p>
                      </Col>
                      <Col xs={4}>
                        <h5 className="mb-0">84845</h5>
                        <p className="text-muted text-truncate">Pending</p>
                      </Col>
                      <Col xs={4}>
                        <h5 className="mb-0">12001</h5>
                        <p className="text-muted text-truncate">Deactivated</p>
                      </Col>
                    </Row>

                    <BarChart />
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              {/* chat box */}
              {/* <ChatBox /> */}

              {/* latest transactions */}
              {/* <LatestTransactions /> */}
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Analytics;
