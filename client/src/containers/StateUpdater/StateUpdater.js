import { Component } from 'react'

class StateUpdater extends Component {
  state = {
    active: this.props.initialState
  }

  componentDidMount() {
    this.props.onMount(this.props.initialState)
  }

  updateState = newValue => {
    this.setState({active: newValue})
    this.props.onUpdate(newValue)
  }

  render () {
    return this.props.children(this.state.active, this.updateState)
  }
}

StateUpdater.defaultProps = {
  onMount: () => {}
}

export default StateUpdater
