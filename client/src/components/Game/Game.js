import React from 'react';
import { ImageGame, FlexContainer, GameCard, GameWorld } from '../'

const Game = (props) => {
  const { game, file } = props
  return (
    <div>
    <FlexContainer justify="center" marginbottom="50px">
      <FlexContainer width="80%" justify="flex-start">
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
    <GameWorld />
    </div>
  )
}

export default Game
