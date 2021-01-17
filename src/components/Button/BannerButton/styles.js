import styled from 'styled-components';

export const Button = styled.button`
  background-color: #DEA8FF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  padding: 25px 40px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  span {
    padding-right: 10px;
    font-weight: bold;
    font-size: 22px;
    color: #454150;
  }
`;