import styled from 'styled-components';

export const Footers = styled.footer`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6B7280;
  position: fixed;
  bottom: 0;
`;

export const FooterContainer = styled.div`
  width: 90vw;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #F3F4F6;

  div {
    display: flex;
    a {
      color: #FFA43A;
      text-decoration: none;
      margin-left: 10px;
    }

    a:hover{
      font-weight: bold;
      text-decoration: underline;
    }
  }
`;
