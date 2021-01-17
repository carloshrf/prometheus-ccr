import React from 'react';

import { Button } from './styles';

const BannerButton = ({ text, buttonImage }) => {

  return (
    <Button><span>{text}</span>{buttonImage && (<img src={buttonImage} alt="logo"/>)}</Button>
  );
}

export default BannerButton;