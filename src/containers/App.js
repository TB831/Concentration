import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBar";
import Card from "../components/Card/Card";
import EndGame from "../components/EndGame/EndGame";
import "./App.css";

const initialState = {
  cardRevealStates: [],
  cardsArray: [],
  revealedCards: [],
  gameOver: false,
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  componentDidMount() {
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52')  // Fetch request for deck
    .then(response => response.json())
    .then(data => this.setState({cardsArray: data.cards, 
      cardRevealStates: new Array(data.cards.length).fill(false)
    }))
    .catch(err => console.log(err));
  }

  handleClick = (index) => {
    const newRevealCardStates = this.state.cardRevealStates;
    newRevealCardStates[index] = true
    console.log(newRevealCardStates);
    console.log(this.state.cardsArray[index]);
    this.setState({cardRevealStates: newRevealCardStates});
    this.checkForMatch();
  }

  checkForMatch = () => {
    const revealedCards = this.state.cardsArray.filter((_, i) => this.state.cardRevealStates[i]);
    if (revealedCards.length === 2) {
      if (this.isMatch(revealedCards)) {
        this.removeCards(revealedCards);
      }
      this.hideCards()
    }
    this.checkForWin();
  }

  isMatch = (cards) => {
    return cards[0].value === cards[1].value;
  }

  removeCards = (matchedCards) => {
    const cards = this.state.cardsArray;
    const myArray = cards.filter(card => {return !matchedCards.includes(card)});
    this.setState({cardsArray: myArray});
  }

  hideCards(onSetState = () => {}) {
    setTimeout(() => {
      this.setState({cardRevealStates: new Array(this.state.cardsArray.length).fill(false)},
        onSetState()
      );
    }, 500);
  }

  checkForWin = () => {
    const remainingCards = this.state.cardsArray;
    let wins = this.state.winCounts;
    if (remainingCards === 0) {
      wins++;
      this.setState({ gameOver: true, winCounts: wins });
    }
  }

  render() {
    if (this.state.gameOver === false) {
      return (
        <React.Fragment>
          <NavBar winCounts={this.state.winCounts} />
          <div>{this.renderCards()}</div>
        </React.Fragment>
      );
    }
    else {
      return (
        <EndGame />
      )
    }
  }

  startNewGame = () => {
    const { gamesPlayed } = this.state;
    this.setState({
      cardRevealStates: new Array(this.cards.length).fill(false),
      gamesPlayed: gamesPlayed + 1,
    });
  }

  renderCards = () => {
    return this.state.cardsArray.map((card, index) => {
      return (
        <Card 
          key={index}
          index={index} 
          card={card}
          cardHandleClick={this.handleClick}
          display={this.state.cardRevealStates[index]}
        />
      )
    });
  }
}

export default App;
