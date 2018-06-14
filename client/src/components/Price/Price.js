import React from 'react'
import styled from 'styled-components';
import { Pill, FlexContainer } from '../'

const PriceHolder = styled.div`
  color: white;
  font-size: 50px;
  margin-left:30px;
  font-weight: light;
`

const Notification = styled.div`
  position: relative;
  right: -50px;
  bottom: -5px;
  width:30%;
`

const Price = (props) => {

  const notification = props.out ?
      <Notification>
      <Pill
        text={"NOW"}
        padding={"3px"}
        background={"#f4425f"}
        font={"8px"}/>
      </Notification>
      : null

  return (
    <FlexContainer align="center">
      <PriceHolder>
        {notification}
        60€
      </PriceHolder>
      <Pill
        text={props.out ? 'Buy' : 'Book'}
        padding={"10px 20px"}
        width={"20%"}
        background={"#2b9b41"}/>
    </FlexContainer>
  )
}

export default Price
