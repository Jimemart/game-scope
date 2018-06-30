import React from 'react'
import { FlexContainer, Title, Search, UserNav } from '../'

const NavBar = (props) => {
  return (
  <FlexContainer
    direction="row"
    justify="space-around"
    background="black"
    marginTop="0px">
    <div>
      <Title title="Game Scope"/>
    </div>
    <FlexContainer direction="column" align="center" width="20%" justify="center" marginTop="0px">
        <Search />
    </FlexContainer>
    <FlexContainer width="7%" marginTop="0px" align="center">
      <UserNav />

    </FlexContainer>
  </FlexContainer>
)}

export default NavBar
