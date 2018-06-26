import React from 'react';
import { map } from 'lodash'

const DisplayList = InternalCmp => props => {
  return (
    map(props.items, (elem, index) => {
      return <InternalCmp item={elem} key={index} {...props}/>
    })

  )
}

export default DisplayList
