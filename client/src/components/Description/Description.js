import React from 'react'
import styled from 'styled-components';
import { Pill } from '../'

const GameDescription = styled.div`
  color: white;
  width: 27%;
  position: relative;
  top: -50px;
  h1 {
    font-size: 50px;
    margin-bottom: 5px;
  }
  span {
    color: #2b9b41;
  }
  p {
    font-size: 15px;
    margin-bottom: 0;
  }
  h5 {
    margin-top: 10px;
  }
`
const FlexTags = styled.div`
  display: flex;
  justify-content: space-around;
`

const Description = (props) => {
  const firstLetter = props.title.substring(0,1)
  const restTitle = props.title.substring(1,props.title.length)

  const tags = props.tags.map((elem, i) => {
    return (
      <Pill key={i} text={elem} width={"20%"}/>
    )
  })

  return(
    <GameDescription>
      <h1><span>{firstLetter}</span>{restTitle}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vestibulum neque erat, dignissim sit amet leo id, commodo gravida
         mauris. Aliquam imperdiet ultricies ipsum id tincidunt.
       Donec cursus molestie nisl vitae. </p>
     <h5>Plataformas: </h5>
     <FlexTags>
       {tags}
     </FlexTags>
    </GameDescription>
  )
}

export default Description
