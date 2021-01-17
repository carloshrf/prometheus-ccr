import React from 'react';

import courseImg from '../../assets/images/sample.png';

import { Container, Details } from './styles';

const Course = ({ name, platform, url }) => {

  return (
    <Container>
      <img src={courseImg} alt={name}/>
      <Details>
        <span>{name}</span>
        <p>{platform}</p>
      </Details>
    </Container>
  );
}

export default Course;