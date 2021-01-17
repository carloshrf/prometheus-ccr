import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const ProfileArea = styled.section`
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
  background-color: #e5e5e5;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 80px;
    height: 80px;
  }
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

export const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 40px 0;
`;
export const SectionTitle = styled.h1`
  text-transform: uppercase;
  padding: 40px;
  font-weight: 600;
  font-size: 24px;
  display: inline-block;

  img {
    width: 20px;
    height: 20px;
    align-items: baseline;
  }
`;

export const CardWrapper = styled.div`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex-direction: column;
  justify-content: flex-end;
  width: 390px;
  height: 410px;
  background-color: black;
  background-image: url("https://images.unsplash.com/photo-1610484649336-cc65485e7003?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80");
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 35px;
  transition: opacity .3s;
  
  &:hover,
  &:focus {
    opacity: .8;

    p {
      visibility: visible;
      display: block;
    }
  }
`;

export const CardContainer = styled.h1`
  width: 100%;
`;

export const CardTitle = styled.h1`
  padding: 10px 0;
  font-size: 26px;
`;

export const CardContent = styled.p`
  visibility: hidden;
  display: none;
  font-size: 20px;
  font-weight: 400;
`;

export const CardWrapperJob = styled.div`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex-direction: column;
  justify-content: center;
  width: 390px;
  height: 303px;
  background: linear-gradient(180deg, #E9C5FF 0%, rgba(255, 255, 255, 0) 100%), #F9F9F9;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  position: relative;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 35px;
  transition: opacity .3s;
  
  &:hover,
  &:focus {
    opacity: .8;
  }
`;

export const CardJobContainer = styled.h1`
  width: 100%;
`;

export const CardJobTitle = styled.h1`
  padding: 10px 0;
  font-size: 26px;
  color: #000;
`;

export const CardJobContent = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: #000;
`;

export const CardJobButton = styled.button`
  font-family: Poppins;
  font-weight: 600;
  color: #ffffff;
  background-color: #454150;
  border-radius: 50px;
  border: none;
  height: 50px;
  width: 200px;
  margin-top: 20px;
  cursor: pointer;
`;