import React from 'react'
import { Pill, HorizontalCard, FlexContainer, Title } from '../'
import styled, {css} from 'styled-components';

const Absolute = styled.div`
  position: absolute;
  top: -40px;
  ${props => props.reverse && css`
    left: -230px;
  `}
`
const Relative = styled.div`
  position: relative;
`
const H3 = styled.h3`
  text-transform: uppercase;
  color:white;
  font-weight: bold;
  width:200px;
  text-align: right;
  ${props => props.reverse && css`
    text-align: left;
  `}
`

const Card = (props) => {
  console.log(props)
  return (
    <HorizontalCard width={'47.5%'} marginTop="20px;">
        {!props.reverse ? (
        <FlexContainer color="#808080">
          <Relative>
          <Absolute>
            <img src={props.elem.img} alt={props.elem.title} height="300"/>
          </Absolute>
          </Relative>
          <FlexContainer direction="column" height="220px" marginRight="20px">
            <H3>{props.elem.title}</H3>
            <div>
              <Title title="game analisis" right color="blue"/>
              <Pill background="blue" text="Check it out" width="100px" float="right"/>
            </div>
          </FlexContainer>
        </FlexContainer>
  )
      : (
        <FlexContainer color="#808080">
          <FlexContainer direction="column" height="220px" marginLeft="20px">
            <H3 reverse>{props.elem.title}</H3>
            <div>
              <Title title="game analisis" color="blue"/>
              <Pill background="blue" text="Check it out" width="100px"/>
            </div>
          </FlexContainer>
          <Relative>
          <Absolute reverse>
            <img src={props.elem.img} alt={props.elem.title} height="300"/>
          </Absolute>
          </Relative>
        </FlexContainer>
      )
      }
    </HorizontalCard>
  )

}

export default Card
