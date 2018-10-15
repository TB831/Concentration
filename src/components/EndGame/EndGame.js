import React from "react";

const EndGame = ({}) => {
  return (
    <div className="jumbotron tc">
      <h2>🎉 👏 🎊 You Won! 🎊 👏 🎉</h2>
      <h3>Click New Game to Start Again!</h3>
      <a href='/'><button className="btn btn-primary btn-sm m-2">New Game</button></a>
    </div>
  );
};

export default EndGame;
