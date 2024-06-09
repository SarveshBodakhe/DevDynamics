import { ApiResponse } from '../types/data';

const API_URL = 'http://localhost:5000/api/data'; 

export const fetchData = async (): Promise<ApiResponse> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};
