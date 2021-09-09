import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//Import Components
import MiniWidgetsIelts from "./miniwidforIelts";

class IeltsHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbItems: [
        { title: "metzah", link: "#" },
        { title: "IELTS", link: "#" },
      ],
      reports: [
        {
          icon: "ri-stack-line",
          title: "Number of Sales",
          value: "Reading",
          rate: "30",
          desc: "Minutes",
          path: "reading",
        },
        {
          icon: "ri-store-2-line",
          title: "Sales Revenue",
          value: "Listening",
          rate: "60",
          desc: "Minutes",
          path: "listening",
        },
        {
          icon: "ri-briefcase-4-line",
          title: "Average Price",
          value: "Writing",
          rate: "60",
          desc: "Minutes",
          path: "writing",
        },
        {
          icon: "ri-briefcase-4-line",
          title: "Average Price",
          value: "Speaking",
          rate: "11 to 14",
          desc: "Minutes",
          path: "speaking",
        },
        {
          icon: "ri-briefcase-4-line",
          title: "Average Price",
          value: "General Video",
          rate: "11 to 14",
          desc: "Minutes",
          path: "genVidTab",
        },
        {
          icon: "ri-briefcase-4-line",
          title: "Average Price",
          value: "Mock Test",
          rate: "11 to 14",
          desc: "Minutes",
          path: "mockTest",
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
              title="IELTS"
              breadcrumbItems={this.state.breadcrumbItems}
            />
            <Row>
              <Col>
                <Row>
                  <MiniWidgetsIelts reports={this.state.reports} />
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default IeltsHome;
