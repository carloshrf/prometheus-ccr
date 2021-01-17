import React from "react";

import TopBar from "../../components/TopBar";
import Carousel from "../../components/Carousel";

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
} from "./styles";

import profileIcon from "../../assets/icons/person-circle.svg";
import fireIcon from "../../assets/icons/fire.svg";
import bookmarkIcon from "../../assets/icons/bookmark.svg";

import { SliderItem } from "../../components/Carousel/styles";

const Profile = () => {
  return (
    <Container>
      <TopBar />

      <ProfileArea>
        <ProfileContainer>
          <ProfilePicture>
            <img src={profileIcon} alt="Foto do Perfil" />
          </ProfilePicture>
          <ProfileText>
            <ProfileTitle>
              Luana Silva{" "}
              <ProfilePoints>
                15 <img src={fireIcon} alt="Pontos" />
              </ProfilePoints>
            </ProfileTitle>
            <ProfileDescription>
              23 anos - Formada em Secretáriado
            </ProfileDescription>
          </ProfileText>
        </ProfileContainer>
        <ProfileEdit>Editar Perfil</ProfileEdit>
      </ProfileArea>

      <ContentSection>
        <SectionTitle>Cursos baseados nos seus interesses: </SectionTitle>
        <Carousel>
          <SliderItem>
            <CardWrapper>
              <CardContainer>
                <CardTitle>Hello World</CardTitle>
                <CardContent>
                  - à 5km de você
                  <br />
                  - perto do ponto de ônibus
                  <br />
                  - aulas presenciais
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
                  <br />
                  - aulas presenciais
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
                  <br />
                  - aulas presenciais
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
                  <br />
                  - aulas presenciais
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
                  <br />
                  - aulas presenciais
                </CardContent>
              </CardContainer>
            </CardWrapper>
          </SliderItem>
        </Carousel>
      </ContentSection>

      <ContentSection>
        <SectionTitle><img src={bookmarkIcon} alt="Ícone de Cursos Salvos"/> Cursos que você salvou: </SectionTitle>
        <Carousel>
          <SliderItem>
            <CardWrapper>
              <CardContainer>
                <CardTitle>Hello World</CardTitle>
                <CardContent>
                  - à 5km de você
                  <br />
                  - perto do ponto de ônibus
                  <br />
                  - aulas presenciais
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
                  <br />
                  - aulas presenciais
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
                  <br />
                  - aulas presenciais
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
                  <br />
                  - aulas presenciais
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
                  <br />
                  - aulas presenciais
                </CardContent>
              </CardContainer>
            </CardWrapper>
          </SliderItem>
        </Carousel>
      </ContentSection>

      <ContentSection>
        <SectionTitle>Vagas em empresas parceiras:</SectionTitle>
        <Carousel>
          <SliderItem>
            <CardWrapperJob>
              <CardJobContainer>
                <CardJobTitle>Hello World</CardJobTitle>
                <CardJobContent>
                  Empresa: Itaú<br />
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

export default Profile;
