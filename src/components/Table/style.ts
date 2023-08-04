import styled from 'styled-components';

export const TableContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  margin: 0px 10px;
  border-radius: 5px;
  box-shadow: 3px 4px 4px #cdd3d9;
`;

export const Caption = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  background-color: rgba(252, 174, 85, 0.859);
  border-radius: 3px 3px 0px 0px;
  padding: 10px;
  color: #4a5568;
  
  & div {
    & span {
      color: #4a5568;
      font-weight: 700;
    }
  }
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 10px;
  color: #4a5568;
  background-color: #e6e9ec; 

  & div {
    font-weight: 600;
  }
`;

export const TableData = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 10px;
  color: #4a5568;
  background-color: #f2f4f5; 

  &:nth-child(even) {
    background-color: #f9fafb; 
  }
`;
