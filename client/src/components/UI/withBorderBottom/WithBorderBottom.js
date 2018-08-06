import React from 'react';
import styled from 'styled-components';

const Border = styled.div`
width: ${props => props.width ? props.width : '20%'};
height: ${props => props.height ? props.height : '170px'};
margin-bottom: ${props => props.bottom ? `${props.bottom}px` : '3px'};
position:relative;
 :hover {
   border-bottom: ${props => props.color ? `3px solid ${props.color}` : '3px solid #2b9b41'};
   margin-bottom: ${props => props.bottom ? `${props.bottom -3}px` : '0'};
 }
`

const withBorderBottom = (Cmp, width, height, bottom) => props => {
  return (
    <Border width={width} height={height} bottom={bottom}>
      <Cmp {...props}/>
    </Border>
  )
}

export default withBorderBottom
