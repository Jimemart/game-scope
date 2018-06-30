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
  const { user: {user, loading} } = props
  return (
    (loading === false ? (
      <FlexContainer direction="row">
        <Holder>
          <img src={user.avatar} alt="avatar-user" width="100%"/>
        </Holder>
        <User>
          <H5>{user.firstName} {user.secondName}</H5>
          <Icon name={"fas fa-envelope"} text={user.messages} iconColor="yellow"/>
          <Icon name={"fas fa-user"} text={user.userNumber} iconColor="grey"/>
        </User>
      </FlexContainer>) : null
    )

  )
}

export default UserNav
