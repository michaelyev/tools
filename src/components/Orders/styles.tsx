import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

export const ProjectArea = styled.div`
  flex: 1;
  width: 100%;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

export const LoadMoreButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: #f2f2f2;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  border: none;
`;

export const ViewAllButton = styled.a`
  padding: 0.75rem 1.5rem;
  background: #d9d9d9;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  color: #333;
`;
