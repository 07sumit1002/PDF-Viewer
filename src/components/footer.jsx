import React from 'react';

const Footer = ({ rowsPerPage, onRowsPerPageChange, onPageChange, currentPage, totalPages }) => {
  const handleRowsPerPageChange = (event) => {
    const selectedRowsPerPage = parseInt(event.target.value, 10);
    onRowsPerPageChange(selectedRowsPerPage);
  };

  const handleFirstPage = () => {
    onPageChange(1);
  };

  const handlePreviousPage = () => {
    const prevPage = currentPage > 1 ? currentPage - 1 : 1;
    onPageChange(prevPage);
  };

  const handleNextPage = () => {
    const nextPage = currentPage < totalPages ? currentPage + 1 : totalPages;
    onPageChange(nextPage);
  };

  const handleLastPage = () => {
    onPageChange(totalPages);
  };

  return (
    <div className="footer">
      <div>
        <span>Rows per page:</span>
        <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
          <option value={5}>5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
          <option value={10}>10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
          <option value={20}>20&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
        </select>
      </div>
      <div>
        <button onClick={handleFirstPage}>First</button>
        <button onClick={handlePreviousPage}>Previous</button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button onClick={handleNextPage}>Next</button>
        <button onClick={handleLastPage}>Last</button>
      </div>
    </div>
  );
};

export default Footer;
