import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Collapse,
  Button,
} from "reactstrap";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

function Question(props) {
  //   const [isOpen, setIsOpen] = useState(false);

  //   const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <SimpleBar
        style={{
          height: window.innerHeight - 100 + "px",
        }}
      >
        <Card style={{ height: "auto" }}>
          <CardBody style={{ width: "100%" }}>
            <h4>Question</h4>
            <br />
            <strong>
              Choose the right answer from the given option . Once you submit
              the test you wont be able to change the answers
            </strong>
            <div>
              {/* <Card style={{ height: "auto" }}>
                <CardBody onClick={toggle} style={{ width: "100%" }}>
                  <p>
                    <strong>Q1</strong> Whats is the name of our galaxy ?
                  </p>
                </CardBody>
              </Card>
              <Collapse isOpen={isOpen}>
                <Card style={{ height: "auto" }}>
                  <CardBody style={{ width: "100%" }}>
                    <ul style={{ listStyle: "none" }} class="choices">
                      <li>
                        <label>
                          <input
                            //   disabled={this.state.d}
                            //   onClick={this.upsub}
                            type="radio"
                            name="0"
                            value="A"
                          />
                          <span style={{ paddingLeft: "50px" }}>Milky Way</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input
                            //   disabled={this.state.d}
                            //   onClick={this.upsub}
                            type="radio"
                            name="0"
                            value="B"
                          />
                          <span style={{ paddingLeft: "50px" }}>Way Milky</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input
                            //   disabled={this.state.d}
                            //   onClick={this.upsub}
                            type="radio"
                            name="0"
                            value="C"
                          />
                          <span style={{ paddingLeft: "50px" }}>
                            None of the above
                          </span>
                        </label>
                      </li>
                    </ul>
                  </CardBody>
                </Card>
              </Collapse>
             */}
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      <strong className="mr-2">Q1</strong> Whats is the name of
                      our galaxy ?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <ul style={{ listStyle: "none" }} class="choices">
                        <li>
                          <label>
                            <input
                              //   disabled={this.state.d}
                              //   onClick={this.upsub}
                              type="radio"
                              name="0"
                              value="A"
                            />
                            <span style={{ paddingLeft: "50px" }}>
                              Milky Way
                            </span>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                              //   disabled={this.state.d}
                              //   onClick={this.upsub}
                              type="radio"
                              name="0"
                              value="B"
                            />
                            <span style={{ paddingLeft: "50px" }}>
                              Way Milky
                            </span>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                              //   disabled={this.state.d}
                              //   onClick={this.upsub}
                              type="radio"
                              name="0"
                              value="C"
                            />
                            <span style={{ paddingLeft: "50px" }}>
                              None of the above
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      <strong className="mr-2">Q2</strong> Whats is the name of
                      our galaxy ?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <ul style={{ listStyle: "none" }} class="choices">
                        <li>
                          <label>
                            <input
                              //   disabled={this.state.d}
                              //   onClick={this.upsub}
                              type="radio"
                              name="0"
                              value="A"
                            />
                            <span style={{ paddingLeft: "50px" }}>
                              Milky Way
                            </span>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                              //   disabled={this.state.d}
                              //   onClick={this.upsub}
                              type="radio"
                              name="0"
                              value="B"
                            />
                            <span style={{ paddingLeft: "50px" }}>
                              Way Milky
                            </span>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                              //   disabled={this.state.d}
                              //   onClick={this.upsub}
                              type="radio"
                              name="0"
                              value="C"
                            />
                            <span style={{ paddingLeft: "50px" }}>
                              None of the above
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      <p>
                        <strong className="mr-2">Q3</strong>WHat is the name of
                        our galaxy?
                      </p>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <ul style={{ listStyle: "none" }} class="choices">
                        <li>
                          <label>
                            <input
                              //   disabled={this.state.d}
                              //   onClick={this.upsub}
                              type="radio"
                              name="0"
                              value="A"
                            />
                            <span style={{ paddingLeft: "50px" }}>
                              Milky Way
                            </span>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                              //   disabled={this.state.d}
                              //   onClick={this.upsub}
                              type="radio"
                              name="0"
                              value="B"
                            />
                            <span style={{ paddingLeft: "50px" }}>
                              Way Milky
                            </span>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                              //   disabled={this.state.d}
                              //   onClick={this.upsub}
                              type="radio"
                              name="0"
                              value="C"
                            />
                            <span style={{ paddingLeft: "50px" }}>
                              None of the above
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Button onClick={() => console.log("stoptimer")} color="success">
                Submit
              </Button>
              <Link to={props.next}>
                <Button style={{ marginLeft: "10px" }} color="success">
                  Next
                </Button>
              </Link>
            </div>
          </CardBody>
        </Card>
      </SimpleBar>
    </div>
  );
}

export default Question;
