import React from 'react';
import { Container } from './styles';

import CourseItem from '../../components/CourseItem';

const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
      <CourseItem 
        name="Cursos de javascript"
        platform="Rocketseat"
      />
      <CourseItem 
        name="Banco de dados "
        platform="Rocketseat"
      />
    </Container>
  )
}

export default Home;