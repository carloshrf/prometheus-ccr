import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 100px 0 50px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  position: absolute;
  top: 460px;
`;

export const ApplyJobButton = styled.button`
  width: 350px;
  height: 92px;
  background: #dea8ff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  border: none;
  cursor: pointer;
  font-family: Poppins;
  font-size: 22px;
  color: #454150;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  transition: background-color 0.4s;

  &:hover {
    background-color: #454150;
    color: #e5e5e5;
  }
`;

export const DuoSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px 0;
`;

export const JobSection = styled.section`
  width: 100%;
  font-family: Poppins;
`;

export const JobTitle = styled.h1`
  font-size: 24px;
  text-transform: uppercase;
  padding-bottom: 50px;
  font-weight: 700;
`;

export const JobContent = styled.p`
  font-size: 20px;
  font-weight: 500;

  strong {
    font-weight: 700;
  }
`;

export const RequirementsSection = styled.section`
  width: 670px;
  font-family: Poppins;
`;

export const RequirementsTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const RequirementsTitle = styled.h1`
  font-size: 20px;
  text-transform: uppercase;
  padding-bottom: 50px;
  font-weight: 700;
  width: 400px;
`;

export const PointsBar = styled.div`
  background-color: #454150;
  display: flex;
  height: 60px;
  width: 100%;
  padding: 5px 20px;
  align-items: center;
  margin-left: 20px;

  img {
    width: 40px;
    height: 40px;
    padding: 5px;
  }
`;

export const RequirementsContent = styled.div`
  background: rgba(222, 168, 255, 0.38);
  border-radius: 40px 0 0 40px;
  padding: 20px 50px;
  width: 100%;

  h1 {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 600;
    padding: 10px 0;
  }

  p {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const BackToUser = styled.button`
  width: 433px;
  height: 66px;

  background-color: #454150;
  border-radius: 20px;
  border: none;
  cursor: pointer;

  font-family: Poppins;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;

  &:hover {
    background-color: #f2deff;
    color: #000;
  }

  img {
    width: 20px;
    height: 20px;
    justify-content: baseline;
  }
`;

export const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
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