import React from 'react'
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome'

const Font = styled(FontAwesome)`
  color: ${props => props.iconcolor ? props.iconcolor : '#2b9b41'};
  font-size: ${props => props.fontSize ? props.fontSize : null};
  cursor: ${props => props.cursor ? props.cursor : 'auto'};
  margin: auto 2px;
`

const Icon = (props) => {
  return (
    <span><Font name={props.name} cursor={props.cursor} fontSize={props.fontSize} iconcolor={props.iconcolor}/> {props.text}</span>
  )
}

export default Icon
