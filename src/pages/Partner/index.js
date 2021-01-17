import React from "react";

import TopBar from "../../components/TopBar";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";

import {
  Container,
  ProfileArea,
  ProfilePicture,
  ProfileContainer,
  ProfileText,
  ProfileTitle,
  ProfilePoints,
  ProfileDescription,
  ProfileEdit,
  ContentSection,
  SectionTitle,
  CardWrapper,
  CardContainer,
  CardTitle,
  CardContent,
  CardWrapperJob,
  CardJobContainer,
  CardJobTitle,
  CardJobContent,
  CardJobButton,
  DuoSection,
  CardNumbers,
  CardSubtitle,
  CardNumbersContent,
  SectionImages,
} from "./styles";

import exampleIcon from "../../assets/icons/example.svg";
import pencilIcon from "../../assets/icons/pencil.svg";
import plusIcon from "../../assets/icons/plus.svg";
import mostAccessedsImg from "../../assets/images/mostaccesseds.svg";
import accessesImg from "../../assets/images/accesses.svg";
import accessesTwoImg from "../../assets/images/accessestwo.svg";

import { SliderItem } from "../../components/Carousel/styles";

const Partner = () => {

  document.title="Usuário";

  return (
    <Container>
      <TopBar />

      <ProfileArea>
        <ProfileContainer>
          <ProfilePicture>
            <img src={exampleIcon} alt="Foto do Perfil" />
          </ProfilePicture>
          <ProfileText>
            <ProfileTitle>Anhambi Morumbi </ProfileTitle>
            <ProfileDescription>16 cursos na plataforma</ProfileDescription>
          </ProfileText>
        </ProfileContainer>
        <ProfileEdit>
          <img src={plusIcon} alt="Ícone de Criar Curso" />
          &nbsp; Criar Curso
        </ProfileEdit>
        <ProfileEdit>
          <img src={pencilIcon} alt="Ícone de Editar Perfil" />
          &nbsp; Editar Perfil
        </ProfileEdit>
      </ProfileArea>

      <ContentSection>
        <SectionTitle>Seus cursos na plataforma:</SectionTitle>
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

      <DuoSection>
        <ContentSection>
          <SectionTitle>Seus cursos mais acessados:</SectionTitle>
          <img src={mostAccessedsImg} alt="Diagrama de cursos mais acessados" />
        </ContentSection>

        <ContentSection>
          <SectionTitle>Números totais:</SectionTitle>
          <CardNumbers>
            <CardSubtitle>Alunos Inscritos</CardSubtitle>
            <CardNumbersContent>1000</CardNumbersContent>
            <CardSubtitle>Visualizações Totais</CardSubtitle>
            <CardNumbersContent>1800</CardNumbersContent>
          </CardNumbers>
        </ContentSection>
      </DuoSection>

      <DuoSection>
        <ContentSection>
          <SectionTitle>Quem mais acessa seus cursos:</SectionTitle>
          <SectionImages>
            <img src={accessesImg} alt="" />
            <img src={accessesTwoImg} alt="" />
          </SectionImages>
        </ContentSection>
      </DuoSection>

      <ContentSection>
        <SectionTitle>Vagas em empresas parceiras:</SectionTitle>
        <Carousel>
          <SliderItem>
            <CardWrapperJob>
              <CardJobContainer>
                <CardJobTitle>Hello World</CardJobTitle>
                <CardJobContent>
                  Empresa: Itaú
                  <br />
                  Principais requisitos
                </CardJobContent>
                <CardJobButton>Saiba Mais</CardJobButton>
              </CardJobContainer>
            </CardWrapperJob>
          </SliderItem>
        </Carousel>
      </ContentSection>
    </Container>
  );
};

export default Partner;
