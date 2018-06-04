import React from 'react'
import styled from 'styled-components';
import { Single } from '../'
const Flex = styled.div`
  display: felx;
  justify-content: flex-start;
`

const Relevant = (props) => {
  let sections

  if(props.relevant) {
    sections = props.relevant.map(elem => <Single game={elem}/>)
  }

  return (
    <Flex>
      {sections}
    </Flex>
  )
}

export default Relevant
