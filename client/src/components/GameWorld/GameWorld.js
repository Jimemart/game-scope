import React from 'react'
import styled from 'styled-components';
import { NavigationMenu } from '../../containers'
import { Title } from '../'

const Flex = styled.div`
  display: flex;
  justify-content: center;
  background: #222;
  padding-top: 50px;
`
const Holder = styled.div`
  display:flex;
  width:70%;
  max-width: 1000px;
  flex-direction:column;
  justify-content: center;
`
const GameWorld = (props) => {
  return (
    <Flex>
      <Holder>
        <Title
          big
          centered
          title={'games world'}
          />
        <div>
          <NavigationMenu />
        </div>
      </Holder>
    </Flex>
  )
}

export default GameWorld
