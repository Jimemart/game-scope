import React from 'react'
import styled from 'styled-components';
import { Pill, FlexContainer } from '../'

const PriceHolder = styled.div`
  color: white;
  font-size: 50px;
  margin-left: ${props => props.marginleft ? props.marginleft : '0'};
  font-weight: light;
  margin-right: 30px;
`

const Notification = styled.div`
  position: relative;
  right: -80px;
  bottom: -5px;
  width:30%;
`

const Price = (props) => {

  const notification = props.out ?
      <Notification>
      <Pill
        text={"NOW"}
        padding={"5px 0"}
        background={"#f4425f"}
        font={"8px"}/>
      </Notification>
      : null

  return (
    <FlexContainer align="flex-end" justify="flex-start">
      <PriceHolder marginleft={props.marginleft}>
        {notification}
        64'94€
      </PriceHolder>
      <Pill
        text={props.out ? 'Buy' : 'Book'}
        padding={"10px 20px"}
        marginbottom="10px"
        width={"20%"}
        background={"#2b9b41"}/>
    </FlexContainer>
  )
}

export default Price
