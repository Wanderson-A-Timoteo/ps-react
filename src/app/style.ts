import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export const Main = styled.main`
  display: block;
  background-color: #FFF;
`;

export const Container = styled.div`
  max-width: 1440px;
  height: 100vh;
  justify-content: center;
  align-items: center;
  margin: auto;
  background-color: #F9F9F9;
  border: 1px solid #E5E7EB;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  padding: 10px;
  color: #4a5568;
`;

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
  background-color: #f2f4f5; //zinc-100
  border: 1px solid #e6e9ec; // zinc-200
  border-radius: 3px;
  box-shadow: 3px 4px 4px #cdd3d9; //zinc-400
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
  color:  #4a5568; //gray-700
  margin-right: 20px;
  background-color: #e6e9ec; //zinc-200
  border: 1px solid #d9dde2; // zinc-300
  border-radius: 3px;
  box-shadow: 3px 4px 4px #cdd3d9; //zinc-400

  &:hover {
    background-color: #cdd3d9; //zinc-400
    border: 1px solid #c0c6cd; //zinc-500
    font-weight: 900;
  }
`;

export const TableContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  margin: 0px 20px;
  border-radius: 5px;
  border: 1px solid #d9dde2; // zinc-300
  box-shadow: 3px 4px 4px #cdd3d9; //zinc-400
`;

export const Caption = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  background-color: #d9dde2; //zinc-300
  padding: 10px;

  & div {
    & span {
      font-weight: 600;
    }
  }
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 10px;
  color: #4a5568;
  background-color: #e6e9ec; // zinc-200

  & div {
    font-weight: 600;
  }
`;

export const TableData = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 10px;
  color: #4a5568;
  background-color: #f2f4f5; //zinc-100

  &:nth-child(even) {
    background-color: #f9fafb; //zinc-50
  }
`;

export const TableFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color:  #f2f4f5; //zinc-100
`;

export const StyledReactPaginate = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 10px;
  border-radius: 3px;
  list-style: none;
  border-radius: 5px;
  border: 1px solid #e6e9ec; // zinc-200
  box-shadow: 4px 4px 4px #cdd3d9; //zinc-400
  cursor: pointer;
  
  & li {
    background-color: red;

    & a {
        padding: 8px 12px;
        border-radius: 4px;
        text-decoration: none;
        color: #4a5568;
        background-color: #f2f4f5;
        transition: background-color 0.2s, color 0.2s;

        &.previous,
        &.next {
          background-color: red;
        }

        &.disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }

        &.selected {
          background-color: #4a5568;
          color: #c0c6cd;
        }

        &:hover {
          background-color: #e6e9ec;
        }
      }
  }
`;
