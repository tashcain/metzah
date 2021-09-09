import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CustomInput,
  Label,
  ButtonGroup,
  Button,
  Container,
} from "reactstrap";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import "./profileMain.css";

class PersonalInfo extends Component {
  constructor() {
    super();
    this.state = {
      showPhotoEdit: false,
    };
  }

  togglePhotoEdit = () => {
    this.setState({
      showPhotoEdit: !this.state.showPhotoEdit,
    });
  };
  render() {
    return (
      <React.Fragment>
        <Card style={{ width: "100%", height: "auto", textAlign: "center" }}>
          <CardBody style={{ width: "100%", height: "auto" }}>
            <Container fluid>
              <Row>
                <Col md={3}>
                  <div className="contain mt-4 mt-md-0">
                    <img
                      className="photo rounded-circle avatar-xl"
                      alt="ProfileImage"
                      src={avatar4}
                    />
                    <div onClick={() => this.togglePhotoEdit()} class="middle">
                      <i className="ri-edit-box-fill h3"></i>
                    </div>
                  </div>
                </Col>

                <Col md={6}>
                  <div className="profileMain">
                    <h2>John Doe</h2>
                    <p>
                      9999999999 <br />
                      johndoe@gmail.com
                    </p>
                  </div>
                </Col>
              </Row>
              {this.state.showPhotoEdit && (
                <Row>
                  <div style={{ marginTop: "3%" }} className="custom-file">
                    <Label className="custom-file-label" htmlFor="customFile">
                      Select
                    </Label>
                    <CustomInput
                      type="file"
                      className="custom-file-input m-0 p-0"
                      id="customFile"
                      onChange={(e) => this.handleImageChange(e)}
                    />
                  </div>
                  <Button
                    type="button"
                    className="btn-success mt-2"
                    onClick={this.handleImageUpload}
                  >
                    Upload image
                  </Button>
                </Row>
              )}
            </Container>
          </CardBody>

          <CardBody className="border-top text-center">Gold</CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default PersonalInfo;
