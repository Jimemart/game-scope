import React from 'react'
import styled from 'styled-components';
import { Shadow } from '../'

const Section = styled.div`
  background: url(${props => props.img});
  background-size: cover;
  width:20%;
  height:170px;
  position:relative;
  margin: 0px;
  background-position: center;
  cursor:pointer;
  color:white;
  box-sizing: border-box;
  :hover {
      border-bottom: 2px solid #2b9b41;
    }
`
const Price = styled.div`
  background: #2b9b41;
  color: white;
  padding: 10px;
  border-radius: 50px 50px 50px 0%;
  font-size: 10px;
  width: 40px;
  text-align: center;
`
const Holder = styled.div`
  margin: 10px 20px;
  position: absolute;
  bottom: 0;
`

const H3 = styled.h3`
  margin: 3px;
`

const Single = (props) => {
 return(
   <Section img={props.game.img}>
     <Shadow/>
     <Holder>
       <H3>{props.game.name}</H3>
       <Price>
         {props.game.price}
       </Price>
     </Holder>
   </Section>
 )
}

export default Single
