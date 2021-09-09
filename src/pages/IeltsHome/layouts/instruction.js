import React, { useState } from "react";
import { Button, Spinner } from "reactstrap";

function Instruction(props) {
  const [isLoading, setIsLoading] = useState(false);
  let attempt = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      props.attemptClicked();
    }, 2000);
  };
  if (isLoading) {
    return (
      <div>
        <h2>{props.heading}</h2>
        <div style={{ textAlign: "center" }} className="page-content">
          <Spinner color="primary" />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h2>{props.heading}</h2>
        <h3>Instruction : </h3>
        <ol>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </li>
        </ol>
        <Button onClick={() => attempt()} color="success">
          Attempt
        </Button>
      </div>
    );
  }
}

export default Instruction;
