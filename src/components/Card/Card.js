import React from "react";
// import ReactCardFlip from 'react-card-flip';
import '../Card/card.css';

const Card = ({ card, index, cardHandleClick, display }) => {
  return (
        <img
          alt='card back'
          className='dib br3 pr3 ma2 grow bw2 tc'
          src={card.image}
          height='160px'
          width='90px'
          display={display}
          onClick={() => cardHandleClick(index)}
        ></img>
    // <div className='dib'>
      // <ReactCardFlip isFlipped={display}>
      //   <img
      //     alt='card back'
      //     key='front'
      //     className='br3 pr3 ma2 grow bw2 tc'
      //     src={cardImage}
      //     height='160px'
      //     width='90px'
      //     onClick={() => cardHandleClick(index)}
      //   ></img>
      //   <img
      //     alt='card back'
      //     key='back'
      //     className='br3 pr3 ma2 grow bw2 tc'
      //     src={require('../assets/playing-card-back.png')}
      //     height='160px'
      //     width='90px'
      //     onClick={() => cardHandleClick(index)}
      //   ></img>
      // </ReactCardFlip>
    // </div>
  )
}

export default Card;
