import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Price = styled.div`
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Details = styled.div`
  flex: 1;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0;
    margin-top: 1rem;
  }
`;

const Meta = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 14px;
  color: gray;
  flex-wrap: wrap;
`;

const MessageButton = styled.button`
  background-color: #f2f2f2;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  white-space: nowrap;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const ProjectCard = () => {
  return (
    <Card>
      <Price>$200.00</Price>
      <Details>
        <p>Sample description for the project goes here. Replace with real data.</p>
        <Meta>
          <span>📍 Amsterdam</span>
          <span>🕒 11:58 a.m. today</span>
        </Meta>
      </Details>
      <MessageButton>Send Message</MessageButton>
    </Card>
  );
};

export default ProjectCard;
