import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  position: relative;
  padding: ${props => props.padding ? props.padding: 'auto'};
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  justify-content: ${props => props.justify ? props.justify : 'space-between'};
  align-items: ${props => props.align ? props.align : 'auto'};
  margin-top:${props => props.marginTop ? props.marginTop : '10px'};
  margin-bottom:${props => props.marginbottom ? props.marginbottom : '0'};
  color: ${props => props.color ? props.color : 'inherit'};
  height: ${props => props.height ? props.height: 'auto'};
  margin-right: ${props => props.marginRight ? props.marginRight : '0px'};
  margin-left: ${props => props.marginLeft ? props.marginLeft : '0px'};
  width: ${props => props.width ? props.width : '100%'};
  background: ${props => props.background ? props.background : 'transparent'};
`
export default FlexContainer
