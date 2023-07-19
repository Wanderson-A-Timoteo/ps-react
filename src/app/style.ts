import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export const TableContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 10px;
`;

export const Caption = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;

  & div {
    & span {
      font-weight: 600;
    }
  }
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  background-color: lightgray;
  padding: 10px;

  & div {
    font-weight: 600;
  }
`;

export const TableData = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 10px;

  &:nth-child(even) {
    background-color: #F5F5F5;
  }
`;

export const TableFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  padding: 10px;
`;

export const Main = styled.main`
  display: block;
`;

export const Container = styled.div`
  max-width: 1440px;
  height: 100vh;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const Superior = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15%;
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
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin-top: 3px;
  text-align: center;
  padding: 5px;
  font-size: 16px;
  outline: none;
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
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #C1C1C1;
    font-weight: 600;
  }
`;

export const StyledReactPaginate = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      a {
        padding: 8px 12px;
        border-radius: 4px;
        text-decoration: none;
        color: #000;
        background-color: #eaeaea;
        cursor: pointer;
        transition: background-color 0.2s, color 0.2s;

        &.previous,
        &.next {
          background-color: #dcdcdc;
        }

        &.disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }

        &.selected {
          background-color: #000;
          color: #fff;
        }

        &:hover {
          background-color: #dcdcdc;
        }
      }
    }
  }
`;
