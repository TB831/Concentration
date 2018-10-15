import React from "react";
import '../Card/card.css';
import backCardImage from '../../assets/playing-card-back.png';

const Card = ({ card, index, cardHandleClick, display }) => {

  return (
    <div className='dib'>
      <div className='card-front'></div>
        <img
            alt='card back'
            className='dib br3 pr3 ma2 grow bw2 tc'
            src={display ? card.image : backCardImage}
            height='160px'
            width='90px'
            onClick={() => cardHandleClick(index)}
          ></img>
    </div>
  )
}

export default Card;
