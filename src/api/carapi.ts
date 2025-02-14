import axios from "axios";
import { Car, CarEntity, CarEntry, CarResponse, Owner, OwnerEntry, OwnerResponse } from "../types";

export const addACar = async (car: CarEntity): Promise<CarEntity> => {
  const body = JSON.stringify(car);
  console.log(`Body to be saved: ${body}`);
  const response = await fetch(`${import.meta.env.VITE_API_URL}/cars`, {
    body: body,
    headers: {
      'Content-Type': 'application/json',
    },
    method: "POST"
  });
  const data = await response.json();
  return data;
}

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

export const deleteCarById = async (id: number) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/cars/${id}`,
    {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'DELETE'
    }
  );
  if (!response.ok) {
    console.error("Unable to delete Car w/id: " + id);
  }
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

export const getCarz = async (): Promise<CarEntity[]> => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/cars`);
  return response.data;
}

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

export const updateCarById = async (car: CarEntity, id: number): Promise<CarEntity> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/cars/${id}`,
    {
      body: JSON.stringify(car),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PUT'
    }
  );
  const data = await response.json();
  return data;
}

export const updateOwner = async (ownerEntry: OwnerEntry): Promise<OwnerResponse> => {
  const response = await axios.put(ownerEntry.url, ownerEntry.owner, {
    headers: {
      'Content-Type': 'application/json'
    },
  });
  return response.data;
}