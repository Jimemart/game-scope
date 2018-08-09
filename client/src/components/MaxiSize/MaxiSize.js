import React, { Component } from 'react'
import { StateUpdater } from '../../containers'
import { FlexContainer, Icon } from '../'
import styled from 'styled-components';

const Fixed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index:1;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);
`

export class MaxiSize extends Component {

  state = {
    list : this.props.list,
    selected : ''
  }

  componentDidMount () {
    this.setState({selected: this.props.img})
  }

  onNext = (e) => {
    this.stopPropagation(e)
    const index = this.state.list.indexOf(this.state.selected)
    const newIndex = index === this.state.list.length - 1 ? 0 : index + 1
    this.setState({ selected : this.state.list[newIndex] })
  }

  onPrev = (e) => {
    this.stopPropagation(e)
    const index = this.state.list.indexOf(this.state.selected)
    const newIndex = index === 0 ? this.state.list.length - 1 : index - 1
    this.setState({ selected : this.state.list[newIndex] })
  }

  stopPropagation = (e) => {
    e.stopPropagation()
  }

  modal = (fn, img) => (
    <Fixed>
      <FlexContainer direction="column" height="100%" justify="center" align="center" onClick={() => fn(false)}>
        <img src={img} alt="modal-screenshot" height="80%" onClick={(e) => this.stopPropagation(e)}/>
        <FlexContainer direction="row" justify="space-between" width="80%" position="absolute">
          <div onClick={(e) => this.onPrev(e)}>
            <Icon color="white" name="angle-left" fontSize="80px" cursor="pointer" ></Icon>
          </div>
          <div onClick={(e) => this.onNext(e)}>
            <Icon color="white" name="angle-right" fontSize="80px" cursor="pointer" ></Icon>
          </div>
        </FlexContainer>
      </FlexContainer>
    </Fixed>

  )

  render () {
    const { img } = this.props
    return (
      <StateUpdater
        initialState={false}
        onUpdate={() => {}}
        onMount={() => {}}>
      {(active, onUpdate) => (
        <div style={{width:"44%", height: '45%'}}>
          <img
            src={img}
            alt="screenshot"
            height="80%"
            onClick={() => onUpdate(true)}
            style={{cursor: 'pointer'}}
            />

          {active ? this.modal(onUpdate, this.state.selected) : null}
        </div>

      )}
      </StateUpdater>
    )
  }
}


export default MaxiSize
