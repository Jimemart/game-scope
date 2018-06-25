import React from 'react'
import { map } from 'lodash'
import styled from 'styled-components';
import { FlexContainer, Rating } from '../'

const Title = styled.h2`
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  font-size:30px;
`

const List = styled.div`
  color: white;
`
const GameCard = (props) => {
  const { game, file } = props
  console.log(props)
  return (
    <FlexContainer width="70%" background="black" padding="30px 40px" direction="column" justify="flex-start">
      <Title>{game.name}</Title>
      <FlexContainer justify="space-between" direction="row">
        <List>
          <dl>
            {map(file, (elem, index) => (
              <div key={index}>
                <dt>{elem[0]}</dt><dl>{elem[1]}</dl>
              </div>
            ))}
          </dl>
        </List>
        <Rating rating={game.rating} source={game.source}/>
        
      </FlexContainer>
    </FlexContainer>
  )
}

export default GameCard
