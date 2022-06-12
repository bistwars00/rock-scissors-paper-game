import React, { useState } from "react";
import Box from "./components/Box";

const choice = {
  rock: {
    name: "Rock",
    img: "https://cdn-icons-png.flaticon.com/512/5773/5773204.png",
  },

  scissors: {
    name: "Scissors",
    img: "https://cdn-icons-png.flaticon.com/512/2928/2928823.png",
  },
  paper: {
    name: "Paper",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDl-q5O6lSxwk2oAbRGWbKIHV4xpNLSKQLkw&usqp=CAU",
  },
};

const App = () => {
  const [userSelect, setUserSelect] = useState(null);
  const [comSelect, setComSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let randomchoice = randoms();
    setComSelect(randomchoice);
    setResult(Winning(choice[userChoice], randomchoice));
  };

  const randoms = () => {
    let itemArray = Object.keys(choice);
    let itemidx = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[itemidx];
    return choice[final];
  };

  const Winning = (user, com) => {
    if (user.name == com.name) {
      return "TIE";
    } else if (user.name == "Scissors")
      return com.name == "Paper" ? "Win" : "Lose";
    else if (user.name == "Rock")
      return com.name == "Scissors" ? "Win" : "Lose";
    else if (user.name == "Paper") return com.name == "Rock" ? "Win" : "Lose";
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Com" item={comSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
};

export default App;
