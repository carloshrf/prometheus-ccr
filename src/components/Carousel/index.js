import React from 'react';
import SlickSlider from 'react-slick';

import { Container } from './styles';

const Carousel = ({ children }) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      variableWidth: true,
      adaptiveHeight: true,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Carousel;