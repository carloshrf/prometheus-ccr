import styled from 'styled-components';

export const ButtonContainer = styled.button`
  height: 47px;

  padding: 30px 20px;

  border-radius: 10px;
  background-color: #454150;
  border: none;
  display: flex;
  align-items: center;

  cursor: pointer;

  transition: box-shadow 0.8s;

  img {
    padding-right: 10px;
  }

  span {
    font-weight: bold;
    font-size: 20px;
    color: #F9F9F9;
  }

  &:hover {
    box-shadow: 0px 0px 2px 3px #000;
  }
`;