import React from 'react'
import styled from 'styled-components';
import { Icon } from '../'

const Holder = styled.div`
  border-radius: 50px;
  background: rgba(15,15,15,0.7);
  display:flex;
  max-height: 100px;
  justify-content: flex-start;
  color: white;
  h5, p {
    margin: 5px;
  }
  p {
    font-size: 10px;
    color: #808080;
  }
`
const Circle = styled.div`
  border-radius: 100%;
  border: 5px solid #2b9b41;
  padding: 25px 20px;
  background-image: radial-gradient(circle, #71e087, #60ce75, #4fbd64, #3eac52, #2b9b41);
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`

const CenterArea = styled.div`
  padding: 15px 10px 10px 10px;
`

const Rating = (props) => {
  const number = Number(props.rating)
  let stars = []
  for (var i = 0; i < number; i++) {
    if (number - i !== 0.5) {
      stars.push(<Icon name={'star'} key={i}/>)
    } else {
      stars.push(<Icon name={'star-half'} key={i}/>)
    }
  }

  return (
    <Holder>
      <Circle>
        {props.rating}
      </Circle>
      <CenterArea>
        {stars}
        <h5>{props.source}</h5>
        <p>15th February 2018</p>
      </CenterArea>
      <Circle>
        4.5
      </Circle>
    </Holder>
  )
}

export default Rating
