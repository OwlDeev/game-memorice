import React from "react";
import Card from "../components/Card";
import "./board.css";
import { useState } from "react";

function Board({ Cards, setCards }) {

  const [cardSelect,setCardSelect] = useState('');

  return (
    <div className="divMainBoard">
      {Cards.map((card) => (
        <Card key={card.index} info={card} cardsGame={Cards} setCards={setCards} cardSelect={cardSelect} setCardSelect={setCardSelect}></Card>
      ))}
    </div>
  );
}

export default Board;
