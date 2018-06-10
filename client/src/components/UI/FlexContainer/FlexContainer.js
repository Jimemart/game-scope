import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  justify-content: ${props => props.justify ? props.justify : 'space-between'};
  align-items: ${props => props.align ? props.align : 'auto'};
  margin-top:${props => props.marginTop ? props.marginTop : '10px'};
  color: ${props => props.color ? props.color : 'inherit'};
  height: ${props => props.height ? props.height: 'auto'};
`
export default FlexContainer
