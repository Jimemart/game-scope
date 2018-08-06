import React from 'react'
import { Single, FlexContainer, withBorderBottom } from '../'

const Relevant = (props) => {
  let sections

  if(props.relevant) {
    const SingleWithBorder = withBorderBottom(Single)
    sections = props.relevant.map((elem, i) => <SingleWithBorder key={i} game={elem}/>)
  }

  return (
    <FlexContainer justify="flex-start" marginTop="0px">
      {sections}
    </FlexContainer>
  )
}

export default Relevant
