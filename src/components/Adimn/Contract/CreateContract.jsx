import axios from 'axios';
import React, { useState } from 'react';
import { api } from '../../../api';
import { createContract } from '../../../Services/contractServices';

const CreateContract = () => {
  const [contractData, setContractData] = useState({
    client: '',
    contractType: '',
    startDate: '',
    endDate: '',
    paymentTerms: '',
    description: '',
  });

 // Function to handle form input changes
const handleChange = (e) => {
  setContractData({ ...contractData, [e.target.name]: e.target.value });
};

// Function to handle form submission
const handleSubmit = async (e) => {
  e.preventDefault(); // Prevent default form behavior
  try {
    // Call the createContract function to send contract data to the API
    const response = await createContract(contractData);
    
    // Since createContract returns response.data, you can log it directly
    console.log('Contract created:', response);
  } catch (error) {
    console.error('Error creating contract:', error);
  }
};


  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Create Contract</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-semibold mb-1" htmlFor="client">
            Client Name
          </label>
          <input
            id="client"
            type="text"
            name="client"
          placeholder="Client Name"
          value={contractData.client}
          onChange={handleChange}
            required
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1" htmlFor="contractType">
            Contract Type
          </label>
          <input
            id="contractType"
            type="text"
            name="contractType"
            placeholder="Contract Type"
            value={contractData.contractType}
            onChange={handleChange}
            required
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1" htmlFor="startDate">
            Start Date
          </label>
          <input
            id="startDate"
            type="date"
            placeholder="Start Date"
            name="startDate"
            value={contractData.startDate}
            onChange={handleChange}
            required
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1" htmlFor="endDate">
            End Date
          </label>
          <input
            id="endDate"
            type="date"
            placeholder="End Date"
            name="endDate"
            value={contractData.endDate}
            onChange={handleChange}
            required
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1" htmlFor="paymentTerms">
            Payment Terms
          </label>
          <textarea

            id="paymentTerms"
             name="paymentTerms"
            placeholder="Payment Terms"
            value={contractData.paymentTerms}
            onChange={handleChange}
            required
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1" htmlFor="description">
            Contract Description
          </label>
          <textarea
          name="description"
          placeholder="Description"
          value={contractData.description}
          onChange={handleChange}
          className="border p-2 mb-4"
          required
        />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Create Contract
        </button>
      </form>
    </div>
  );
};

export default CreateContract;
