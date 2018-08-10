import React from 'react'
import styled from 'styled-components';
import { Shadow, GameNavigator } from '../'

const Section = styled.div`
  background: url(${props => props.img});
  background-size: cover;
  margin: 0px;
  background-position: center;
  cursor:pointer;
  color:white;
  height: 100%;
  box-sizing: border-box;
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
  const { game : {img, id, name, price} } = props

 return(
   <Section img={img}>
     <GameNavigator id={id}>
       <Shadow/>
       <Holder>
         <H3>{name}</H3>
         <Price>
           {price}
         </Price>
       </Holder>
     </GameNavigator>
   </Section>
 )
}

export default Single
