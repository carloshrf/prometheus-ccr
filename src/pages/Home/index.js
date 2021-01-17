import React from 'react';

import TopBar from '../../components/TopBar';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import logoImg from '../../assets/images/logo-ccr.png';

import { Container, BelieveSection, PartnerCompaniesSection } from './styles';

const Home = () => {

  document.title="Home";

  return (
    <Container>
      <TopBar />
      <Banner />
      <BelieveSection>
        <h1>O que acreditamos</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie felis pulvinar erat molestie, a interdum ex gravida. Vestibulum ultrices vitae est quis hendrerit. Sed ultrices non nibh eget ultricies. Curabitur est mauris, hendrerit sit amet ante quis, pharetra imperdiet neque. Sed commodo lorem vitae sapien eleifend condimentum. Quisque vehicula cursus efficitur. Nullam at augue a lectus euismod tempus non sit amet urna. Nam facilisis diam quis arcu ultrices, ac pellentesque justo efficitur. Vivamus cursus sagittis congue. 
          <br /> <br />
          Fusce quam ipsum, mattis ac rutrum eget, rhoncus a nunc. Cras ut quam quam. Sed congue, augue pretium volutpat sodales, eros erat maximus lectus, non malesuada nunc nisi ac metus. Suspendisse ligula nisi, blandit non eros eu, cursus euismod nulla. Fusce fermentum sodales elit, ornare tempus enim porta sed. Fusce tristique nisi non neque eleifend, sed vestibulum risus bibendum. In nec mattis odio
        </p>
      </BelieveSection>
      <PartnerCompaniesSection>
        <h1>Empresas Parceiras</h1>
        <div>
          <img src={logoImg} alt="ccr logo" />
          <img src={logoImg} alt="ccr logo" />
          <img src={logoImg} alt="ccr logo" />
          <img src={logoImg} alt="ccr logo" />
        </div>
      </PartnerCompaniesSection>
      <Footer />
    </Container>
  )
}

export default Home;