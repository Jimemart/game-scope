import React from 'react'
import { FlexContainer, Title, Search, UserNav } from '../'

const NavBar = (props) => {
  const { user, search } = props
  return (
  <FlexContainer
    direction="row"
    justify="space-around"
    background="black"
    marginTop="0px">
    <div onClick={props.navigate}>
      <Title title="Game Scope" cursor="true"/>
    </div>
    <FlexContainer direction="column" align="center" width="20%" justify="center" marginTop="0px">
      <form onSubmit={search} style={{width: '100%'}}>
        <Search />
      </form>
    </FlexContainer>
    <FlexContainer width="9%" marginTop="0px" align="center">
      <UserNav user={user}/>

    </FlexContainer>
  </FlexContainer>
)}

export default NavBar
