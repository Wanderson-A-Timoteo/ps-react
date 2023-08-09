import styled from 'styled-components';

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #FFF;
`;

export const Container = styled.div`
  flex-grow: 1;
  width: 90vw;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding-bottom: 60px;
  background-color: rgba(248, 244, 238, 0.608);

  @media (max-height: 770px) {
    max-height: calc(100vh - 60px);
    overflow-y: auto;
  }
`;
