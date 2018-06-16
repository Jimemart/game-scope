import React, { Component } from 'react';
import { Game } from '../../components'
import { connect } from 'react-redux'
import { singleGame } from '../../store/games/selectors'
import { RingLoader } from 'react-spinners';
import { actions as games } from '../../store/games/actions'

export class GamePageContainer extends Component {
  componentDidMount () {
    const { game, match } = this.props
    if (!game) {
      this.props.onSelectGame(match.params.id)
    }
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
  game: singleGame(state)
})

const mapDispatchToProps = dispatch => {
  return {
    onSelectGame: (id) => dispatch(games.getSingleGame(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePageContainer)
