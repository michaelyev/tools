'use client';
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
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

const Sidebar = styled.div`
  width: 250px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProjectArea = styled.div`
  flex: 1;
  width: 100%;
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

const ProjectCard = styled.div`
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

const ProjectDetails = styled.div`
  flex: 1;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0;
    margin-top: 1rem;
  }
`;

const Price = styled.div`
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 768px) {
    width: 100%;
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
`;

const Modal = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
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

const ModalButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
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

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

const LoadMoreButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: #f2f2f2;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  border: none;
`;

const ViewAllButton = styled.a`
  padding: 0.75rem 1.5rem;
  background: #d9d9d9;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  color: #333;
`;

const CheckboxList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SelectedFilters = styled.div`
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



const CloseModalButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const Projects = () => {
  const allProjects = new Array(20).fill(null);
  const [visibleCount, setVisibleCount] = useState(4);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [formData, setFormData] = useState({ title: '', description: '', index: '', price: '' });

  const workTypes = ['House Cleaning', 'Interior Design', 'Handyman'];

  const handleTypeChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const removeFilter = (type) => {
    setSelectedTypes((prev) => prev.filter((t) => t !== type));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = () => {
    console.log('Project submitted:', formData);
    setShowAddModal(false);
    setFormData({ title: '', description: '', index: '', price: '' });
  };

  return (
    <Container>
      <Sidebar>
        <AddButton onClick={() => setShowAddModal(true)}>+ Add Project</AddButton>
        <div style={{ marginTop: '1rem' }}>
          <strong>Types of Work</strong>
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
        </div>
      </Sidebar>

      <ProjectArea>
        <SelectedFilters>
          {selectedTypes.map((type) => (
            <FilterTag key={type}>
              {type}
              <CloseTag onClick={() => removeFilter(type)}>×</CloseTag>
            </FilterTag>
          ))}
        </SelectedFilters>

        {allProjects.slice(0, visibleCount).map((_, i) => (
          <ProjectCard key={i}>
            <Price>$200.00</Price>
            <ProjectDetails>
              <p>Sample description for the project goes here. Replace with real data.</p>
              <Meta>
                <span>📍 Amsterdam</span>
                <span>🕒 11:58 a.m. today</span>
              </Meta>
            </ProjectDetails>
            <MessageButton>Send Message</MessageButton>
          </ProjectCard>
        ))}

        <ButtonRow>
          {visibleCount < allProjects.length && (
            <LoadMoreButton onClick={() => setVisibleCount((prev) => prev + 4)}>
              Load More
            </LoadMoreButton>
          )}
          <ViewAllButton href="/projects">View All Projects</ViewAllButton>
        </ButtonRow>
      </ProjectArea>

      {showAddModal && (
        <ModalOverlay onClick={() => setShowAddModal(false)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <CloseModalButton onClick={() => setShowAddModal(false)}>×</CloseModalButton>
            <h2>Add New Project</h2>
            <ModalInput
              placeholder="Title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
            <ModalTextarea
              placeholder="Description"
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleInputChange}
            />
            <ModalInput
              placeholder="Index"
              name="index"
              value={formData.index}
              onChange={handleInputChange}
            />
            <ModalInput
              placeholder="Price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />
            <ModalButton onClick={handleFormSubmit}>Save Project</ModalButton>
          </Modal>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default Projects;