import axios from 'axios';

const API_URL = '/api/tasks';

interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  due_date: string;
  project_id: string;
  assigned_to: string;
  created_at: string;
}

interface TaskResponse {
  success: boolean;
  message?: string;
  data?: Task[];
}

interface CreateTaskData {
  title: string;
  description: string;
  status: string;
  priority: string;
  due_date: string;
  project_id: string;
  assigned_to: string;
}

interface UpdateTaskData {
  title?: string;
  description?: string;
  status?: string;
  priority?: string;
  due_date?: string;
}

export async function getTasks(): Promise<TaskResponse> {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (err) {
    return { success: false, message: err.response?.data?.message || 'Failed to fetch tasks' };
  }
}

export async function createTask(data: CreateTaskData): Promise<TaskResponse> {
  try {
    const response = await axios.post(API_URL, data);
    return response.data;
  } catch (err) {
    return { success: false, message: err.response?.data?.message || 'Failed to create task' };
  }
}

export async function updateTask(id: string, data: UpdateTaskData): Promise<TaskResponse> {
  try {
    const response = await axios.put(`${API_URL}/${id}`, data);
    return response.data;
  } catch (err) {
    return { success: false, message: err.response?.data?.message || 'Failed to update task' };
  }
}

export async function deleteTask(id: string): Promise<TaskResponse> {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (err) {
    return { success: false, message: err.response?.data?.message || 'Failed to delete task' };
  }
}
