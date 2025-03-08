// src/services/contractService.js
import axios from 'axios';
import { api } from '../api';

const API_URL = api; // Update this URL based on your backend setup

// Create a new contract
export const createContract = async (contractData) => {
  const response = await api.post('/contracts/', contractData);
  return response.data;

};
export const createBusinessContract = async (contractData) => {
  const response = await api.post('/Busines_contact/', contractData);
  return response.data;

};

// Get all contracts
export const getAllContracts = async () => {
  const response = await api.get('/contracts/');
  return response.data;
};

// Get contract by ID
export const getContractById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// Update a contract
export const updateContract = async (id, contractData) => {
  const response = await axios.put(`${API_URL}/${id}`, contractData);
  return response.data;
};

// Delete a contract
export const deleteContract = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

// Simulate e-signature
export const signContract = async (id, user) => {
  const response = await axios.post(`${API_URL}/${id}/sign`, { user });
  return response.data;
};
