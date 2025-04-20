import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }

  &:hover {
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
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

const Description = styled.p`
  color: #555;
  font-size: 16px;
  margin: 0;
`;

const Meta = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 14px;
  color: gray;
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
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

const UserStamp = styled.div`
  position: absolute;
  bottom: 0.75rem;
  right: 1rem;
  font-size: 12px;
  color: #888;
`;

const ProjectCard = ({ project }) => {
  const formattedDate = new Date(project.createdAt).toLocaleString(undefined, {
    weekday: 'short',
    hour: 'numeric',
    minute: '2-digit',
    month: 'short',
    day: 'numeric',
  });

  return (
    <Card>
      <Price>${project.price || 'N/A'}</Price>

      <Details>
        <Description>{project.description || 'No description provided.'}</Description>
        <Meta>
          <MetaItem>
            📍 {project.city || 'Unknown city'}
            {project.neighborhood ? ` — ${project.neighborhood}` : ''}
          </MetaItem>
          <MetaItem>📮 {project.zip || '—'}</MetaItem>
          <MetaItem>🕒 {formattedDate}</MetaItem>
        </Meta>
      </Details>

      <MessageButton>Send Message</MessageButton>

      {project.userName && <UserStamp>{project.userName}</UserStamp>}
    </Card>
  );
};

export default ProjectCard;
