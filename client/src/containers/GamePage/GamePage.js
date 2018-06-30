import React, { Component } from 'react';
import { get } from 'lodash'
import { Game } from '../../components'
import { connect } from 'react-redux'
import { singleGame, getArrayFormated } from '../../store/games/selectors'
import { RingLoader } from 'react-spinners';
import { actions as games } from '../../store/games/actions'
import { actions as news } from '../../store/news/actions'

export class GamePageContainer extends Component {
  componentDidMount () {
    const { game, match, onLoadRelevant } = this.props
    let id = get(game, 'id')
    if (!game) {
      this.props.onSelectGame(match.params.id)
      id = match.params.id
    }
    onLoadRelevant(id)
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
  file: getArrayFormated(state)
})

const mapDispatchToProps = dispatch => {
  return {
    onSelectGame: (id) => dispatch(games.getSingleGame(id)),
    onLoadRelevant: (gameId) => dispatch(news.getRelevantInit(gameId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePageContainer)
