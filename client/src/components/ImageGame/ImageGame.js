import React from 'react';
import { FlexContainer, Shadow } from '../'
import { map } from 'lodash'
import styled from 'styled-components';

const ImgBackground = styled.div`
  background:red;
  display: flex;
  padding: 40px 0px;
  direction: column;
  justify-content: center;
  background: ${props => props.background ? `url(${props.background})` : 'transparent'};
  background-size: cover;
  background-position: bottom;
  height:100%;
`
const ImgHolder = styled.div`
  width: 80%;
  z-index: 1
`
const Zindex = styled.div`
    z-index: 1;
    width: 80%;

`
const Title = styled.h3`
  text-transform: uppercase;
  font-weight: bold;
  color: #2b9b41;
  span {
    color: white;
  }
`
const Small = styled.p`
  color: white;
  margin-top:15px;
  font-size: 0.7em;
`

const ImageGame = (props) => {
  const { background, front, avatars, description } = props
  return (
    <FlexContainer width="40%" direction="column" align="center" height="98.5%">
      <ImgBackground background={background}>
        <FlexContainer direction="column" align="center">
          <ImgHolder>
            <img src={front} alt="cover" width="100%"/>
          </ImgHolder>
          <Zindex>
            <Title>
              Available <span>avatars</span>
            </Title>
          </Zindex>
          <Zindex>
            <FlexContainer>
              {
                map(avatars, (elem, index) => (
                  <img key={index} src={elem} alt="avatar"  width="20%" height="20%"/>
                ))
              }
            </FlexContainer>
          </Zindex>
          <Zindex>
            <Small>
              {description}
            </Small>
          </Zindex>
        </FlexContainer>

      </ImgBackground>

      <Shadow gamepage/>
    </FlexContainer>
  )
}

export default ImageGame
