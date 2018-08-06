import styled from 'styled-components';

const HorizontalCard = styled.div`
  background: #0f0f0f;
  height: 270px;
  color:white;
  cursor: pointer;
  margin-top: ${props => props.marginTop ? props.marginTop : 'auto'};
  box-sizing: border-box;
`
export default HorizontalCard
