import React, { Component } from 'react';
import { SliderCmp, Relevant } from '../../components'
import { connect } from 'react-redux'
import * as actions from '../../store/games/actions'

export class HomeContainer extends Component {

  componentDidMount () {
    this.props.onGetLatest()
    this.props.onGetRelevant()
  }

  render () {
    return (
      <div>
        <SliderCmp slides={this.props.latest}/>
        <Relevant relevant={this.props.relevant}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    latest: state.latest,
    relevant: state.relevant
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetLatest: () => dispatch(actions.getLatest()),
    onGetRelevant: () => dispatch(actions.getRelevant())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer)
