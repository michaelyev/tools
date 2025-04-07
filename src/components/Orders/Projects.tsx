// components/projects/Projects.jsx
'use client';
import React, { useState } from 'react';
import {
  Container,
  ProjectArea,
  ButtonRow,
  LoadMoreButton,
  ViewAllButton
} from './styles';
import ProjectCard from './ProjectCard';
import FilterSidebar from './FilterSidebar';
import SelectedFilters from './SelectedFilters';
import AddProjectModal from './AddProjectModal';

const Projects = () => {
  const allProjects = new Array(20).fill(null);
  const [visibleCount, setVisibleCount] = useState(4);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    index: '',
    price: ''
  });

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
      <FilterSidebar
        workTypes={workTypes}
        selectedTypes={selectedTypes}
        onChange={handleTypeChange}
        onAddClick={() => setShowAddModal(true)}
      />

      <ProjectArea>
        <SelectedFilters selectedTypes={selectedTypes} onRemove={removeFilter} />

        {allProjects.slice(0, visibleCount).map((_, i) => (
          <ProjectCard key={i} />
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
        <AddProjectModal
          formData={formData}
          onClose={() => setShowAddModal(false)}
          onChange={handleInputChange}
          onSubmit={handleFormSubmit}
        />
      )}
    </Container>
  );
};

export default Projects;
