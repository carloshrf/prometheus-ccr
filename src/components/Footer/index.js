import React from 'react';

import fbImg from '../../assets/images/fb.png';
import twtImg from '../../assets/images/twt.png';
import instImg from '../../assets/images/inst.png';

import { Container, Contacts, SocialMedias } from './styles';

const Footer = () => {

  return (
    <Container>
      <Contacts>
        <h1>Contato:</h1>
        <div>
          <a href="/">atendimento@prometheus.com.br</a>
          <p>telefone: 11 2325-2525</p>
          <p>Rua Marechal Deodoro, 335</p>
          <p>Santo André - SP</p>
        </div>
      </Contacts>
      <SocialMedias>
        <h1>Nos siga nas redes sociais!</h1>
        <a href="https://twitter.com"><img src={twtImg} alt="icone do twitter"/></a>
        <a href="https://www.facebook.com/"><img src={fbImg} alt="icone do facebook"/></a>
        <a href="https://www.instagram.com/"><img src={instImg} alt="icone do instagram"/></a>
      </SocialMedias>
    </Container>
  );
}

export default Footer;