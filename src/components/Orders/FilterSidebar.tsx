'use client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getUserLocation, getZipFromCity } from '@utils/location_fetch/location_fetch';
import { workTypes } from '@utils/data_fetch/projectFetch';

// Define interface for the component props
interface Location {
  city: string;
  state: string;
}

interface FilterSidebarProps {
  selectedTypes: string[];
  onChange: (type: string) => void;
  onAddClick: () => void;
  zip: string;
  onZipChange: (zip: string) => void;
  radius: number;
  onRadiusChange: (radius: number) => void;
  onSearchClick: (zip: string, radius: number) => void;
  location?: Location;
}

const Sidebar = styled.div`width: 250px; @media (max-width: 768px) { width: 100%; }`;
const AddButton = styled.button`background-color: #e0e0e0; padding: 0.75rem 1.5rem; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; margin-bottom: 1rem;`;
const CheckboxList = styled.div`display: flex; flex-direction: column; gap: 0.5rem; margin-top: 0.5rem;`;
const Label = styled.label`display: block; margin-top: 1rem; font-weight: bold;`;
const ZipInput = styled.input`width: 100%; padding: 0.6rem; margin-top: 0.5rem; border: 1px solid #ccc; border-radius: 8px;`;
const RadiusInputWrapper = styled.div`margin-top: 0.5rem;`;
const RadiusValue = styled.div`text-align: right; font-size: 14px; color: #555;`;
const RadiusInput = styled.input`width: 100%;`;
const ClearButton = styled.button`margin-top: 1rem; padding: 0.5rem 1rem; background-color: #f44336; color: white; border: none; border-radius: 8px; cursor: pointer;`;
const LocationCheckbox = styled.label`display: flex; align-items: center; margin-top: 0.5rem; font-size: 14px; color: #555; gap: 0.5rem;`;

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  selectedTypes,
  onChange,
  onAddClick,
  zip,
  onZipChange,
  radius,
  onRadiusChange,
  onSearchClick,
  location,
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

  useEffect(() => { setZipInput(zip); }, [zip]);
  useEffect(() => { setRadiusInput(radius); }, [radius]);

  useEffect(() => {
    if (useLocation) {
      setLocationLoading(true);
      getUserLocation().then((location) => {
        setLocationLoading(false);
        if (location?.zip && location.zip !== "Unknown") {
          setZipInput(location.zip);
          onZipChange(location.zip);
        }
      });
    } else {
      setZipInput("");
      onZipChange("");
    }
  }, [useLocation]);

  useEffect(() => {
    const fetchZipFromCity = async () => {
      if (location?.city && location?.state && !zipInput) {
        const resolvedZip = await getZipFromCity({ city: location.city, state: location.state.toUpperCase() });
        if (resolvedZip) {
          setZipInput(resolvedZip);
          onZipChange(resolvedZip);
        }
      }
    };
    fetchZipFromCity();
  }, [location]);

  const handleClear = () => {
    setZipInput("");
    setRadiusInput(50);
    onZipChange("");
    onRadiusChange(50);
    onChange("CLEAR");   // <--- Главное изменение
    setUseLocation(false);
  };

  return (
    <Sidebar>
      <AddButton onClick={onAddClick}>+ Add Project</AddButton>
      <Label>Types of Work</Label>
      <CheckboxList>
        {workTypes.map(({ title, value }) => (
          <label key={value}>
            <input
              type="checkbox"
              checked={selectedTypes.includes(value)}
              onChange={() => onChange(value)}
            />{" "}
            {title}
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
        {locationLoading ? "📡 Detecting location..." : "📍 Use my current location"}
      </LocationCheckbox>

      <Label>Radius: <strong>{radiusInput} mi</strong></Label>
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
