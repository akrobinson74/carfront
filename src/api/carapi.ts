import axios from "axios";
import { Car, CarEntry, CarResponse, Owner, OwnerEntry, OwnerResponse } from "../types";

export const addCar = async (car: Car): Promise<CarResponse> => {
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/cars`, car, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data;
}

export const addOwner = async (owner: Owner): Promise<OwnerResponse> => {
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/owners`, owner, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data;
}

export const deleteCar = async (link: string): Promise<CarResponse> => {
  const response = await axios.delete(link);
  return response.data
}

export const deleteOwner = async (link: string): Promise<OwnerResponse> => {
  const response = await axios.delete(link);
  return response.data
}


export const getCars = async (): Promise<CarResponse[]> => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/api/cars`
  );
  return response.data._embedded.cars;
};

export const getOwners = async (): Promise<OwnerResponse[]> => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/api/owners`
  );
  return response.data._embedded.owners;
};

export const updateCar = async (carEntry: CarEntry): Promise<CarResponse> => {
  const response = await axios.put(carEntry.url, carEntry.car, {
    headers: {
      'Content-Type': 'application/json'
    },
  });
  return response.data;
}

export const updateOwner = async (ownerEntry: OwnerEntry): Promise<OwnerResponse> => {
  const response = await axios.put(ownerEntry.url, ownerEntry.owner, {
    headers: {
      'Content-Type': 'application/json'
    },
  });
  return response.data;
}