import styled from 'styled-components';

export const TaskTitleWrapper = styled.h1`
  font-size: 32px;
  font-weight: 500;
`;

export const ItemText = styled.p`
  color: black;
  font-size: 32px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: white;
  font-size: 2vh;
  text-align: left;
`;

export const LoadingTextWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  font-size: 3vw;
  color: grey;
`;
