import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Menu } from '../../components'
import * as actions from '../../store/news/actions'

class NavigationMenu extends Component {
  pills = ['Top sales', 'News', 'Reviews', 'Streams', 'Guides']
  state = {
    active: 'Top sales'
  }

  setActiveHandler = (str) => {
    this.setState({active: str})
    this.props.onSelectNews(str)
  }

  render () {
    return (
      <Menu pills={this.pills} active={this.state.active} setActive={(str) => this.setActiveHandler(str)}/>
    )
  }
}

const mapStateToProps = state => {
  return {
    news: state.newsReducer.current
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSelectNews: (str) => dispatch(actions.getNews(str))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationMenu)
