import styled from 'styled-components';

export const Container = styled.div`
  max-width: 300px;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  background-color: #FFF;

  & > img {
    width: 100%;
  }
`;

export const Details = styled.div`
  padding: 0 10px 10px 10px;

  span {
    font-size: 18px;
  }

  p {
    font-size: 14px;
    color: gray;
    font-style: italic;
  }
`;