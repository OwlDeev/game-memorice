import * as React from "react";
import Box from "@mui/material/Box";
import "./app.css";
import Board from "./views/Board";
import { Cards } from "./Cards";
import { useState } from "react";

export default function App() {
  let allCards = Cards.concat(Cards);
  allCards = allCards.sort(function () {
    return Math.random() - 0.5;
  });
  const [cardsState, setCards] = useState(allCards);

  return (
    <Box className="mainApp">
      <Box>
        <Board Cards={cardsState}></Board>
      </Box>
    </Box>
  );
}
