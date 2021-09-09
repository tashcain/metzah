import React, { Component } from "react";
import { Col, Card, CardBody, Media } from "reactstrap";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

class MiniWidgets extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.reports.map((report, key) => (
          <Col key={key} md={8}>
            <Link to="ieltshome">
              <Card style={{ height: "264px" }}>
                <CardBody className="pb-0 w-100">
                  <Media className="pb-0">
                    <Media body className="overflow-hidden">
                      <h4 className="mb-0">{report.value}</h4>
                    </Media>
                    <div className="text-primary">
                      <i className={report.icon + " font-size-24"}></i>
                    </div>
                  </Media>
                </CardBody>
                <CardBody className="w-100 pt-0 mt-3">
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                      className="mb-2"
                    >
                      <div style={{ marginTop: "2%" }}>
                        <h5>Reading</h5>
                      </div>
                      <div>
                        <div style={{ width: 40, height: 40 }}>
                          <CircularProgressbar
                            styles={buildStyles({
                              // Text size
                              textSize: "30px",

                              // // How long animation takes to go from one percentage to another, in seconds
                              // pathTransitionDuration: 0.5,

                              // // Can specify path transition in more detail, or remove it entirely
                              // // pathTransition: 'none',

                              // // Colors
                              // pathColor: `rgba(62, 152, 199, ${30 / 100})`,
                              textColor: "black",
                              // trailColor: "#d6d6d6",
                              // backgroundColor: "#3e98c7",
                            })}
                            value={10}
                            text={`${10}%`}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                      className="mb-2"
                    >
                      <div style={{ marginTop: "2%" }}>
                        <h5>Listening</h5>
                      </div>
                      <div>
                        <div style={{ width: 40, height: 40 }}>
                          <CircularProgressbar
                            styles={buildStyles({
                              textSize: "30px",
                              textColor: "black",
                            })}
                            value={20}
                            text={`${20}%`}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                      className="mb-2"
                    >
                      <div style={{ marginTop: "2%" }}>
                        <h5>Speaking</h5>
                      </div>
                      <div>
                        <div style={{ width: 40, height: 40 }}>
                          <CircularProgressbar
                            styles={buildStyles({
                              textSize: "30px",
                              textColor: "black",
                            })}
                            value={30}
                            text={`${30}%`}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                      className="mb-2"
                    >
                      <div style={{ marginTop: "2%" }}>
                        <h5>Writing</h5>
                      </div>
                      <div>
                        <div style={{ width: 40, height: 40 }}>
                          <CircularProgressbar
                            styles={buildStyles({
                              textSize: "30px",
                              textColor: "black",
                            })}
                            value={40}
                            text={`${40}%`}
                          />
                        </div>
                      </div>
                    </div>
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

export default MiniWidgets;
