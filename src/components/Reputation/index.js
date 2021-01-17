import React from 'react';

import firedImg from '../../assets/images/fired.png';
import unfiredImg from '../../assets/images/unfired.png';

import { Container } from './styles';

const Reputation = ({ courseRate = 0 }) => {
  const rate = [1, 2, 3, 4, 5];

  return (
    <Container>{
      rate.map(value => (value <= courseRate) 
        ? (<img key={value} src={firedImg} alt="fireIcon"/>) 
        : (<img key={value} src={unfiredImg} alt="fireIcon"/>)
      ) 
    }</Container> 
  );
};

export default Reputation;