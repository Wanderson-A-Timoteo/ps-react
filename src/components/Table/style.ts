// import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export const TableContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  margin: 0px 20px;
  border-radius: 5px;
  border: 1px solid #d9dde2; 
  box-shadow: 3px 4px 4px #cdd3d9; 
`;

export const Caption = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  background-color: #d9dde2; 
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

// export const TableFooter = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 10px;
//   background-color:  #f2f4f5; 
// `;

// export const StyledReactPaginate = styled(ReactPaginate)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 5px;
//   padding: 10px;
//   border-radius: 3px;
//   list-style: none;
//   border-radius: 5px;
//   border: 1px solid #e6e9ec; 
//   box-shadow: 4px 4px 4px #cdd3d9;
//   cursor: pointer;
  
//   & li {
//     & a {
//         padding: 8px 12px;
//         border-radius: 4px;
//         text-decoration: none;
//         color: #4a5568;
//         background-color: #f2f4f5;
//         transition: background-color 0.2s, color 0.2s;

//         &.previous,
//         &.next {
//           background-color: #f2f4f5;
//         }

//         &.disabled {
//           cursor: not-allowed;
//           opacity: 0.5;
//         }

//         &.selected {
//           background-color: #4a5568;
//           color: #c0c6cd;
//         }

//         &:hover {
//           background-color: #e6e9ec;
//         }
//       }
//   }
// `;