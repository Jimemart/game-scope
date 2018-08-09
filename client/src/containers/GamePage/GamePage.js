import React, { Component } from 'react';
import { Game } from '../../components'
import { isEqual } from 'lodash'
import { connect } from 'react-redux'
import { singleGame, getArrayFormated } from '../../store/games/selectors'
import { getRelevantNews } from '../../store/news/selectors'
import { RingLoader } from 'react-spinners';
import { actions as games } from '../../store/games/actions'
import { actions as news } from '../../store/news/actions'

export class GamePageContainer extends Component {
  componentDidMount () {
    const { game, match, onLoadRelevant } = this.props
    let id = match.params.id
    if (!game) {
      this.props.onSelectGame(id)
    }
  }

  componentDidUpdate(newProps) {
    if(this.props.game.loading) return
    if(isEqual(this.props.game, newProps.game)) return
    this.props.onLoadRelevant(this.props.match.params.id)
  }

  render() {
    const { game } = this.props
    if (game) {
      return (
        <Game {...this.props} />
      )
    } else {
      return (
        <RingLoader
          color={'#123abc'}
          loading={true}
        />
      )
    }

  }
}

const mapStateToProps = state => ({
  game: singleGame(state),
  file: getArrayFormated(state),
  relevant: getRelevantNews(state)
})

const mapDispatchToProps = dispatch => {
  return {
    onSelectGame: (id) => dispatch(games.getSingleGame(id)),
    onLoadRelevant: (gameId) => dispatch(news.getRelevantInit(gameId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePageContainer)
