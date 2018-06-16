import React from 'react';
import { Rating, Price,  } from '../'

const Game = (props) => {
  const { game } = props
  return (
    <div>
      <h2>{game.name}</h2>
      <Rating rating={game.rating} source={game.source}/>
    </div>

  )
}

export default Game
