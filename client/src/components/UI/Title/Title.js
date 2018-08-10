import React from 'react'
import styled, { css } from 'styled-components';

const StyledTitle = styled.div`
  cursor: ${props => props.cursor ? 'pointer' : 'auto'};
  width: 50px;
  text-transform: uppercase;
  color:white;
  h1 {
    font-size: 9px;
    line-height: 20px;
  }
  span {
    font-size: 40px;
    color: ${props => props.color ? props.color : '#2b9b41'};
  }

  span:last-child {
    color:white;
  }

  ${props => props.big && css`
    h1 {
      line-height: 30px;
      font-size: 15px;
    }
    span {
      font-size: 50px;
    }
  `}
  ${props => props.centered && css`
    position:relative;
    left: -50px;
    margin: 0 auto;
  `}

  ${props => props.right && css`
    text-align: right !important;
    width: 100% !important;
  `}


`

const Title = (props) => {
  const { centered, big, title, right, color, cursor} = props
  const arr = title.split(' ')
  const firstLetter = arr[1].substring(0,1)
  const rest = arr[1].substring(1, arr[1].length)
  return(
    <StyledTitle big={big} centered={centered} right={right} color={color} cursor={cursor}>
      <h1>{arr[0]}<br/><span>{firstLetter}</span><span>{rest}</span></h1>
    </StyledTitle>
  )
}

export default Title
