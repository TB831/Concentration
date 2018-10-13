import React, { Component } from "react";

class Card extends Component {
  state = {
    isFlipped: false,
    cardBack: "require('../assets/playing-card-back.png')",
    cardFront: this.props.cardImage
  }

  turnCard = () => {
    this.setState({isFlipped: true});
    if (this.setState.isFlipped) {
      this.setState({cardImage: this.props.cardImage})
    }
  }

  render() {
    const { card, pickTwoCards } = this.props;
    return (
      <img
        alt='card'
        className='dib br3 pr3 ma2 grow bw2 tc'
        src={this.state.cardImage}
        height='140'
        width='80'
        onClick={() => pickTwoCards(card)}
      />
    )
  }
};

export default Card;
