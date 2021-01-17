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
} from "./styles";

import profileIcon from "../../assets/icons/person-circle.svg";
import fireIcon from "../../assets/icons/fire.svg";
import bookmarkIcon from "../../assets/icons/bookmark.svg";
import pencilIcon from "../../assets/icons/pencil.svg";

import { Link, useHistory } from 'react-router-dom';
import { SliderItem } from "../../components/Carousel/styles";

const User = () => {
  const history = useHistory();

  function handleNavigate(e) {
    e.preventDefault();
    
    history.push('/vagas');
  }

  document.title="Perfil";

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
        <ProfileEdit>
          <img src={pencilIcon} alt="Ícone de Editar Perfil" />&nbsp; Editar Perfil
        </ProfileEdit>
      </ProfileArea>

      <ContentSection>
        <SectionTitle>Cursos baseados nos seus interesses: </SectionTitle>
        <Carousel>
          <SliderItem>
            <CardWrapper>
              <CardContainer>
                <Link to="/curso">
                  <CardTitle>Hello World</CardTitle>
                  <CardContent>
                    - à 5km de você
                    <br />
                    - perto do ponto de ônibus
                    <br />- aulas presenciais
                  </CardContent>
                </Link>
              </CardContainer>
            </CardWrapper>
          </SliderItem>
          <SliderItem>
            <CardWrapper>
              <CardContainer>
                <Link to="/curso">
                  <CardTitle>Hello World</CardTitle>
                  <CardContent>
                    - à 5km de você
                    <br />
                    - perto do ponto de ônibus
                    <br />- aulas presenciais
                  </CardContent>
                </Link>
              </CardContainer>
            </CardWrapper>
          </SliderItem>
          <SliderItem>
            <CardWrapper>
              <CardContainer>
                <Link to="/curso">
                  <CardTitle>Hello World</CardTitle>
                  <CardContent>
                    - à 5km de você
                    <br />
                    - perto do ponto de ônibus
                    <br />- aulas presenciais
                  </CardContent>
                </Link>
              </CardContainer>
            </CardWrapper>
          </SliderItem>
          <SliderItem>
            <CardWrapper>
              <CardContainer>
                <Link to="/curso">
                  <CardTitle>Hello World</CardTitle>
                  <CardContent>
                    - à 5km de você
                    <br />
                    - perto do ponto de ônibus
                    <br />- aulas presenciais
                  </CardContent>
                </Link>
              </CardContainer>
            </CardWrapper>
          </SliderItem>
          <SliderItem>
            <CardWrapper>
              <CardContainer>
                <Link to="/curso">
                  <CardTitle>Hello World</CardTitle>
                  <CardContent>
                    - à 5km de você
                    <br />
                    - perto do ponto de ônibus
                    <br />- aulas presenciais
                  </CardContent>
                </Link>
              </CardContainer>
            </CardWrapper>
          </SliderItem>
        </Carousel>
      </ContentSection>

      <ContentSection>
        <SectionTitle>
          <img src={bookmarkIcon} alt="Ícone de Cursos Salvos" /> Cursos que
          você salvou:{" "}
        </SectionTitle>
        <Carousel>
          <SliderItem>
            <CardWrapper>
              <CardContainer>
                <Link to="/curso">
                  <CardTitle>Hello World</CardTitle>
                  <CardContent>
                    - à 5km de você
                    <br />
                    - perto do ponto de ônibus
                    <br />- aulas presenciais
                  </CardContent>
                </Link>
              </CardContainer>
            </CardWrapper>
          </SliderItem>
          <SliderItem>
            <CardWrapper>
              <CardContainer>
                <Link to="/curso">
                  <CardTitle>Hello World</CardTitle>
                  <CardContent>
                    - à 5km de você
                    <br />
                    - perto do ponto de ônibus
                    <br />- aulas presenciais
                  </CardContent>
                </Link>
              </CardContainer>
            </CardWrapper>
          </SliderItem>
          <SliderItem>
            <CardWrapper>
              <CardContainer>
                <Link to="/curso">
                  <CardTitle>Hello World</CardTitle>
                  <CardContent>
                    - à 5km de você
                    <br />
                    - perto do ponto de ônibus
                    <br />- aulas presenciais
                  </CardContent>
                </Link>
              </CardContainer>
            </CardWrapper>
          </SliderItem>
          <SliderItem>
            <CardWrapper>
              <CardContainer>
                <Link to="/curso">
                  <CardTitle>Hello World</CardTitle>
                  <CardContent>
                    - à 5km de você
                    <br />
                    - perto do ponto de ônibus
                    <br />- aulas presenciais
                  </CardContent>
                </Link>
              </CardContainer>
            </CardWrapper>
          </SliderItem>
          <SliderItem>
            <CardWrapper>
              <CardContainer>
                <Link to="/curso">
                  <CardTitle>Hello World</CardTitle>
                  <CardContent>
                    - à 5km de você
                    <br />
                    - perto do ponto de ônibus
                    <br />- aulas presenciais
                  </CardContent>
                </Link>
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
                <Link to="/parceiro">
                  <CardJobTitle>Hello World</CardJobTitle>
                  <CardJobContent>
                    Empresa: Itaú
                    <br />
                    Principais requisitos
                  </CardJobContent>
                </Link>
                <CardJobButton onClick={handleNavigate}>Saiba Mais</CardJobButton>
              </CardJobContainer>
            </CardWrapperJob>
          </SliderItem>
          <SliderItem>
            <CardWrapperJob>
              <CardJobContainer>
                <Link to="/parceiro">
                  <CardJobTitle>Hello World</CardJobTitle>
                  <CardJobContent>
                    Empresa: Itaú
                    <br />
                    Principais requisitos
                  </CardJobContent>
                </Link>
                <CardJobButton onClick={handleNavigate}>Saiba Mais</CardJobButton>
              </CardJobContainer>
            </CardWrapperJob>
          </SliderItem>
          <SliderItem>
            <CardWrapperJob>
              <CardJobContainer>
                <Link to="/parceiro">
                  <CardJobTitle>Hello World</CardJobTitle>
                  <CardJobContent>
                    Empresa: Itaú
                    <br />
                    Principais requisitos
                  </CardJobContent>
                </Link>
                <CardJobButton onClick={handleNavigate}>Saiba Mais</CardJobButton>
              </CardJobContainer>
            </CardWrapperJob>
          </SliderItem>
          <SliderItem>
            <CardWrapperJob>
              <CardJobContainer>
                <Link to="/parceiro">
                  <CardJobTitle>Hello World</CardJobTitle>
                  <CardJobContent>
                    Empresa: Itaú
                    <br />
                    Principais requisitos
                  </CardJobContent>
                </Link>
                <CardJobButton onClick={handleNavigate}>Saiba Mais</CardJobButton>
              </CardJobContainer>
            </CardWrapperJob>
          </SliderItem>
        </Carousel>
      </ContentSection>
      <Footer />
    </Container>
  );
};

export default User;
