import React from 'react'
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome'

const Font = styled(FontAwesome)`
  color: ${props => props.iconColor ? props.iconColor : '#2b9b41'};
  margin: auto 2px;
`

const Icon = (props) => {
  return (
    <span><Font name={props.name} iconColor={props.iconColor}/> {props.text}</span>
  )
}

export default Icon
