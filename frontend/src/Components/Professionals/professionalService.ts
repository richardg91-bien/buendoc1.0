import axios from "axios";
import { Professional } from "./Professional";

const API = process.env.REACT_APP_API;

export const getProfessional = async () => {
  return await axios.get<Professional[]>(`${API}/professionals`);
};

export const getProfessionalById = async (id: string) => {
  return await axios.get<Professional>(`${API}/professionals/${id}`);
};

export const createNewProfessional = async (professional: Professional) => {
  return await axios.post(`${API}/professional`, professional);
};

export const deleteProfessionalsById = async (id: string) => {
  return await axios.delete(`${API}/professionals/${id}`);
};

export const updateProfessional = async (id: string, professional: Professional) => {
  return await axios.put(`${API}/professionals/${id}`, professional);
};

export function getProfessionalsById(id: string) {
  throw new Error("Function not implemented.");
}
export function getProfessionals() {
  throw new Error("Function not implemented.");
}

