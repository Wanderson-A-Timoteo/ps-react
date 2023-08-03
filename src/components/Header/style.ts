import styled from 'styled-components';

export const Headers = styled.header`
  width: 100vw;
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: #6B7280;
`;

export const HeaderContainer = styled.div`
  width: 90vw;
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  margin: 10px;

  h1 {
    color: #FFA43A;
  }

  span {
    font-size: 2rem;
    font-weight: 300;
    color: #FFA43A;
  }

  @media (max-width: 768px) {
    span {
      font-size: 1.8rem;
      font-weight: 300;
      color: #FFA43A;
    }
  }

  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span {
      font-size: 1.5rem;
      font-weight: 300;
      color: #FFA43A;
    }
  }
`;

