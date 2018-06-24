import React from 'react'
import styled, { css } from 'styled-components';
import { Title, HorizontalCard } from '../'

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
  const { item } = props
    return (
      <HorizontalCard width={'47.5%'}>
        <Spreader>
          <Title title={'game news'}/>
        </Spreader>
        <Spreader justify={'flex-start'} lastPadding>
          <div>
            <img src={item.mini} width="140px" height="140px;" alt={item.title}/>
          </div>
          <div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        </Spreader>
        <Spreader>

        </Spreader>
      </HorizontalCard>
    )
}

export default News
