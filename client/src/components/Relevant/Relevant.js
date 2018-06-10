import React from 'react'
import { Single, FlexContainer } from '../'

const Relevant = (props) => {
  let sections

  if(props.relevant) {
    sections = props.relevant.map((elem, i) => <Single key={i} game={elem}/>)
  }

  return (
    <FlexContainer justify="flex-start" marginTop="0px">
      {sections}
    </FlexContainer>
  )
}

export default Relevant
