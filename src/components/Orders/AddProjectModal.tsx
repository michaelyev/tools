'use client';
import { workTypes } from '@utils/data_fetch/projectFetch';
import React from 'react';
import styled from 'styled-components';

// Define interfaces for the component props
interface FormData {
  title?: string;
  description?: string;
  zip?: string;
  price?: string;
  category?: string;
}

interface AddProjectModalProps {
  formData?: FormData;
  onClose: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onSubmit: () => void;
  isLoading?: boolean;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const Modal = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  position: relative;
`;

const CloseModalButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const ModalTitle = styled.h2`
  margin-bottom: 1rem;
`;

const ModalInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const ModalTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: vertical;
`;

const ModalSelect = styled.select`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const ModalButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const AddProjectModal: React.FC<AddProjectModalProps> = ({ 
  formData = {}, 
  onClose, 
  onChange, 
  onSubmit, 
  isLoading 
}) => {

  return (
    <ModalOverlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <CloseModalButton onClick={onClose}>×</CloseModalButton>
        <ModalTitle>Add New Project</ModalTitle>

        <ModalInput
          placeholder="Title"
          name="title"
          value={formData.title || ""}
          onChange={onChange}
        />
        <ModalTextarea
          placeholder="Description"
          name="description"
          rows={4}
          value={formData.description || ""}
          onChange={onChange}
        />
        <ModalInput
          placeholder="Zip Code"
          name="zip"
          value={formData.zip || ""}
          onChange={onChange}
        />
        <ModalInput
          placeholder="Price"
          name="price"
          value={formData.price || ""}
          onChange={onChange}
        />
        <ModalSelect
          name="category"
          value={formData.category || ""}
          onChange={onChange}
        >
          <option value="">Select Category</option>
          {workTypes.map(({ title, value }) => (
            <option key={value} value={value}>
              {title}
            </option>
          ))}
        </ModalSelect>

        <ModalButton onClick={onSubmit} disabled={isLoading}>
          {isLoading ? "Saving..." : "Save Project"}
        </ModalButton>
      </Modal>
    </ModalOverlay>
  );
};

export default AddProjectModal;
