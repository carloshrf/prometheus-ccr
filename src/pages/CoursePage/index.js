import React from 'react';

import Banner from '../../components/Banner';
import Reputation from '../../components/Reputation';
import BannerButton from '../../components/Button/BannerButton';
import Button from '../../components/Button';
import TopBar from '../../components/TopBar';

import bookMark from '../../assets/images/bookmark.png';
import mappinImg from '../../assets/images/map-pin.png';
import certifiedImg from '../../assets/images/certified.png';
import graphImg from '../../assets/images/graph.png';
import backImg from '../../assets/images/back.png';
import { useHistory } from 'react-router-dom';

import { Container, Content, ButtonContainer, Description, DescriptionMain, DescriptionReputation, DescriptionInformations, DescriptionHowToSubscribe, BackButtonContainer } from './styles';

const CoursePage = () => {
  const history = useHistory();

  function handleNavigation(e) {
    e.preventDefault();

    history.push('/usuario');
  }

  document.title="Curso";

  return (
    <Container>
      <TopBar />
      <Banner />

      <Content>
        <ButtonContainer>
          <BannerButton text="QUERO AVALIAR!" />
          <BannerButton text="ADICIONAR À SUA LISTA!" buttonImage={bookMark} />
        </ButtonContainer>

        <Description>
          <DescriptionMain>
            <h1>CURSO DE MÚSICA:</h1>

            <ul>
              <li><span>Aulas:</span> presenciais</li>
              <li><span>Duração:</span> aproximadamente 1 semestre</li>
              <li><span>Local:</span> Rua São Leopoldo, 56 - Vila Aurora, Ribeirão Pires - SP</li>
            </ul>
          </DescriptionMain>

          <DescriptionHowToSubscribe>
            <h1>Nome da instituição: SEJEL</h1>
            <h1>Como me inscrever?</h1>
            <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;A inscrição deve ser feita  conforme o edital, se apresentando no local informado entre os dias 13 e 14 de março de 2020. São disponibilizadas 30 vagas que seram preenchidas de acordo com ordem de chegada. </p>
          </DescriptionHowToSubscribe>

          <DescriptionReputation>
            <h1>AVALIAÇÃO ATUAL:</h1>
            <Reputation courseRate={3} />

            <h1>QUEM AVALIA?</h1>
            <p>Os cursos são avaliados por ex-alunos da instituição, que querem compartilhar sua experiência</p>
            <p>ler avaliações</p>
          </DescriptionReputation>

          <DescriptionInformations>
            <div><div><img src={certifiedImg} alt="certificado"/></div><p>Possui certificado</p></div>
            <div><div><img src={graphImg} alt="grafico"/></div><p>Não requer experiência ou pré-requisitos</p></div>
            <div><div><img src={mappinImg} alt="pin"/></div><p>Fica a aproximadamente à 5km de você</p></div>
          </DescriptionInformations>
        </Description>

        <BackButtonContainer>
          <Button image={backImg} onClick={handleNavigation}>VOLTAR A PÁGINA DO USUÁRIO</Button>
        </BackButtonContainer>
        
      </Content>

    </Container>
  );
}

export default CoursePage;