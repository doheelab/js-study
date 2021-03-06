import React from "react";
import "./card-list.style.css";
import Card from "../card/card.component";

function CardList(props) {
  return (
    <div className="card-list">
      {props.monsters.map(monster => {
        return <Card monster={monster} />;
      })}
    </div>
  );
}

export default CardList;
