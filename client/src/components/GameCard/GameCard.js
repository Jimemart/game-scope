import React from 'react'
import { map } from 'lodash'
import styled from 'styled-components';
import { MaxiSize, FlexContainer, Rating, Price, Menu } from '../'

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
    padding-right: 15px;
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
  const pills = ['Resumen', 'Videos', 'Analisis', 'Used']
  return (
    <FlexContainer width="60%" background="rgb(22,22,22)" padding="30px 40px" direction="column" justify="flex-start">
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
      <FlexContainer justify="space-around">
        <Menu pills={pills} active="Resumen" marginbottom="10px"/>
      </FlexContainer>
      <FlexContainer justify="row" maxheight="270px">
        <Holder width="100%">
          <p>{game.resumen}</p>
        </Holder>
        <FlexContainer wrap="wrap" direction="row" padding="10px 10px 0">
          {map(game.screenshots, (elem, index) => <MaxiSize img={elem} list={game.screenshots} key={`modal-${index}`}/>)}
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  )
}

export default GameCard
