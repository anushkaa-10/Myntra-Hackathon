import React from 'react';
import './detailsForm.css'; 

const DetailsForm = () => {
  const handleUpload = (event) => {
    event.preventDefault(); 
    setUploadClicked(true);
  };

  return (
    <section className="details-form">
      <h2 className="form-title">Details of Old Clothes</h2>
      <form className="form-container" onSubmit={handleUpload}>
        {/* Cloth Name */}
        <div className="form-group">
          <label htmlFor="clothesName" className="form-label">Clothes Name</label>
          <input type="text" id="clothesName" name="clothesName" className="form-input" placeholder="Enter Clothes Name" />
        </div>

        {/* Age of Clothes */}
        <div className="form-group">
          <label htmlFor="clothesAge" className="form-label">Age of Clothes</label>
          <input type="text" id="clothesAge" name="clothesAge" className="form-input" placeholder="Enter Age of Clothes (in years)" />
        </div>

        {/* Brand Name */}
        <div className="form-group">
          <label htmlFor="brandName" className="form-label">Brand Name</label>
          <input type="text" id="brandName" name="brandName" className="form-input" placeholder="Enter Brand Name" />
        </div>

        {/* Usage Intensity */}
        <div className="form-group">
          <label htmlFor="usageIntensity" className="form-label">Usage Intensity</label>
          <select id="usageIntensity" name="usageIntensity" className="form-input">
            <option value="">Select Usage Intensity</option>
            <option value="lightly-used">Lightly Used</option>
            <option value="moderately-used">Moderately Used</option>
            <option value="heavily-used">Heavily Used</option>
          </select>
        </div>

        {/* Category */}
        <div className="form-group">
          <label htmlFor="category" className="form-label">Category</label>
          <select id="category" name="category" className="form-input">
            <option value="">Select Category</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="female">Unisex</option>
          </select>
        </div>

        {/* Description */}
        <div className="form-group">
          <label htmlFor="clothesDescription" className="form-label">Description</label>
          <textarea id="clothesDescription" name="clothesDescription" className="form-textarea" placeholder="Enter Description"></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="form-submit-btn">Submit</button>
      </form>
    </section>
  );
};

export default DetailsForm;
