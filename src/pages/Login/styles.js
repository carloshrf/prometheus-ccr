import styled from 'styled-components';

export const Container = styled.div`
`;

export const Advice = styled.div`
  width: 100%;
  background: linear-gradient(180deg, rgba(222,168,255,0.5634628851540616) 0%, rgba(255,255,255,1) 100%);
  padding: 100px 0;

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
  max-width: 600px;
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
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input[type=text]:first-child {
      margin-bottom: 30px;
    }
  }
`;

export const MoreInfo = styled.div`
  display: flex;
  
`;

export const LocalizationContainer = styled.div`
  display: flex;
`;

export const Localization = styled.div`
  display: flex;
  flex-direction: column;

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

  select {
    font-size: 16px;
    border-radius: 10px;
    padding: 5px;
  }
`;

export const LocalizationTag = styled.ul`
  color: #DEA8FF;
  margin: 10px 0;

  li {
    border: 1px solid #DEA8FF;
    padding: 0 20px 0 5px;
    border-radius: 10px;
    margin: 5px 10px 5px 0;
    display: inline-block;
    position: relative;

    span {
      color: #DEA8FF;
      font-size: 10px;
      align-self: initial;
      position: absolute;
      top: 0px;
      right: 5px;
      cursor: pointer;
    }
  }
`;

export const EmailField = styled.div`
  padding-left: 20px;
  width: 100%;
  padding-right: 20px; 
  
  p {
    margin-bottom: 10px;
  }

  textarea {
    padding: 10px;
    width: 100%;
    height: 250px;
    border-radius: 10px;
    resize: vertical;
  } 
`;

export const ButtonsContainer = styled.div`
  width: 100%;

  padding: 40px 0 0 0;
  display: flex;
  flex-direction: column;

  p {
    width: 100%;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  div > label {
    display: flex;
    align-items: center;
    font-size: 14px;
    height: 30px;

    input {
      margin-right: 6px;
      width: 20px;
    }
  }

  div > label:not(first-child) {
    padding-left: 30px;
  }

  button {
    margin-top: 30px;
    border: solid 1px #DEA8FF;
  }

  button > span {
    padding: 0 60px;
  }
`;