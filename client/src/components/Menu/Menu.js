import React from 'react'
import styled from 'styled-components';

const Pill = styled.div`
  color: white;
  border-radius: 50px;
  padding: 10px;
  margin: auto 20px;
  cursor: pointer;
  &.active {
    background: rgba(147, 147, 147, 0.2);
  }
`
const MenuHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify: space-around;
`

const Menu = (props) => {
  const pills = props.pills.map((elem, i) =>{
     return elem === props.active ? (
       <Pill
         key={i}
         onClick={() => props.setActive(elem)}
         className='active'>
         {elem}
       </Pill>) :
       (
         <Pill
          key={i}
          onClick={() => props.setActive(elem)}>
           {elem}
         </Pill>
       )
   })
  return (
    <MenuHolder>
      {pills}
    </MenuHolder>
  )
}

export default Menu
