import axios, { type AxiosResponse } from 'axios';

export interface ParkingSpotResponse {
  id: string;
  latitude: number;
  longitude: number;
  createdAt: string;
  isFree: boolean;
}

const baseUrl = 'http://localhost:3000/v1/parking';

export async function getFreeParkingSpots(
  latitude: number,
  longitude: number,
): Promise<ParkingSpotResponse[]> {
  try {
    const url = `${baseUrl}/free-spots?latitude=${latitude}&longitude=${longitude}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch free parking spots:', error);
    throw new Error('Failed to fetch free parking spots');
  }
}
