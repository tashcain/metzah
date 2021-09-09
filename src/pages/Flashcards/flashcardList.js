import React, { useState } from "react";
import Flashcard from "./flashC";
import { Button } from "reactstrap";

const FlashcardList = ({ flashcards }) => {
  console.log(flashcards[0]);
  const [counter, setCounter] = useState(0);

  let next = () => {
    if (counter < flashcards.length - 1) {
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
  };
  let previous = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(flashcards.length - 1);
    }
  };
  return (
    <div className="card-grid">
      {/* {flashcards.map((flashcard) => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} />;
      })} */}

      <Flashcard
        next={next}
        previous={previous}
        flashcard={flashcards[counter]}
        key={flashcards[counter].id}
      />
    </div>
  );
};

export default FlashcardList;
