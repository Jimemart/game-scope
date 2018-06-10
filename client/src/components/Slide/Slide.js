import React from 'react'
import styled from 'styled-components';
import { Description, Rating, Shadow } from '../'

const StyledSlide = styled.div`
  background: url(${props => props.img});
  background-size: cover;
  background-position:center;
  height: 88vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const Relative = styled.div`
  position:relative;
`

const Slide = (props) => {
  return (
    <Relative>
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
      <Shadow main/>
      </StyledSlide>
    </Relative>
  )

}

export default Slide
