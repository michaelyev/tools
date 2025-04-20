export const fetchAllProjects = async (
  args?: { page?: number; limit?: number; categories?: string[]; zip?: string; radius?: number }
) => {
  const { page = 1, limit = 4, categories = [], zip = '', radius = 50 } = args || {};

  const params = new URLSearchParams();
  params.append('page', page.toString());
  params.append('limit', limit.toString());
  if (categories.length) params.append('categories', categories.join(','));
  if (zip) params.append('zip', zip);
  if (radius) params.append('radius', radius.toString());

  const res = await fetch(`http://localhost:4100/projects?${params.toString()}`);
  if (!res.ok) throw new Error('Failed to fetch projects');
  return res.json();
};

export const createProject = async (data) => {
  const res = await fetch('http://localhost:4100/projects', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to create project');
  return res.json();
};
