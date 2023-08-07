import styled from 'styled-components';

export const Section = styled.section`
  display: none;

  @media (max-width: 770px) {
    display: block;
    padding-bottom: 1.25rem;
  }
  
`;

export const TotalBalance = styled.div`
  background-color: #d1d5db;
  padding: 1rem;
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
  border-radius: 0.375rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const MobileGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-left: 0.5rem;
  gap: 0.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Transaction = styled.div`
  background-color: #fff; 
  padding: 1rem;
  border-radius: 0.375rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .date-value {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.875rem;

    .blue-text {
      color: #3b82f6; 
      font-weight: bold;
    }

    .gray-text {
      color: #6b7280;
    }
  }

  .transaction-type {
    padding: 0.375rem 0.75rem;
    font-size: 0.75rem; 
    font-weight: 500; 
    text-transform: uppercase;
    border-radius: 0.25rem; 

    &.green-bg {
      color: #065f46; 
      background-color: #c6f6d5;
    }

    &.yellow-bg {
      color: #c50101;
      background-color: rgba(255, 109, 109, 0.488);
    }
  }

  .operator {
    font-size: 0.875rem;
    color: #4b5563;
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  margin-top: 0.5rem;

  button {
    margin: 0 0.25rem;
    padding: 0.75rem 1.5rem;
    border-radius: 0.25rem;
    background-color: #d1d5db;
    color: #6b7280;
    font-weight: 500;

    &.active {
      background-color: #4b5563;
      color: #f3f4f6;
    }
  }
`;
