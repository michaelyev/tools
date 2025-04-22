import { workTypes } from "@utils/data_fetch/projectFetch";
import React from "react";
import styled from "styled-components";

const SelectedFiltersWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  @media (min-width: 768px) {
    overflow-x: visible;
  }
`;

const FilterTag = styled.div`
  background-color: #e0e0e0;
  padding: 0.4rem 0.75rem;
  border-radius: 20px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CloseTag = styled.span`
  cursor: pointer;
  font-weight: bold;
`;

const SelectedFilters = ({ selectedTypes, onRemove }) => {
  return (
    <SelectedFiltersWrapper>
      {selectedTypes.map((typeValue) => {
        const typeObj = workTypes.find((t) => t.value === typeValue);
        return (
          <FilterTag key={typeValue}>
            {typeObj ? typeObj.title : typeValue}
            <CloseTag onClick={() => onRemove(typeValue)}>×</CloseTag>
          </FilterTag>
        );
      })}
    </SelectedFiltersWrapper>
  );
};

export default SelectedFilters;
