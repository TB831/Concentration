import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Gameboard from "../components/GameBoard";
import "./App.css";

class App extends Component {
  state = {
    startGame: false,
    cardsArray: [],
    winCounts: 0
  }

  componentDidMount() {
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52')  // Fetch request for deck
    .then(response => response.json())
    .then(data => this.setState({cardsArray: data.cards}))
    .catch(err => console.log(err));
  }


  render() {
    return (
      <React.Fragment>
        <NavBar winCounts={this.state.winCounts} />
        <Gameboard />
      </React.Fragment>
    );
  }
}

export default App;
