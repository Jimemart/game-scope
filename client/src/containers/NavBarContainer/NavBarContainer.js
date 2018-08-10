import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { NavBar } from '../../components'
import * as users from '../../store/user/actions'
import { getUser } from '../../store/user/selectors'

class NavBarContainer extends Component {

  state = {
    toHome: false
  }

  componentDidMount () {
    this.props.onFetchUser(1)
  }

  onSearch (e) {
    e.stopPropagation()
    this.props.history.push('search')
  }

  render () {
    return (<NavBar
        navigate={() => this.props.history.push('/')}
        user={this.props.user}
        search={(e) => this.onSearch(e)}/>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (NavBarContainer))
