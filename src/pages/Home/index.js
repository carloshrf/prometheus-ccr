import React from 'react';
import { Container } from './styles';

import api from '../../services/api';
import TopBar from '../../components/TopBar';

const Home = () => {
  return (
    <Container>
      <TopBar />
    </Container>
  )
}

export default Home;