import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #edeeef;  
`;

export const BelieveSection = styled.section`
  width: 100%;
  padding: 80px;

  p {
    padding: 60px 80px;
  }
`;

export const PartnerCompaniesSection = styled.section`
  background-color: #454150;
  padding: 60px 80px;

  h1 {
    color: #FFF;
  }

  & > div{
    padding: 40px 0;
    display: flex;
    align-items: right;
    justify-content: flex-end;
  }
`;