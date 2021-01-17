import React from 'react';

import { InputItem } from './styles';

const Input = ({ width, gridArea, placeholder, type = "text", id, value, name, checked, onChange}) => {

  return (
    <InputItem 
      id={id}
      name={name}
      value={value}
      type={type} 
      placeholder={placeholder} 
      width={width} 
      gridArea={gridArea} 
      checked={checked}
      onChange={onChange}
    />
  );
}

export default Input;