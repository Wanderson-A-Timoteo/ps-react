import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export const Paginations = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color:  #f2f4f5; 
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
  border: 1px solid #e6e9ec; 
  box-shadow: 4px 4px 4px #cdd3d9;
  cursor: pointer;
  
  & li {
    & a {
        padding: 8px 12px;
        border-radius: 4px;
        text-decoration: none;
        color: #4a5568;
        background-color: #f2f4f5;
        transition: background-color 0.2s, color 0.2s;

        &.previous,
        &.next {
          background-color: #f2f4f5;
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