import styled from 'styled-components';

export const Container = styled.div`
`;

export const Content = styled.div`
  position: relative;
`;

export const ButtonContainer = styled.div`
  display: flex;
  position: absolute;

  top: -40px;
  right: 70px;

  button + button {
    margin-left: 30px;
    transition: color 0.4s;

    &:hover {
      background-color: #DEA8FF;
      
    }
  }
`;

export const Description = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;

  grid-gap: 20px;

  grid-template-areas: 
    "main reputation"
    "howToSubscribe informations"
  ;

  height: 100px;

  h1 {
    font-weight: bold;
    font-size: 24px;
  }

  margin-bottom: 600px;
`;

export const DescriptionMain = styled.div`
  grid-area: main;
  margin-top: 120px;
  padding: 0 80px;

  ul {
    margin-top: 90px;

    li {
      margin-bottom: 10px;
    }

    li > span {
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 0px;
    }
  }
`;

export const DescriptionReputation = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: column;

  div {
    margin: 15px 0 40px 0;
  }

  p + p {
    margin-top: 30px;
    align-self: flex-end;
    padding-right: 80px;
    text-decoration: underline;
  }

`;

export const DescriptionInformations = styled.div`
  grid-area: informations;

  margin-top: 20px;
  padding: 50px;
  width: 100%;
  background-color: rgba(222, 168, 255, 0.38);
  border-radius: 40px 0 0 40px;

  div {
    display: flex;
    height: fit-content;
    align-items: center;

    div {
      width: 40px;
    }
  }

  div + div {
    padding-top: 20px;
  }

  p {
    font-weight: 700;
    font-size: 20px;
  }
`;

export const DescriptionHowToSubscribe = styled.div`
  grid-area: howToSubscribe;

  padding: 0 80px;

  p {
    margin-top: 10px;
  }

  h1:not(:first-child) {
    padding-top: 30px;
  }
`;

export const BackButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin-top: 30px;
    margin-bottom: 40px;
  }
`;