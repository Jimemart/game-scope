import React from 'react'
import styled from 'styled-components';

const Section = styled.div`
  background: url(${props => props.img});
  background-size: cover;
  width:20%;
  height:170px;
  margin: 0px;
  background-position: center;
  cursor:pointer;
  color:white;
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
  position: relative;
  top: -75px;
`

const H3 = styled.h3`
  margin: 3px;
`

const Shadow = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.01) 0%,rgba(0,0,0,1) 100%);
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
