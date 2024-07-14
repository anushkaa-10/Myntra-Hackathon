import React from 'react';

const DetailsForm = () => {
  return (
    <section className="details-form">
      <h2>Details of Old Clothes</h2>
      {/* Add details form */}
      <form>
        {/* Form fields for details */}
        <input type="text" name="clothesName" placeholder="Clothes Name" />
        <input type="text" name="clothesCondition" placeholder="Condition" />
        <textarea name="clothesDescription" placeholder="Description"></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default DetailsForm;
