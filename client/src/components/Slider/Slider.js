import React from 'react'
import Slider from "react-slick"
import { Slide } from '../'
import styled from 'styled-components';
import './Slider.css'

const StyledSlider = styled(Slider)`
  height: 88vh;
  margin:0px;
`
const SliderCmp = (props) => {
  var settings = {
     dots: true,
     arrows: false,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1
}
let slides = ''
if(props.slides) {
  slides = props.slides.map((elem, i) => <Slide game={elem} key={i}/>)
}

  return (
    <StyledSlider {...settings}>
      {slides}
    </StyledSlider>
  )
}

export default SliderCmp
