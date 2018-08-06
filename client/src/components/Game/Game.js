import React from 'react';
import { ImageGame, FlexContainer, GameCard, GameWorld, DisplayList, News, withBorderBottom } from '../'



const Game = (props) => {
  const ListOfRelevant = DisplayList(withBorderBottom(News, '47.5%', '270px', '40'))
  const { game, file, relevant } = props
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
    <FlexContainer justify="center">
      <FlexContainer justify="space-between" width="80%">
        <ListOfRelevant items={relevant}/>
      </FlexContainer>
    </FlexContainer>
    <GameWorld />
    </div>
  )
}

export default Game
