import React, { Component } from "react";
import Card from "./Card";
import GameStats from "./GameStats";

class GameBoard extends Component {
  state = {
    selectedCards: [],
    matchedCards: 0,
    gameOver: false
  };

  pickTwoCards = card => {
    let selectedCards = this.state.selectedCards;
    if (selectedCards.length <= 2) {
      selectedCards.push(card.value);
      this.setState({ selectedCards });
    }
    console.log(selectedCards);
    if (selectedCards.length === 2) {
      this.checkForMatch(selectedCards);
      this.clearSelectedCards();
    }
    this.checkForWin();
    console.log(this.state.matchedCards);
  };

  checkForWin() {
    if (this.state.matchedCards === 26) {
      this.setState({ gameOver: true});
    }
  }

  clearSelectedCards = () => {
    const emptyArray = [];
    this.setState({ selectedCards: emptyArray });
  };

  checkForMatch = cards => {
    if (cards[0] === cards[1]) {
      let matchedCards = this.state.matchedCards;
      matchedCards++;
      this.setState({ matchedCards });
    }
  };

  render() {
    const cards = this.props.cardsArray.map((card, i) => {
      return <Card key={i} card={card} pickTwoCards={this.pickTwoCards} />;
    });

    if (this.state.gameOver === false) {
      return <div>{cards}</div>;
    } else {
      return <GameStats />;
    }
  }
}

export default GameBoard;
