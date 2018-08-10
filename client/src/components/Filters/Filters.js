import React, { Component } from 'react'
import { FlexContainer, Pill } from '../'
import styled from 'styled-components';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const FilterTitle = styled.h5`
  color: white;
  font-weight: 600;
  font-size: 0.8em;
  text-transform: uppercase;
  margin-bottom: 7px;
`

const Parr = styled.p`
  color: grey;
  text-transform: uppercase;
  font-size: 0.7em;
  margin-right: 10px;
`

class Filters extends Component {
  state = {
    value: [0,200],
    min: 0,
    max: 100
  }

  onSliderChange = (value) => {
    this.setState({
      value,
      min: value[0],
      max: value[1]
    });
  }

  render () {
    const { value, min, max } = this.state
    return (
      <FlexContainer direction="column" background="black" width="20%" padding="10px 20px">
        <FilterTitle>Price Range</FilterTitle>
        <div>
        <Range step={1} defaultValue={[0, 200]} value={value} trackStyle={[{backgroundColor:"#2b9b41"}]} onChange={this.onSliderChange}/>
        <FlexContainer justify="space-between" marginTop="0">
          <FlexContainer direction="row" width="40%" justify="space-around">
            <Parr>FROM</Parr>
            <Pill text={min} width="50px" padding="10px 0"/>
          </FlexContainer>
          <FlexContainer direction="row" width="40%" justify="space-around">
            <Parr>TO</Parr>
            <Pill text={max} width="50px" padding="10px 0"/>
          </FlexContainer>
        </FlexContainer>
        </div>
      </FlexContainer>
    )
  }

}

export default Filters
