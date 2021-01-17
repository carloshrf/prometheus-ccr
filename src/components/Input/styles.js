import styled, { css } from 'styled-components';

export const InputItem = styled.input`
  height: 40px;
  border-radius: 10px;
  border: 1px solid #C0C0C0;
  padding: 10px;
  font-size: 18px;
  max-width: 330px;

  ${({ width }) => (!!width 
    ? css`width: ${width}px;`
    : css`width: 100%;`
  )}

  &::placeholder {
    font-family: Poppins, sans-serif;
    color: #C3C3C3;
  }

  ${({ gridArea }) => (gridArea && css`grid-area: ${gridArea};`)}
`;