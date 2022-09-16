import React from "react";
import Card from "../components/Card";
import "./board.css";

function Board({ Cards }) {

  return (
    <div className="divMainBoard">
      {Cards.map((card) => (
        <Card key={card.index} info={card}></Card>
      ))}
    </div>
  );
}

export default Board;
