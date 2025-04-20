'use client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getUserLocation } from '@utils/location_fetch/location_fetch';

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
  margin-top: 0.5rem;
`;

const Label = styled.label`
  display: block;
  margin-top: 1rem;
  font-weight: bold;
`;

const ZipInput = styled.input`
  width: 100%;
  padding: 0.6rem;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const RadiusInputWrapper = styled.div`
  margin-top: 0.5rem;
`;

const RadiusValue = styled.div`
  text-align: right;
  font-size: 14px;
  color: #555;
`;

const RadiusInput = styled.input`
  width: 100%;
`;

const ClearButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const LocationCheckbox = styled.label`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  font-size: 14px;
  color: #555;
  gap: 0.5rem;
`;

const FilterSidebar = ({
  workTypes,
  selectedTypes,
  onChange,
  onAddClick,
  zip,
  onZipChange,
  radius,
  onRadiusChange,
  onSearchClick,
}) => {
  const [zipInput, setZipInput] = useState(zip);
  const [radiusInput, setRadiusInput] = useState(radius || 50);
  const [useLocation, setUseLocation] = useState(false);
  const [locationLoading, setLocationLoading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearchClick(zipInput, radiusInput);
    }, 300);
    return () => clearTimeout(timeout);
  }, [zipInput, radiusInput, selectedTypes]);

  useEffect(() => {
    setZipInput(zip);
  }, [zip]);

  useEffect(() => {
    setRadiusInput(radius);
  }, [radius]);

  // Когда включаем чекбокс — определяем локацию
  useEffect(() => {
    if (useLocation) {
      setLocationLoading(true);
      getUserLocation().then((location) => {
        setLocationLoading(false);
        if (location?.zip && location.zip !== 'Unknown') {
          setZipInput(location.zip);
          onZipChange(location.zip);
        }
      });
    } else {
      setZipInput('');
      onZipChange('');
    }
  }, [useLocation]);

  const handleTypeChange = (type: string) => {
    if (type === 'CLEAR_ALL') {
      workTypes.forEach((t) => onChange(t));
    } else {
      onChange(type);
    }
  };

  const handleClear = () => {
    setZipInput('');
    setRadiusInput(50);
    onZipChange('');
    onRadiusChange(50);
    handleTypeChange('CLEAR_ALL');
    setUseLocation(false);
  };

  return (
    <Sidebar>
      <AddButton onClick={onAddClick}>+ Add Project</AddButton>

      <Label>Types of Work</Label>
      <CheckboxList>
        {workTypes.map((type) => (
          <label key={type}>
            <input
              type="checkbox"
              checked={selectedTypes.includes(type)}
              onChange={() => handleTypeChange(type)}
            />{' '}
            {type}
          </label>
        ))}
      </CheckboxList>

      <Label>Zip Code</Label>
      <ZipInput
        type="text"
        placeholder="e.g. 98101"
        value={zipInput}
        onChange={(e) => setZipInput(e.target.value)}
        disabled={useLocation}
      />
      <LocationCheckbox>
        <input
          type="checkbox"
          checked={useLocation}
          onChange={() => setUseLocation((prev) => !prev)}
        />
        {locationLoading ? '📡 Detecting location...' : '📍 Use my current location'}
      </LocationCheckbox>

      <Label>
        Radius: <strong>{radiusInput} mi</strong>
      </Label>
      <RadiusInputWrapper>
        <RadiusInput
          type="range"
          min="1"
          max="100"
          value={radiusInput}
          onChange={(e) => setRadiusInput(Number(e.target.value))}
        />
        <RadiusValue>{radiusInput} miles</RadiusValue>
      </RadiusInputWrapper>

      <ClearButton onClick={handleClear}>Clear Filters</ClearButton>
    </Sidebar>
  );
};

export default FilterSidebar;
