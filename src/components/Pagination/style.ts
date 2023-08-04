import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export const Paginations = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color:  #e6e9ec; 
  margin: 0px 10px;
  box-shadow: 3px 4px 4px #cdd3d9;
  border-radius: 0px 0px 3px 3px;
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
  box-shadow: 4px 4px 4px #cdd3d9;
  cursor: pointer;
  background-color: #f2f4f5;
  
  & li {
    & a {
        padding: 8px 12px;
        border-radius: 4px;
        text-decoration: none;
        color: #4a5568;
        background-color: #f2f4f5;
        transition: 0.3s;

        &:hover {
          background-color: rgba(252, 174, 85, 0.859);
        }
      }
  }
`;