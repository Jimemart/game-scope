import React from 'react'
import styled from 'styled-components';

const PillStyled = styled.div`
  background: ${props => props.background ? props.background : 'rgba(15,15,15,0.7)'};
  border-radius: 50px;
  text-transform: uppercase;
  font-weight: bold;
  width: ${props => props.width ? props.width : '100%'};
  float: ${props => props.float ? props.float : ''};
  text-align: center;
  color: white;
  padding: ${props => props.padding ? props.padding : '10px'};
  font-size: ${props => props.font ? props.font : '12px'};
`
const Pill = (props) => {
  return (
    <PillStyled
     background={props.background}
     width={props.width}
     font={props.font}
     onClick={props.onClick}
     float={props.float}
     padding={props.padding}>
      {props.text}
    </PillStyled>
  )
}

export default Pill
