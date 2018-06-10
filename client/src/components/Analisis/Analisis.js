import React from 'react'
import styled from 'styled-components';
import { Pill, HorizontalCard, FlexContainer, Title } from '../'

const Absolute = styled.div`
  position: absolute;
  top: -40px;
`
const Relative = styled.div`
  position: relative;
  text-transform: uppercase;
`
const Analisis = (props) => {
  const {news} = props
  const shapedAnalisis = news ? news.map((elem, i) => {
    return (
      <HorizontalCard key={i} width={'47.5%'} marginTop="20px;">
        <FlexContainer color="#808080">
          <Relative>
          <Absolute>
            <img src={elem.img} alt={elem.title} height="300"/>
          </Absolute>
          </Relative>
          <FlexContainer direction="column" height="220px">
            <h3>{elem.title}</h3>
            <div>
              <Title title="game analisis" right color="blue"/>
              <Pill background="blue" text="Check it out" width="100px" float="right"/>
            </div>
          </FlexContainer>
        </FlexContainer>
      </HorizontalCard>
    )
  }) : ''

  return (
    shapedAnalisis
  )
}

export default Analisis
