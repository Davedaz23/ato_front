import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { api } from '../../../api'; // Assuming your API setup

const ContactManagement = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from your API
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await api.get('/contacts/GetAllContact');
        setContacts(response.data.contacts);
      } catch (error) {
        console.error('Error fetching contacts:', error);
        setContacts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  // CRUD operations
  const handleView = (contact) => {
    alert(`Viewing contact: ${contact.name}`);
  };

  const handleEdit = (contact) => {
    alert(`Editing contact: ${contact.name}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      try {
        await api.delete(`/contacts/DeleteContact/${id}`);
        setContacts(contacts.filter(contact => contact.id !== id));
        alert('Contact deleted successfully!');
      } catch (error) {
        console.error('Error deleting contact:', error);
        alert('Failed to delete the contact.');
      }
    }
  };

  // Custom Button Component for CRUD actions
  const CRUDButtons = (props) => {
    const { data } = props;
    
    return (
      <div className="flex space-x-2">
        <button
          onClick={() => handleView(data)}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
        >
          View
        </button>
        <button
          onClick={() => handleEdit(data)}
          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-700"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(data.id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    );
  };

  // Column definitions including CRUD buttons
  const [colDefs, setColDefs] = useState([
    { headerName: "Name", field: "name" },
    { headerName: "Email", field: "email" },
    { headerName: "Phone", field: "phone" },
    { headerName: "Budget", field: "budget" },
    { headerName: "Company", field: "company" },
    { headerName: "Metrics", field: "metrics" },
    { headerName: "Message", field: "message" },
    {
     
      field: "button",
      cellRenderer: CRUDButtons, // Use the CRUD button component
      sortable: false,
      filter: false,
      width: 200,
    },
  ]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Contact Us Submissions</h2>
      {contacts.length === 0 ? (
        <p>No data available.</p>
      ) : (
        <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
          <AgGridReact
            rowData={contacts} // Provide contact data to the grid
            columnDefs={colDefs} // Define the column structure
            pagination={true} // Enable pagination
            paginationPageSize={10} // Display 10 rows per page
          />
        </div>
      )}
    </div>
  );
};

export default ContactManagement;
