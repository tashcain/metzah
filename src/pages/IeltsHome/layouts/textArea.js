import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
} from "reactstrap";

function TextArea() {
  return (
    <div>
      <Card style={{ height: "auto" }}>
        <CardBody style={{ width: "100%" }}>
          <Form>
            <FormGroup>
              <Label for="exampleText">Write your answer here</Label>
              <Input type="textarea" rows={14} name="text" id="exampleText" />
            </FormGroup>
            <Button color="success">Submit</Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}

export default TextArea;
