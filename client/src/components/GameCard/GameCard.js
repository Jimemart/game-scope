import React from 'react'
import { map } from 'lodash'
import styled from 'styled-components';
import { FlexContainer, Rating, Price } from '../'

const Title = styled.h2`
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  font-size:30px;
`

const List = styled.div`
  color: white;
  width: 50%;
`
const Dt = styled.dt`
  text-transform: capitalize;
  display: inline-block;
  margin-right: 5px;
  width:35%;

`
const Dl = styled.dl`
  display: inline-block;
  margin-top: 0;
  margin-bottom: 10px;
`
const GameCard = (props) => {
  const { game, file } = props
  return (
    <FlexContainer width="70%" background="black" padding="30px 40px" direction="column" justify="flex-start">
      <Title>{game.name}</Title>
      <FlexContainer justify="space-between" direction="row">
        <List>
          <dl>
            {map(file, (elem, index) => (
              <div key={index}>
                <Dt>{elem[0]}: </Dt>
                <Dl>{elem[1]}</Dl>
              </div>
            ))}
          </dl>
        </List>
        <Rating rating={game.rating} source={game.source}/>
      </FlexContainer>
      <FlexContainer direction="row" width="50%">
        <Price out={true}/>
      </FlexContainer>
    </FlexContainer>
  )
}

export default GameCard
