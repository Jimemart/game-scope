import styled from 'styled-components';

const HorizontalCard = styled.div`
  width:${props => props.width ? props.width : '22%'};
  background: #0f0f0f;
  height: 270px;
  color:white;
  cursor: pointer;
  margin-bottom: 20px;
  margin-top: ${props => props.marginTop ? props.marginTop : 'auto'};
  box-sizing: border-box;
  :hover {
      border-bottom: 3px solid #2b9b41;
    }
`
export default HorizontalCard
