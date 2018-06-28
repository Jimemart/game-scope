import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'


class GameNavigator extends Component {

  onClick = () => {
    const { history, id, location } = this.props
    history.push(`../game/${id}`)
  }

  render () {
    return (
      <div onClick={this.onClick}>
        {this.props.children}
      </div>
    )

  }

}

export default withRouter(GameNavigator)
