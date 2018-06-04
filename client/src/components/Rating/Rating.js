import React from 'react'
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome'

const Holder = styled.div`
  border-radius: 50px;
  background: rgba(15,15,15,0.7);
  display:flex;
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
const FontAw = styled(FontAwesome)`
  color: #2b9b41;
  margin: auto 2px;
`
const Price = styled.div`
  color: white;
  font-size: 50px;
  margin-left:30px;
  font-weight: light;
`
const BuyButton = styled.div`
  background: #2b9b41;
  border-radius 50px;
  color: white;
  text-align: center;
  padding: 10px 20px;
  height: 20px;
  margin-left:40px;
`
const Flex = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top:10px;
`
const Notification = styled.div`
  background: #f4425f;
  font-size: 8px;
  font-weight: bold;
  text-align: center;
  width: 30%;
  padding: 3px;
  border-radius: 20px;
  position: relative;
  right: -50px;
  bottom: -5px;
`

const Rating = (props) => {
  const notification = props.out ? <Notification>NOW</Notification> : ''
  const number = Number(props.rating)
  let stars = []
  for (var i = 0; i < number; i++) {
    if (number - i !== 0.5) {
      stars.push(<FontAw name='star' key={i}/>)
    } else {
      stars.push(<FontAw name='star-half' key={i}/>)
    }
  }

  return (
    <div>
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
      <Flex>
        <Price>
          {notification}
          60€
        </Price>
        <BuyButton>
          {props.out ? 'Comprar' : 'Reservar'}
        </BuyButton>
      </Flex>
    </div>
  )
}

export default Rating
