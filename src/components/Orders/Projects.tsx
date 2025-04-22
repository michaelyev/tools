'use client';

import React, { useEffect, useState } from 'react';
import {
  Container,
  ProjectArea,
  ButtonRow,
  LoadMoreButton,
  ViewAllButton,
} from './styles';
import ProjectCard from './ProjectCard';
import FilterSidebar from './FilterSidebar';
import SelectedFilters from './SelectedFilters';
import AddProjectModal from './AddProjectModal';
import { createProject, fetchAllProjects } from '@utils/data_fetch/projectFetch';
import { getUserLocation } from '@utils/location_fetch/location_fetch';


const ProjectsClient = ({ user, location: routeLocation, initialCategory }) => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>(
    initialCategory ? [initialCategory] : []
  );const [projects, setProjects] = useState([]);
  const [zip, setZip] = useState("");
  const [radius, setRadius] = useState(50);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [locationLabel, setLocationLabel] = useState('');
  const [finalLocation, setFinalLocation] = useState<{ city: string; state: string } | null>(null);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    zip: '',
    price: '',
    category: '',
  });

  const loadProjects = async (
    pageToLoad = 1,
    append = false,
    customZip = zip,
    customRadius = radius
  ) => {
    try {
      const data = await fetchAllProjects({
        page: pageToLoad,
        limit: 4,
        categories: selectedTypes,
        zip: customZip,
        radius: customRadius,
      });

      if (data.length < 4) setHasMore(false);
      setProjects((prev) => (append ? [...prev, ...data] : data));
    } catch (err) {
      console.error('Error loading projects:', err);
    }
  };

  useEffect(() => {
    const determineLocation = async () => {
      if (routeLocation && Array.isArray(routeLocation) && routeLocation.length === 2) {
        setFinalLocation({ state: routeLocation[0], city: routeLocation[1] });
        setLocationLabel(routeLocation[1]);
      } else {
        const loc = await getUserLocation();
        if (loc?.city && loc?.zip !== 'Unknown') {
          setFinalLocation({ city: loc.city, state: '' }); // штат из геолокации не извлечён — можно оставить пустым
          setLocationLabel(loc.city);
          setZip(loc.zip);
        }
      }
    };

    determineLocation();
  }, []);

  useEffect(() => {
    setPage(1);
    setHasMore(true);
    loadProjects(1, false);
  }, []);

  const handleTypeChange = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const removeFilter = (type: string) => {
    setSelectedTypes((prev) => prev.filter((t) => t !== type));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async () => {
    if (!user) return;
    setIsLoading(true);

    const newProject = {
      ...formData,
      userName: user.name?.toLowerCase() || 'unknown',
      userId: user.id,
    };

    try {
      const saved = await createProject(newProject);
      setProjects((prev) => [saved, ...prev]);
    } catch (err) {
      console.error('Failed to save project:', err);
    }

    setIsLoading(false);
    setShowAddModal(false);
    setFormData({
      title: '',
      description: '',
      zip: '',
      price: '',
      category: '',
    });
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    loadProjects(nextPage, true);
  };

  const handleSearch = (newZip: string, newRadius: number) => {
    setZip(newZip);
    setRadius(newRadius);
    setPage(1);
    setHasMore(true);
    loadProjects(1, false, newZip, newRadius);
  };

  console.log(selectedTypes)
  return (
    <>
      <h2 style={{ marginBottom: "1rem" }}>
        {locationLabel ? `Projects near ${locationLabel}` : "Latest Projects"}
      </h2>

      <Container>
        <FilterSidebar
          location={finalLocation ?? undefined}
          selectedTypes={selectedTypes}
          onChange={handleTypeChange}
          onAddClick={() => user && setShowAddModal(true)}
          zip={zip}
          onZipChange={setZip}
          radius={radius}
          onRadiusChange={setRadius}
          onSearchClick={handleSearch}
        />

        <ProjectArea>
          {selectedTypes && (
            <SelectedFilters
              location={finalLocation?.city ?? ""}
              selectedTypes={selectedTypes}
              onRemove={removeFilter}
            />
          )}

          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}

          <ButtonRow>
            {hasMore && (
              <LoadMoreButton onClick={handleLoadMore}>
                Load More
              </LoadMoreButton>
            )}
            <ViewAllButton href="/projects">View All Projects</ViewAllButton>
          </ButtonRow>
        </ProjectArea>

        {showAddModal && (
          <AddProjectModal
            formData={formData}
            onClose={() => !isLoading && setShowAddModal(false)}
            onChange={handleInputChange}
            onSubmit={handleFormSubmit}
            isLoading={isLoading}
          />
        )}
      </Container>
    </>
  );
};

export default ProjectsClient;
