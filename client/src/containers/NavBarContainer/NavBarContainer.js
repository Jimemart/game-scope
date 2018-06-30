import React, { Component } from 'react';
import { connect } from 'react-redux'

import { NavBar } from '../../components'
import * as users from '../../store/user/actions'
import { getUser } from '../../store/user/selectors'

class NavBarContainer extends Component {
  componentDidMount () {
    this.props.onFetchUser(1)
  }

  render () {
    return (
    <NavBar user={this.props.user}/>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: getUser(state)
  }
}

const mapDispatchToProps = dispatch => ({
  onFetchUser: (id) => dispatch(users.fetchUserInit(id))
})

export default connect(mapStateToProps, mapDispatchToProps) (NavBarContainer)
