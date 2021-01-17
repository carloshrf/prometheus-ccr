import React from 'react' ;

import { ButtonContainer } from './styles';

const Button = ({ children, image }) => {

  return (
    <ButtonContainer>{image && (<img src={image} alt="icone do botão"/>)}<span>{children}</span></ButtonContainer>
  );
}

export default Button;