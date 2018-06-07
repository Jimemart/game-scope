import React from 'react'
import styled, { css } from 'styled-components';
import { Title } from '../'

const Holder = styled.div`
  width:${props => props.width ? props.width : '22%'};
  background: #0f0f0f;
  height: 270px;
  color:white;
  cursor: pointer;
  margin-bottom: 20px;
`
const Spreader = styled.div`
  display: flex;
  justify-content: ${props => props.justify ? props.justify : 'space-between'};
  padding: 20px;
  padding-bottom: ${props => props.paddingB ? props.paddingB : '0'};
  ${props => props.lastPadding && css`
    div:last-child {
      padding-left: 20px;
    }
  `}
  h3 {
    margin-top: 0;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  p {
    color: #808080;
    font-size: 13px;
    line-height: 20px;
  }
`
const News = (props) => {
  const { news } = props
  const shapedNews = news ? news.map((elem, i) => {
    return (
      <Holder key={i} width={'47.5%'}>
        <Spreader>
          <Title title={'game news'}/>
        </Spreader>
        <Spreader justify={'flex-start'} lastPadding>
          <div>
            <img src={elem.mini} width="140px" height="140px;" alt={elem.title}/>
          </div>
          <div>
            <h3>{elem.title}</h3>
            <p>{elem.body}</p>
          </div>
        </Spreader>
      </Holder>
    )
  }) : ''

  return shapedNews

}

export default News
