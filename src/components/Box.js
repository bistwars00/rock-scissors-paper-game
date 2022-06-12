import React from "react";
import "../App.css";

const Box = (props) => {
  let result;
  if (props.title === "Com" && props.result !== "TIE" && props.result !== "") {
    result = props.result === "Win" ? "Lose" : "Win";
  } else {
    result = props.result;
  }

  return (
    <div className={`box ${result}`}>
      <h2>{props.title}</h2>
      <h4>{props.item && props.item.name}</h4>
      <img className="item-img" src={props.item && props.item.img} />
      <h4>{result}</h4>
    </div>
  );
};

export default Box;
