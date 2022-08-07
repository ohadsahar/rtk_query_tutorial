import styled from 'styled-components';

export const FormWrapper = styled.form`
  padding: 1rem 0rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  grid-row-gap: 1vh;
  justify-content: center;
  align-items: center;
`;

export const InputDiv = styled.input`
  padding: 1rem;
  width: 50vw;
  padding: 1rem;
  border: 3px solid ${(props) => props.theme.colors.third};
  border-radius: 8px;
  :focus {
    outline: none;
    border: 3px solid ${(props) => props.theme.colors.boldTextColor};
  }
`;
