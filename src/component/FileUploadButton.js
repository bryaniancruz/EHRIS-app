import React, { useRef } from 'react';
import { Button, Icon } from 'semantic-ui-react';

const FileUploadButton = ({ onFileSelect }) => {
  const fileInputRef = useRef(null); // Creating a ref for the file input element

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    onFileSelect(file);
  };

  return (
    <div>
      <input
        ref={fileInputRef} // Assigning the ref to the file input element
        type="file"
        id="file-input"
        accept="image/*"
        onChange={handleFileSelect}
        style={{ display: 'none' }}
      />
      <label htmlFor="file-input">
        <Button as="div" labelPosition="right">
          <Button color="teal" icon>
            <Icon name="file" />
            Upload
          </Button>
          <label htmlFor="file" className="ui basic teal left pointing label">
            Select Image
          </label>
        </Button>
      </label>
    </div>
  );
};

export default FileUploadButton;