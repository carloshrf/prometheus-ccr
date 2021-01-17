import styled from 'styled-components';

export const Container = styled.div`
`;

export const Advice = styled.div`
  width: 100%;
  background: linear-gradient(180deg, rgba(0,0,0,0.5634628851540616) 0%, rgba(255,255,255,1) 100%);
  
  p {
    padding: 60px 80px;
    font-size: 20px;
  }
`;

export const Content = styled.section`
  top: -10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p, h1, label, span {
    color: #FFF;
  }
`;

export const RegisterContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  background-color: #454150;
  border-radius: 30px;
  padding: 65px 75px;

  h1 {
    font-weight: 700;
    color: #FFF;
    padding-bottom: 50px;
  }
`;

export const RegisterContent = styled.form`
  width: 100%;
  display: flex;
`;

export const LeftSide = styled.div`
  width: 45%;
`;

export const RightSide = styled.div`
  width: 55%;
`;

export const PersonData = styled.div`
  p {
    margin-bottom: 10px;
  }

  & > input {
    margin: 0 20px 20px 0;
  }
`;

export const Localization = styled.div`
  p {
    margin-bottom: 10px;
  }

  div {
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: 155px 155px;
    grid-template-areas: 
      "street street"
      "neighborhood zipcode "
      "city state"
    ;
    grid-gap: 20px;

  }
  
`;

export const RadioSection = styled.div`
  p {
    margin-bottom: 10px;
  }

  label {
    display: flex;
    align-items: center;
    font-size: 14px;
    height: 30px;
  
    input {
      margin-right: 6px;
      width: 20px;
    }
  }
`;

export const AcademicTreining = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

  p {
    margin-bottom: 10px;
  }

  select {
    font-size: 16px;
    border-radius: 10px;
    padding: 5px;
  }

  & div + div {
    padding: 37px 0 0 10px;

    input {
      margin-bottom: 20px;
    }

  }

`;

export const TellAbout = styled.div`
  margin-top: 20px;

  p {
    margin-bottom: 10px;
  }

  textarea {
    width: 500px;
    height: 100px;
    resize: vertical;
    border-radius: 10px;
    padding: 5px 10px;
  }

`;

export const ButtonsContainer = styled.div`
  width: 100%;

  padding: 70px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  div {
    display: flex;
    justify-content: center;
    padding-bottom: 60px;

    button + button {
      margin-left: 20px;
    }   
  }
`;