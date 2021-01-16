import React from "react";
import Slider from "react-slick";

import TopBar from "../../components/TopBar";

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
  ContentContainer,
} from "./styles";

import profileIcon from "../../assets/icons/person-circle.svg";
import fireIcon from "../../assets/icons/fire.svg";

const Profile = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };

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

      <ContentContainer>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </ContentContainer>
    </Container>
  );
};

export default Profile;
