// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUpload } from '@fortawesome/free-solid-svg-icons';
// import './navbar.css'

// const Navbar = () => {
//   const handleSearch = (event) => {
//     // Implement your search logic here
//     console.log('Searching for:', event.target.value);
//   };

//   const handleUpload = () => {
//     // Implement your file upload logic here
//     console.log('Upload button clicked');
//   };

//   return (
//     <nav>
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search for files..."
//           onChange={handleSearch}
//         />
//       </div>
//       <button className="upload-button" onClick={handleUpload}>
//         <FontAwesomeIcon icon={faUpload} />
//         Upload File
//       </button>
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';

const Navbar = () => {
  const handleSearch = (event) => {
    // Implement your search logic here
    console.log('Searching for:', event.target.value);
    // Add your logic to filter and display search results
    // For example, update the state with the search query
  };

  const handleUpload = () => {
    // Implement your file upload logic here
    console.log('Upload button clicked');

    // Trigger the file input click event
    document.getElementById('fileInput').click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Perform your file upload logic here
      console.log('Uploading file:', file.name);

      // Example: Reading file content using FileReader
      const reader = new FileReader();
      reader.onloadend = () => {
        const fileContent = reader.result;
        console.log('File content:', fileContent);
        // Perform additional processing if needed
      };
      reader.readAsText(file); // Read file content as text
    }
  };

  return (
    <nav>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for files..."
          onChange={handleSearch}
        />
      </div>
      <button className="upload-button" onClick={handleUpload}>
        <FontAwesomeIcon icon={faUpload} />
        Upload File
      </button>
      {/* Hidden file input triggered by the Upload button */}
      <input
        type="file"
        id="fileInput"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </nav>
  );
};

export default Navbar;
