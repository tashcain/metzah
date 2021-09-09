import React, { useState } from "react";
import { Button } from "reactstrap";
import Speech from "react-speech";
import Volume from "../../assets/images/volume.png";
import Confetti from "react-dom-confetti";
import "./flashcard.css";

const FlashC = ({ flashcard, next, previous }) => {
  const [flip, setFlip] = useState(false);
  const config = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 270,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };
  return (
    <div className="page-content">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button className="mb-2" onClick={() => setFlip(!flip)}>
          Flip
        </Button>
        <Button className="mb-2" onClick={previous}>
          Previous
        </Button>
      </div>
      <div style={{ height: "50vh" }} className={`card ${flip ? "flip" : ""}`}>
        <div className="front ">
          <h3 className="fronthead">
            {flashcard.word}{" "}
            <Speech
              text={flashcard.word}
              textAsButton={true}
              displayText={<img height="20" src={Volume} />}
            />
          </h3>

          {/* <h5>Word Family</h5>
          <div className="flashcard-options">
            {flashcard.wordfamily.map((option) => {
              return <div className="flashcard-option">{option}</div>;
            })}
          </div> */}
          <div className="buttonHolder" style={{}}>
            <Button onClick={() => setFlip(!flip)} style={{ width: "100%" }}>
              Click to see meaning
            </Button>
          </div>
        </div>
        <div className="back">
          <h4>
            {flashcard.meaning}{" "}
            <Speech
              textAsButton={true}
              displayText={<img height="20" src={Volume} />}
              text={flashcard.meaning}
            />
          </h4>
          <label>
            Eg:
            <p>
              {flashcard.eg}
              <Speech
                text={flashcard.eg}
                textAsButton={true}
                displayText={<img height="20" src={Volume} />}
              />
            </p>
          </label>
          <br />
          <label>
            Synonyms:
            <p>
              {flashcard.synonyms}
              <Speech
                text={flashcard.synonyms}
                textAsButton={true}
                displayText={<img height="20" src={Volume} />}
              />
            </p>
          </label>
          <div className="buttonHolder" style={{ textAlign: "end" }}>
            <Button onClick={next} style={{ width: "100%" }}>
              Next
            </Button>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Confetti active={flip} config={config} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashC;
