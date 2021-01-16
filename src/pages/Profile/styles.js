import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
`;

export const ProfileArea = styled.div`
  background-color: #454150;
  height: 350px;
  display: flex;
  padding: 100px;
`;

export const ProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  padding: 30px 0;
`;

export const ProfilePicture = styled.div`
  width: 150px;
  height: 150px;
  justify-content: flex-end;
`;

export const ProfileText = styled.div`
  padding: 50px;
  color: #e5e5e5;
  align-items: center;
`;

export const ProfileTitle = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const ProfilePoints = styled.div`
  margin-left: 220px;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const ProfileDescription = styled.p`
  margin-top: 10px;
`;

export const ProfileEdit = styled.p`
  height: 60px;
  width: 200px;
  display: flex;
  align-items: center;
  margin-top: 200px;
  cursor: pointer;
  font-size: 16px;
  color: #E5E5E5;
  transition: color 0.2s;

  &:hover {
    color: #000;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
`;
