import React from 'react'
import { FlexContainer, Icon } from '../'
import styled from 'styled-components';

const Holder = styled.div`
  width: 2em;
`
const H5 = styled.h5`
  margin: 0;
`
const User = styled.div`
  color: white;
`

const UserNav = (props) => {
  return (
    <FlexContainer direction="row">
      <Holder>
        <img src="https://png.icons8.com/color/1600/avatar.png" alt="avatar-user" width="100%"/>
      </Holder>
      <User>
        <H5>Jimena Martin</H5>
        <Icon name={"fas fa-envelope"} text={"4"} iconColor="yellow"/>
        <Icon name={"fas fa-user"} text={"1200"} iconColor="grey"/>
      </User>
    </FlexContainer>
  )
}

export default UserNav
