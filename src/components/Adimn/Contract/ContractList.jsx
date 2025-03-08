import React, { useEffect, useState, useMemo } from 'react';
import { useTable } from 'react-table';
import { getAllContracts } from '../../../Services/contractServices';

const ContractList = () => {
  const [contracts, setContracts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchContracts = async () => {
      try {
        const data = await getAllContracts();
        setContracts(data.contracts);
      } catch (error) {
        console.error('Error fetching contracts: ' + error, error);
        setError('Error fetching contracts' + error);
      }
    };

    fetchContracts();
  }, []);

  // Define columns for react-table
  const columns = useMemo(
    () => [
      {
        Header: 'Client',
        accessor: 'client', // key in the data
      },
      {
        Header: 'Contract Type',
        accessor: 'contractType',
      },
      {
        Header: 'Start Date',
        accessor: 'startDate',
      },
      {
        Header: 'End Date',
        accessor: 'endDate',
      },
      {
        Header: 'Payment Terms',
        accessor: 'paymentTerms',
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
      {
        Header: 'Actions',
        Cell: ({ row }) => (
          <div className="space-x-2">
            <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={() => handleEdit(row.original)}>Edit</button>
            <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDelete(row.original.id)}>Delete</button>
          </div>
        ),
      },
    ],
    []
  );

  const data = useMemo(() => contracts, [contracts]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  // Handle edit and delete actions
  const handleEdit = (contract) => {
    console.log('Editing contract:', contract);
    // Add edit logic here
  };

  const handleDelete = (id) => {
    console.log('Deleting contract with id:', id);
    // Add delete logic here
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Contracts</h1>
      {error && <p className="text-red-500">{error}</p>}

      {/* Table container with horizontal and vertical scroll */}
      <div className="overflow-x-auto overflow-y-auto max-h-96 max-w-full">
        <table className="min-w-full bg-white shadow-md rounded-lg" {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200 text-left">
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps()}
                    className="px-4 py-2 border-b border-gray-300"
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="hover:bg-gray-100">
                  {row.cells.map(cell => (
                    <td
                      {...cell.getCellProps()}
                      className="px-4 py-2 border-b border-gray-300"
                    >
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContractList;
