import styled from 'styled-components';

export const Superior = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15%;
  margin: 0px 20px;
  color: #4a5568;
  font-size: 14px;
`;

export const Label = styled.div`
  font-weight: 600;
`;

export const LabelIn = styled.label`
  font-weight: 500;
  margin-left: 50px;
`;

export const Input = styled.input`
  width: 300px;
  text-align: center;
  padding: 5px;
  font-size: 16px;
  outline: none;
  background-color: #f2f4f5;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
  box-shadow: 3px 4px 4px #cdd3d9;
  font-size: 14px;
  color: #4a5568;
`;


export const DataInicio = styled.div`

`;

export const DataFim = styled.div`
  
`;

export const NomeOperador = styled.div`

`;

export const Centro = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  height: 10%;
`;

export const ButtomPesquisar = styled.button`
  width: 200px;
  padding: 10px;
  cursor: pointer;
  color:  #4a5568;
  margin-right: 20px;
  background-color: #e6e9ec;
  border: 1px solid #d9dde2; 
  border-radius: 3px;
  box-shadow: 3px 4px 4px #cdd3d9; 

  &:hover {
    background-color: #cdd3d9; 
    border: 1px solid #c0c6cd; 
    font-weight: 900;
  }
`;