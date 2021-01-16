import React from 'react';

import { Button } from './styles';

const SubmitItemButton = ({ buttonImage }) => {

  return (
    <Button><span>Adicionar foto de perfil</span>{buttonImage && (<img src={buttonImage} alt="logo"/>)}</Button>
  );
}

export default SubmitItemButton;