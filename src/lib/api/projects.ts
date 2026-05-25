import axios from 'axios';

const API_URL = '/api/projects';

interface Project {
  id: string;
  name: string;
  description: string;
  status: string;
  created_at: string;
}

interface ProjectResponse {
  success: boolean;
  message?: string;
  data?: Project[];
}

interface CreateProjectData {
  name: string;
  description: string;
}

interface UpdateProjectData {
  name?: string;
  description?: string;
  status?: string;
}

export async function getProjects(): Promise<ProjectResponse> {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (err) {
    return { success: false, message: err.response?.data?.message || 'Failed to fetch projects' };
  }
}

export async function createProject(data: CreateProjectData): Promise<ProjectResponse> {
  try {
    const response = await axios.post(API_URL, data);
    return response.data;
  } catch (err) {
    return { success: false, message: err.response?.data?.message || 'Failed to create project' };
  }
}

export async function updateProject(id: string, data: UpdateProjectData): Promise<ProjectResponse> {
  try {
    const response = await axios.put(`${API_URL}/${id}`, data);
    return response.data;
  } catch (err) {
    return { success: false, message: err.response?.data?.message || 'Failed to update project' };
  }
}

export async function deleteProject(id: string): Promise<ProjectResponse> {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (err) {
    return { success: false, message: err.response?.data?.message || 'Failed to delete project' };
  }
}
