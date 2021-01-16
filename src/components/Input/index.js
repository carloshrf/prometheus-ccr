import React from 'react';

import { InputItem } from './styles';

const Input = ({ width, gridArea, placeholder, type = "text" }) => {

  return (
    <InputItem type={type} placeholder={placeholder} width={width} gridArea={gridArea} />
  );
}

export default Input;