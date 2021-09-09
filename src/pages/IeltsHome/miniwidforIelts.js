import React, { Component } from "react";
import { Col, Card, CardBody, Media } from "reactstrap";
import { Link } from "react-router-dom";

class MiniWidgetsIelts extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.reports.map((report, key) => (
          <Col key={key} md={4}>
            <Link to={report.path}>
              <Card>
                <CardBody>
                  <Media>
                    <Media body className="overflow-hidden">
                      {/* <p className="text-truncate font-size-14 mb-2">
                        {report.title}
                      </p> */}
                      <h4 className="mb-0">{report.value}</h4>
                    </Media>
                    {/* <div className="text-primary ">
                      <i className={report.icon + " font-size-24"}></i>
                    </div> */}
                  </Media>
                </CardBody>

                <CardBody className="border-top mt-0 py-3">
                  <div className="text-truncate">
                    <span className="badge badge-soft-success font-size-18 mr-1">
                      {report.rate}
                    </span>
                    <span className="text-muted font-size-18 ml-2">
                      {report.desc}
                    </span>
                  </div>
                </CardBody>
              </Card>
            </Link>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default MiniWidgetsIelts;
