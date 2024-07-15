import React from 'react';
import './uploadForm.css';
import { useState } from 'react';

const UploadForm = () => {

    const [uploadClicked, setUploadClicked] = useState(false);
    const [itemAdded, setItemAdded] = useState(false);
    const handleUpload = (event) => {
        event.preventDefault(); 
        setUploadClicked(true);
      };

 


  return (
    <section className="upload-form">
      <h2>Sell Clothes</h2>
      <form onSubmit={handleUpload}>
        <input type="file" name="clothesImage"/>
        <button type='submit'> {uploadClicked ? 'Uploaded Successfully' : 'Upload'}</button>
      </form>
     
      
    </section>
  );
};

export default UploadForm;
