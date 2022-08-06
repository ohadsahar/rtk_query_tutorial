import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  width: 25vw;
  padding: 1vh;
  border-radius: 8px;
  border: 1px solid black;
  background-color: ${(props) => props.theme.colors.third};
  color: white;
  font-weight: bold;
`;
