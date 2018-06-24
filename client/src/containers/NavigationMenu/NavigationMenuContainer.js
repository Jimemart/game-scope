import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Menu, TopSales, News, Analisis, Streams, DisplayList } from '../../components'
import { get, isEqual } from 'lodash'
import { singleGame } from '../../store/games/selectors'
import { actions as news } from '../../store/news/actions'
import { actions as games } from '../../store/games/actions'
import styled from 'styled-components';

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

  componentDidMount () {
    this.props.onSelectNews('Top sales')
  }

  componentDidUpdate(newProps) {
    const { game, history } = this.props
    if(get(game, 'loading') === false) {
       this.props.history.push(`game/${game.id}`)
    }
  }

  setActiveHandler = (str) => {
    this.setState({active: str})
    this.props.onSelectNews(str)
  }

  navigateHandler = (id) => {
    this.props.onSelectGame(id)
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
        ItemsList = DisplayList(News)
        break;
      case 'Analisis':
        ItemsList = DisplayList(Analisis)
        title= 'game analisis'
        color= 'blue'
        break;
      case 'Streams':
        ItemsList = DisplayList(Streams)
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
      <div>
        <Menu pills={this.pills} active={this.state.active} setActive={(str) => this.setActiveHandler(str)}/>
        <Flex>
          <ItemsList items={this.props.news} color={color} title={title}/>
        </Flex>
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    news: state.newsReducer.news,
    game: singleGame(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSelectNews: (str) => dispatch(news.getNews(str)),
    onSelectGame: (id) => dispatch(games.getSingleGame(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavigationMenu))
