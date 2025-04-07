import React from 'react';
import styled from 'styled-components';

const Sidebar = styled.div`
  width: 250px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const AddButton = styled.button`
  background-color: #e0e0e0;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 1rem;
`;

const CheckboxList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FilterSidebar = ({ workTypes, selectedTypes, onChange, onAddClick }) => {
  return (
    <Sidebar>
      <AddButton onClick={onAddClick}>+ Add Project</AddButton>
      <div style={{ marginTop: '1rem' }}>
        <strong>Types of Work</strong>
        <CheckboxList>
          {workTypes.map((type) => (
            <label key={type}>
              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() => onChange(type)}
              />{' '}
              {type}
            </label>
          ))}
        </CheckboxList>
      </div>
    </Sidebar>
  );
};

export default FilterSidebar;
