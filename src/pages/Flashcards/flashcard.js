import React, { useState, useEffect } from "react";
import FlashcardList from "./flashcardList";
import "./flashcard.css";

function Flashcard() {
  const [cards, setCards] = useState([]);

  return <FlashcardList flashcards={SAMPLE_CARDS} />;
}

const SAMPLE_CARDS = [
  {
    id: 1,
    word: "ABJURE",
    wordfamily: [
      "Countermand",
      "Retract",
      "Recant",
      "Abdicate",
      "Abnegate",
      "Veto",
      "Incessant",
    ],
    meaning: "To reject solemnly.",
    eg: "She should abjure her old beliefs.",
    synonyms: "unsay, renege",
  },
  {
    id: 2,
    word: "CANON",

    meaning: "A regulation or dogma decreed by a church council.",
    eg: "He had to read a canon of accepted literary texts.",
    synonyms: "dogma, doctrine",
  },
  {
    id: 3,
    word: "TENET",
    meaning: "a principle, belief, or doctrine generally held to be true.",
    eg: "The central tenets of a religion.",
    synonyms: "principle, creed",
  },
];

export default Flashcard;
