import React from 'react'
import { Card } from '../'

const Streams = (props) => {
  const streamCards = props.news ? props.news.map((elem, i) => {
    return <Card reverse elem={elem} key={i} {...props}/>
  }) : null

  return (
    streamCards
  )
}

export default Streams
