import styled from 'styled-components';

export const Superior = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #4a5568;
  font-size: 14px;
  padding: 10px;

  @media (max-width: 890px) {
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
  }

  @media (max-width: 770px) {
    width: 100%;
    display: block;
  }
`;

export const Label = styled.div`
  font-weight: 600;
  padding: 5px 0px;
`;

export const Input = styled.input`
  width: 300px;
  text-align: center;
  padding: 5px;
  font-size: 16px;
  outline: none;
  background-color: #f2f4f5;
  
  border: 1px solid #FFA43A;
  border-radius: 3px;
  box-shadow: 2px 2px 2px #FFA43A;
  font-size: 14px;
  color: #4a5568;

  @media (max-width: 1060px) {
    width: 250px;
  }

  @media (max-width: 890px) {
    width: 330px ;
  }

  @media (max-width: 770px) {
    width: 100%;
  }
`;


export const DataInicio = styled.div`
  margin: 10px 0px 10px 0px;

  @media (max-width: 890px) {
    
  }
`;

export const DataFim = styled.div`
  
  @media (max-width: 890px) {
    
  }
`;

export const NomeOperador = styled.div`
  margin: 20px 0px;
`;

export const Centro = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const ButtomPesquisar = styled.button`
  width: 200px;
  padding: 10px;
  cursor: pointer;
  color:  #4a5568;
  margin-right: 10px;
  background-color: #FFA43A;
  border: 1px solid #E8742A;
  box-shadow: 2px 2px 2px #4a5568;
  border-radius: 3px;
  transition: 0.5s;

  &:hover {
    border: 1px solid #4a5568;
    box-shadow: 2px 2px 2px #4a5568;
    background-color: #E8742A;
    color: #f2f4f5; 
  }

  @media (max-width: 770px) {
    width: 100%;
    margin: 0px 10px;
  }

  @media (max-width: 550px) {
    width: 100%;
    margin: 0px 10px;
  }
`;