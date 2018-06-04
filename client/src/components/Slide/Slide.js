import React from 'react'
import styled from 'styled-components';
import { Description, Rating } from '../'

const StyledSlide = styled.div`
  background: url(${props => props.img});
  background-size: cover;
  background-position:center;
  height: 88vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Slide = (props) => {
  return (
    <StyledSlide
      img={props.game.img}
    >
      <Description
        title={props.game.title}
        tags={props.game.tags}
      />
    <Rating
      rating={props.game.rating}
      source={props.game.source}
      out={props.game.out}
      />
    </StyledSlide>
  )

}

export default Slide
