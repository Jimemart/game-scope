import React from 'react'
import styled from 'styled-components';
import { NavigationMenu } from '../../containers'

const Flex = styled.div`
  display: flex;
  justify-content: center;
  background: #0f0f0f;
`
const Holder = styled.div`
  display:flex;
  width:60%;
  flex-direction:column;
  justify-content: center;

`

const TitleCenter = styled.div`
  width: 50px;
  text-transform: uppercase;
  color:white;
  position:relative;
  left: -50px;
  margin: 0 auto;
  h1 {
    font-size: 16px;
  }
`
const BigSpan = styled.span`
font-size: 50px;
`
const GreenSpan = styled.span`
  color: #2b9b41;
`
const GameWorld = (props) => {
  return (
    <Flex>
      <Holder>
        <TitleCenter>
          <h1> Game <BigSpan><GreenSpan>w</GreenSpan>orld</BigSpan></h1>
        </TitleCenter>
        <div>
          <NavigationMenu />
        </div>
      </Holder>
    </Flex>
  )
}

export default GameWorld
