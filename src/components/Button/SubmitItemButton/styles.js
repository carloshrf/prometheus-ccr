import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 530px;
  height: 65px;
  border: 0;
  background-color: #F9F9F9;

  box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  span {
    color: #454150 !important;
    font-size: 20px;
    font-weight: 700;
    padding-right: 10px;
  }
`;