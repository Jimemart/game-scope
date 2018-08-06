import React from 'react'
import styled from 'styled-components';
import { Pill, FlexContainer, GameNavigator } from '../'

const Game = styled.div`
  width: 100%;
  height: 20em;
  background: url(${props => props.img});
  background-size: cover;
  @media (min-width: 1500px) {
    height: 25em;
  }
`
const Holder = styled.div`
  width:22%;
  cursor: pointer;
  background: #0f0f0f;
  color:white;
  margin-bottom: 20px;
`
const Information = styled.div`
  margin: 5px;
  h3 {
    text-transform: uppercase;
    width 70%;
    margin-bottom: 0;
    min-height:60px;
  }
`
const Pa = styled.p`
  font-size: 13px;
  margin: 5px auto;
  color: ${props => props.color ? props.color : '#808080'}
`
const Price = styled.h2`
  font-weight: 400;
`
const Left = styled.div`
  position: relative;
  left: -30px;
`
const TopSales = (props) => {
  const { item } = props
    return (
      <Holder onClick={() => props.click(item.id)}>
        <GameNavigator id={item.id}>
          <Game img={item.img}/>
          <Information>
            <h3>{item.name}</h3>
            <FlexContainer color="#808080" align="center">
              <div>
                <Pa>Studio</Pa>
                <Pa>{item.studio}</Pa>
              </div>
              <div>
                <Pa color={"#2b9b41"}>Release</Pa>
                <Pa>{item.release}</Pa>
              </div>
            </FlexContainer>
            <FlexContainer  color="#808080" align="center">
              <div>
                <Price>{item.price}</Price>
              </div>
              <Left>
                <Pill
                  text={'buy'}
                  background={'#2b9b41'}
                  onClick={() => props.click(item.id)}/>
              </Left>
            </FlexContainer>
          </Information>
       </GameNavigator>
      </Holder>
  )
}

export default TopSales
