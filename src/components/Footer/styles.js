import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px 80px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

`;

export const Contacts = styled.div`
  
  display: flex;
  flex-direction: row;
  width: 45%;

  justify-content: space-between;

  & > div {
    padding-top: 30px;
  }

  a {
    cursor: pointer;
  }
`;

export const SocialMedias = styled.div`
  width: 150px;
  
  h1 {
    font-size: 20px;
    font-weight: 700;
  }

  & > a:not(:nth-child(2)) {
    margin-left: 10px;
  }
`;