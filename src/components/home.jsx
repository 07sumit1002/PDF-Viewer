/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import Footer from './footer'; // Assuming the Footer component is in the same directory
import Navbar from './navbar';

const Home = () => {
  // State for mock data
  const [tableData, setTableData] = useState([
    { docName: 'Document 1', timeUploaded: '12:30 PM', status: 'Processed' },
    { docName: 'Document 2', timeUploaded: '02:45 PM', status: 'Waiting' },
    { docName: 'Document 3', timeUploaded: '04:15 PM', status: 'Filled' },
    { docName: 'Document 4', timeUploaded: '04:15 PM', status: 'Filled' },
    { docName: 'Document 5', timeUploaded: '04:15 PM', status: 'Filled' },
    { docName: 'Document 6', timeUploaded: '04:15 PM', status: 'Filled' },
    { docName: 'Document 7', timeUploaded: '04:15 PM', status: 'Filled' },
    { docName: 'Document 8', timeUploaded: '04:15 PM', status: 'Filled' },
    { docName: 'Document 9', timeUploaded: '04:15 PM', status: 'Filled' },
    { docName: 'Document 10', timeUploaded: '04:15 PM', status: 'Filled' },
    { docName: 'Document 11', timeUploaded: '04:15 PM', status: 'Filled' },
    { docName: 'Document 12', timeUploaded: '04:15 PM', status: 'Filled' },
    { docName: 'Document 13', timeUploaded: '04:15 PM', status: 'Filled' },
  ]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(20);

  // Calculate total pages based on rowsPerPage
  const totalPages = Math.ceil(tableData.length / rowsPerPage);

  // Function to handle rows per page change
  const handleRowsPerPageChange = (selectedRowsPerPage) => {
    setRowsPerPage(selectedRowsPerPage);
    setCurrentPage(1); // Reset current page when rows per page changes
  };

  // Function to handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Calculate start and end index for current page
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  // Display only the rows for the current page
  const displayedRows = tableData.slice(startIndex, endIndex);

  // Function to handle file upload
  const handleFileUpload = (file) => {
    // Perform your file upload logic here
    console.log('Uploading file:', file.name);

    // Example: Add the uploaded file data to the table
    const newTableData = [...tableData, {
      docName: file.name,
      timeUploaded: new Date().toLocaleTimeString(),
      status: 'Uploaded',
    }];
    setTableData(newTableData);
  };

  return (
    <div>
      <h1>PDF Viewer</h1>
      {/* Include Navbar component and pass handleFileUpload function */}
      <Navbar onFileUpload={handleFileUpload} />
      <table>
        <thead>
          <tr>
            <th>S.no.</th>
            <th>Doc Name</th>
            <th>Time Uploaded</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {displayedRows.map((row, index) => (
            <tr key={index}>
              <td>{startIndex + index + 1}</td>
              <td>{row.docName}</td>
              <td>{row.timeUploaded}</td>
              <td>{row.status}</td>
              <td>
                <a href='#' ><FontAwesomeIcon icon={faEye} title="View" style={{ marginRight: '10px', cursor: 'pointer' }} /></a>
                <a href='#' ><FontAwesomeIcon icon={faTrash} title="Delete" style={{ marginRight: '10px', cursor: 'pointer' }} /></a>
                <a href='#' ><FontAwesomeIcon icon={faEllipsisH} title="More Options" style={{ cursor: 'pointer' }} /></a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Footer
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleRowsPerPageChange}
        onPageChange={handlePageChange}
        currentPage={currentPage}
        totalPages={totalPages}
      />

      
    </div>
  );
};

export default Home;