import React from 'react' ;

import { ButtonContainer } from './styles';

const Button = ({ children }) => {

  return (
    <ButtonContainer><span>{children}</span></ButtonContainer>
  );
}

export default Button;