import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Menu, TopSales, News, Analisis, Streams } from '../../components'
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

  setActiveHandler = (str) => {
    this.setState({active: str})
    this.props.onSelectNews(str)
  }

  navigateHandler = (id) => {
    this.props.history.push(`game/${id}`)
    this.props.onSelectGame(id)
  }

  render () {
    let body = ''
    switch(this.state.active) {
      case 'Top sales':
        body = (<TopSales news={this.props.news} click={(id) => this.navigateHandler(id)}/>)
        break;
      case 'News':
        body = (<News  news={this.props.news}/>)
        break;
      case 'Analisis':
        body = (<Analisis news={this.props.news} title={"game analisis"} color={"blue"}/>)
        break;
      case 'Streams':
        body = (<Streams news={this.props.news} title={"game stream"} color={"#6242f4"}/>)
        break;
      case 'Guides':
        body = (<div>Guides</div>)
        break;
      default:
        body = (<div>Top sales</div>)
    }
    return (
      <div>
        <Menu pills={this.pills} active={this.state.active} setActive={(str) => this.setActiveHandler(str)}/>
        <Flex>
          {body}
        </Flex>
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    news: state.newsReducer.news
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSelectNews: (str) => dispatch(news.getNews(str)),
    onSelectGame: (id) => dispatch(games.getSingleGame(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavigationMenu))
