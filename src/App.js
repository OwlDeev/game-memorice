import * as React from "react";
import Box from "@mui/material/Box";
import "./app.css";
import Board from "./views/Board";
import { Cards } from "./Cards";
import { useState } from "react";

export default function App() {
  let allCards = Cards;
  let allCardTwo = [];
  let allCardFinal = [];
  let contador = allCards.length;
  for (const card of Cards) {
    contador++;
    let index = {index: contador, src: card.src};
    allCardTwo.push(index)
  }
  allCardFinal = allCards.concat(allCardTwo)
  allCards = allCardFinal.sort(function () {
    return Math.random() - 0.5;
  });
  const [cardsState, setCards] = useState(allCards);

  return (
    <Box className="mainApp">
      <Box>
        <Board Cards={cardsState} setCards={setCards}></Board>
      </Box>
    </Box>
  );
}
