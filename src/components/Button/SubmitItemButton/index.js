import React from 'react';

import { Button } from './styles';

const SubmitItemButton = ({ label, buttonImage }) => {

  return (
    <Button><span>{label}</span>{buttonImage && (<img src={buttonImage} alt="logo"/>)}</Button>
  );
}

export default SubmitItemButton;