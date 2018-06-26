import React from 'react';
import { ImageGame, FlexContainer, GameCard } from '../'

const Game = (props) => {
  const { game, file } = props
  return (
    <FlexContainer justify="center" marginbottom="50px">
      <FlexContainer width="75%" justify="flex-start">
        <ImageGame
          background={game.background}
          front={game.front}
          avatars={game.avatars}
          description={game.short_description}/>
        <GameCard
          game={game}
          file={file} />
      </FlexContainer>
    </FlexContainer>

  )
}

export default Game
