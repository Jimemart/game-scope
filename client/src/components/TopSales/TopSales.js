import React from 'react'
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`
const Game = styled.div`
  width: 100%;
  height: 200px;
  background: url(${props => props.img});
  background-size: cover;
`
const Holder = styled.div`
  width:20%;
  background: black;
  color:white;
`
const TopSales = (props) => {
  const games = props.news ? props.news.map((elem, i) => {
    return (
      <Holder key={i} >
        <Game img={elem.img}/>
        <p>{elem.name}</p>
      </Holder>
    )
  }) : ''
  return (
    <Flex>
      {games}
    </Flex>
  )
}

export default TopSales
