import React from 'react';
import { map } from 'lodash'

const DisplayList = InternalCmp => props => {
  return (
    map(props.items, (elem, index) => {
      const {id} = elem
      return <InternalCmp item={elem} key={index} {...props}/>
    })

  )
}

export default DisplayList
