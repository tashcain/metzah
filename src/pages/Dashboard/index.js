import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//Import Components
import MiniWidgets from "./MiniWidgets";
import RevenueAnalytics from "./RevenueAnalytics";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbItems: [
        { title: "metzah", link: "#" },
        { title: "Dashboard", link: "#" },
      ],
      reports: [
        {
          icon: "ri-stack-line",
          title: "Number of Sales",
          value: "IELTS",
          rate: "2.4%",
          desc: "From previous period",
        },
      ],
      upgrade: [
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
              title="Dashboard"
              breadcrumbItems={this.state.breadcrumbItems}
            />
            <Row>
              <Col xl={8}>
                <Row>
                  <MiniWidgets reports={this.state.reports} />
                </Row>

                {/* revenue Analytics */}
                {/* <RevenueAnalytics /> */}
              </Col>

              <Col xl={4}>
                {/* sales Analytics */}
                {/* <SalesAnalytics /> */}

                {/* earning reports */}
                {/* <EarningReports /> */}
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  {/* <h4 className="mb-0">Available and update courses</h4> */}
                </div>
              </Col>
            </Row>

            <Row>
              <Col xl={8}>
                <Row>{/* <MiniWidgets reports={this.state.upgrade} /> */}</Row>

                {/* revenue Analytics */}
                {/* <RevenueAnalytics/> */}
              </Col>

              <Col xl={4}>
                {/* sales Analytics */}
                {/* <SalesAnalytics /> */}

                {/* earning reports */}
                {/* <EarningReports /> */}
              </Col>
            </Row>

            <Row>
              {/* sources */}
              {/* <Sources /> */}

              {/* recent activity */}
              {/* <RecentlyActivity /> */}

              {/* revenue by locations */}
              {/* <RevenueByLocations /> */}
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

export default Dashboard;
