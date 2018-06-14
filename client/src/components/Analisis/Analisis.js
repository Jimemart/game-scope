import React from 'react'
import { Card } from '../'

const Analisis = (props) => {
  const {news} = props
  const shapedAnalisis = news ? news.map((elem, i) => {
    return (
      <Card elem={elem} key={i} {...props}/>
    )
  }) : ''

  return (
    shapedAnalisis
  )
}

export default Analisis
