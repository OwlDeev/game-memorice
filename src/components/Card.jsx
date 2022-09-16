import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import "./card.css";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";

export default function BasicCard({ info }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  var fondo = info.src;
  var fondoInicial =
    "https://i.pinimg.com/originals/eb/11/88/eb1188ba73a37bfbd8dd50d92e89324a.gif";
    
  return (
    <ReactCardFlip
      key={info.index}
      isFlipped={isFlipped}
      flipDirection="vertical"
    >
      <div>
        <Card
          sx={{ minWidth: 100 }}
          className="divCardMain"
          onClick={handleClick}
        >
          <CardMedia
            component="img"
            height="100"
            image={fondoInicial}
            alt="imagen for memorice"
            className="cardMemorice"
          />
        </Card>
      </div>

      <div>
        <Card
          sx={{ minWidth: 50 }}
          className="divCardMain"
          onClick={handleClick}
        >
          <CardMedia
            component="img"
            height="200"
            image={fondo}
            alt="imagen for memorice"
            className="cardMemorice"
          />
        </Card>
      </div>
    </ReactCardFlip>
  );
}
