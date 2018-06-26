import React from 'react'
import { map } from 'lodash'
import styled from 'styled-components';
import { FlexContainer, Rating, Price, Menu } from '../'

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

const Holder = styled.div`
  width: ${props => props.width ? props.width : 'auto'};
  max-height: ${props => props.maxheight ? props.maxheight : ''};
  color: white;
  overflow-y: scroll;
  p {
    padding-right: 20px;
  }
  ::-webkit-scrollbar {
    width: 3px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #2b9b41;
}
`

const GameCard = (props) => {
  const { game, file } = props
  const pills = ['Resumen', 'Images', 'Videos', 'Analisis', 'Second hand']
  return (
    <FlexContainer width="70%" background="rgb(22,22,22)" padding="30px 40px" direction="column" justify="flex-start">
      <Title>{game.name}</Title>
      <FlexContainer justify="flex-start" direction="row">
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
      <FlexContainer>
        <Menu pills={pills}/>
      </FlexContainer>
      <FlexContainer justify="row">
        <Holder width="60%" maxheight="250px">
          <p>{game.resumen}</p>
        </Holder>
      </FlexContainer>
    </FlexContainer>
  )
}

export default GameCard
