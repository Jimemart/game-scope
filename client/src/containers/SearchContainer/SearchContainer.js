import React, { Component } from 'react'
import { FlexContainer, Filters } from '../../components'

export class SearchContainer extends Component {
  render () {
    return (
      <FlexContainer direction="row" justify="center">
        <FlexContainer direction="row" justify="space-between" width="87%">
          <Filters />
        </FlexContainer>
      </FlexContainer>
    )
  }
}

export default SearchContainer
