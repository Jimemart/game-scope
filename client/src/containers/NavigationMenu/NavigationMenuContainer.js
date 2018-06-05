import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Menu, TopSales } from '../../components'
import * as actions from '../../store/news/actions'

class NavigationMenu extends Component {
  pills = ['Top sales', 'News', 'Reviews', 'Streams', 'Guides']
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

  render () {
    let body = ''
    switch(this.state.active) {
      case 'Top sales':
        body = (<TopSales news={this.props.news}/>)
        break;
      case 'News':
        body = (<div>News</div>)
        break;
      case 'Reviews':
        body = (<div>Reviews</div>)
        break;
      case 'Streams':
        body = (<div>Streams</div>)
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
        {body}
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
    onSelectNews: (str) => dispatch(actions.getNews(str))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationMenu)
