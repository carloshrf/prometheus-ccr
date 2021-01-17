import React from "react";
import {
  ApplyJobButton,
  ButtonContainer,
  Container,
  DuoSection,
  JobSection,
  JobTitle,
  JobContent,
  RequirementsSection,
  RequirementsTitle,
  PointsBar,
  RequirementsTitleContainer,
  RequirementsContent,
  BackToUser,
  ContentSection,
  SectionTitle,
  CardWrapper,
  CardTitle,
  CardContainer,
  CardContent,
} from "./styles";

import { SliderItem } from "../../components/Carousel/styles";

import TopBar from "../../components/TopBar";
import Carousel from "../../components/Carousel";
import Banner from "../../components/Banner";

import fireIcon from "../../assets/icons/fire.svg";
import backIcon from "../../assets/icons/back.svg";

const Jobs = () => {

  document.title="Vagas";

  return (
    <>
      <TopBar />
      <Banner />
      <ButtonContainer>
        <ApplyJobButton>Quero me candidatar</ApplyJobButton>
      </ButtonContainer>
      <Container>
        <DuoSection>
          <JobSection>
            <JobTitle>Auxiliar Administrativo</JobTitle>
            <JobContent>
              <strong>Responsabilidade:</strong> Auxiliar na rotina do
              departamento de expedição, organização e separação de documentos,
              montagem e identificação dos malotes e controles.
              <br />
              <strong>Salário:</strong> A combinar
              <br />
              <strong>Benefícios:</strong> Seguro Saúde, Assistência
              Odontológica, VT e VR.
              <br />
              <strong>Jornada:</strong> Segunda a sexta-feira, das 09:00 às
              18:00
              <br />
              <strong>Escolaridade:</strong> Ensino Médio Completo
            </JobContent>
          </JobSection>
          <RequirementsSection>
            <RequirementsTitleContainer>
              <RequirementsTitle>
                Ganhe pontos por se candidatar{" "}
              </RequirementsTitle>
              <PointsBar>
                <img src={fireIcon} alt="" /> <img src={fireIcon} alt="" />
                <img src={fireIcon} alt="" /> <img src={fireIcon} alt="" />
              </PointsBar>
            </RequirementsTitleContainer>
            <RequirementsContent>
              <h1>Pré-requisitos</h1>
              <p>- Possuir graduação completa</p>
              <p>- Pacote Office</p>
              <p>- Inglês e espanhol</p>
              <p>- Saber noções de administração e controle de estoque.</p>
            </RequirementsContent>
          </RequirementsSection>
        </DuoSection>
        <BackToUser>
          <img src={backIcon} alt="Ícone de Voltar" />
          &nbsp; Voltar a Página do Usuário
        </BackToUser>
      </Container>
      <ContentSection>
        <SectionTitle>CURSOS QUE PODEM TE AJUDAR A PREENCHER OS REQUISITOS:</SectionTitle>
        <Carousel>
          <SliderItem>
            <CardWrapper>
              <CardContainer>
                <CardTitle>Hello World</CardTitle>
                <CardContent>
                  - à 5km de você
                  <br />
                  - perto do ponto de ônibus
                  <br />- aulas presenciais
                </CardContent>
              </CardContainer>
            </CardWrapper>
          </SliderItem>
          <SliderItem>
            <CardWrapper>
              <CardContainer>
                <CardTitle>Hello World</CardTitle>
                <CardContent>
                  - à 5km de você
                  <br />
                  - perto do ponto de ônibus
                  <br />- aulas presenciais
                </CardContent>
              </CardContainer>
            </CardWrapper>
          </SliderItem>
          <SliderItem>
            <CardWrapper>
              <CardContainer>
                <CardTitle>Hello World</CardTitle>
                <CardContent>
                  - à 5km de você
                  <br />
                  - perto do ponto de ônibus
                  <br />- aulas presenciais
                </CardContent>
              </CardContainer>
            </CardWrapper>
          </SliderItem>
          <SliderItem>
            <CardWrapper>
              <CardContainer>
                <CardTitle>Hello World</CardTitle>
                <CardContent>
                  - à 5km de você
                  <br />
                  - perto do ponto de ônibus
                  <br />- aulas presenciais
                </CardContent>
              </CardContainer>
            </CardWrapper>
          </SliderItem>
          <SliderItem>
            <CardWrapper>
              <CardContainer>
                <CardTitle>Hello World</CardTitle>
                <CardContent>
                  - à 5km de você
                  <br />
                  - perto do ponto de ônibus
                  <br />- aulas presenciais
                </CardContent>
              </CardContainer>
            </CardWrapper>
          </SliderItem>
        </Carousel>
      </ContentSection>
    </>
  );
};

export default Jobs;
