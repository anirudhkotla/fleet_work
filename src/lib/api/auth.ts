import axios from 'axios';

const API_URL = '/api/auth';

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

interface AuthResponse {
  success: boolean;
  message?: string;
  token?: string;
}

export async function loginUser(data: LoginData): Promise<AuthResponse> {
  try {
    const response = await axios.post(`${API_URL}/login`, data);
    return response.data;
  } catch (err) {
    return { success: false, message: err.response?.data?.message || 'Login failed' };
  }
}

export async function registerUser(data: RegisterData): Promise<AuthResponse> {
  try {
    const response = await axios.post(`${API_URL}/register`, data);
    return response.data;
  } catch (err) {
    return { success: false, message: err.response?.data?.message || 'Registration failed' };
  }
}
