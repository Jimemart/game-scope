import React from 'react'
import styled from 'styled-components';
import { Pill, FlexContainer } from '../'

const Game = styled.div`
  width: 100%;
  height: 270px;
  background: url(${props => props.img});
  background-size: cover;
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
  const games = props.news ? props.news.map((elem, i) => {
    return (
      <Holder key={i} >
        <Game img={elem.img}/>
        <Information>
          <h3>{elem.name}</h3>
          <FlexContainer color="#808080" align="center">
            <div>
              <Pa>Studio</Pa>
              <Pa>{elem.studio}</Pa>
            </div>
            <div>
              <Pa color={"#2b9b41"}>Release</Pa>
              <Pa>{elem.release}</Pa>
            </div>
          </FlexContainer>
          <FlexContainer  color="#808080" align="center">
            <div>
              <Price>{elem.price}</Price>
            </div>
            <Left>
              <Pill
                text={'buy'}
                background={'#2b9b41'}/>
            </Left>
          </FlexContainer>
        </Information>
      </Holder>
    )
  }) : ''
  return games
}

export default TopSales
