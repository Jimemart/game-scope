import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components';

import { StateUpdater } from '../'
import { withBorderBottom } from '../../components'
import { Menu, TopSales, News, Analisis, Streams, DisplayList } from '../../components'
import { singleGame } from '../../store/games/selectors'
import { currentNews } from '../../store/news/selectors'
import { actions as news } from '../../store/news/actions'
import { actions as games } from '../../store/games/actions'

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  flex-wrap: wrap;
`

class NavigationMenu extends Component {
  pills = ['Top sales', 'News', 'Analisis', 'Streams', 'Guides']
  state = {
    active: 'Top sales'
  }

  getGame = (id) => {
    this.props.onSelectGame(id)
  }

  setActiveHandler = (str) => {
    this.setState({active: str})
    this.props.onSelectNews(str)
  }

  render () {
    let ItemsList = ''
    let color = ''
    let title = ''
    switch(this.state.active) {
      case 'Top sales':
        ItemsList = DisplayList(TopSales)
        break;
      case 'News':
        ItemsList = DisplayList(withBorderBottom(News, '47.5%', '270px', '40'))
        break;
      case 'Analisis':
        ItemsList = DisplayList(withBorderBottom(Analisis, '47.5%', '100%', '40'))
        title= 'game analisis'
        color= 'blue'
        break;
      case 'Streams':
        ItemsList = DisplayList(withBorderBottom(Streams, '47.5%', '100%', '40'))
        title= 'game stream'
        color= '#6242f4'
        break;
      case 'Guides':
        ItemsList = (<div>Guides</div>)
        break;
      default:
        ItemsList = (<div>Top sales</div>)
    }
    return (
        <StateUpdater initialState="Top sales" onUpdate={this.setActiveHandler} onMount={() => this.props.onSelectNews(this.state.active)}>
          {(active, onUpdate) => (
            <div>
              <Menu pills={this.pills} active={active} setActive={(str) => onUpdate(str)}/>
              <Flex>
                <ItemsList items={this.props.news} color={color} title={title} click={(id) => this.getGame(id)}/>
              </Flex>
            </div>
          )}
        </StateUpdater>

    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    news: currentNews(ownProps)(state),
    game: singleGame(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSelectNews: (str) => dispatch(news.getNews(str)),
    onSelectGame: (id) => dispatch(games.getSingleGame(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavigationMenu))
