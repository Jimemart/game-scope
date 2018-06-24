import React from 'react';
import { Rating, Price, ImageGame, FlexContainer } from '../'

const Game = (props) => {
  const { game } = props
  return (
    <FlexContainer justify="center">
      <FlexContainer width="75%" justify="flex-start">
        <ImageGame
          background={game.background}
          front={game.front}
          avatars={game.avatars}
          description={game.short_description}/>
      </FlexContainer>
    </FlexContainer>

  )
}

export default Game
