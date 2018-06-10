import styled from 'styled-components';

const Shadow = styled.div`
  position: absolute;
  width: 100%;
  height: ${props => props.main ? '88vh' : '100%'};
  background: linear-gradient(to bottom, rgba(0,0,0,0.01) 0%,${props => props.main ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,1)'} 100%);
`
export default Shadow
