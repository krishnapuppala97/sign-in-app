import React, { useState } from 'react';

function SignUp() {
  const [userInput, setUserInput] = useState({
    fullName: '',
    companyEmail: '',
    MobileNumber: '',
    companyName: '',
    cloudUsage: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'cloudUsage') {
      const isChecked = e.target.checked;
      setUserInput({
        ...userInput,
        [name]: isChecked ? [...userInput.cloudUsage, value] : userInput.cloudUsage.filter(item => item !== value),
      });
    } else {
      setUserInput({
        ...userInput,
        [name]: value,
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // validate user input
    // send request to server to create new user account
    console.log(userInput);
  };

  const handleOptionChange = (e) => {
    const selectedOptions = [...e.target.selectedOptions].map(option => option.value);
    setUserInput({
      ...userInput,
      cloudUsage: selectedOptions
    });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} style={{ paddingLeft: "auto" }}>
        <h1>Sign Up</h1>
        <label>
          Full Name:
          <input type="text" name="fullName" value={userInput.fullName} onChange={handleInputChange} required />
        </label>
        <label>
          Company Email:
          <input type="email" name="companyEmail" value={userInput.companyEmail} onChange={handleInputChange} required />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={userInput.phoneNumber}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Company Name:
          <input type="text" name="companyName" value={userInput.companyName} onChange={handleInputChange} required />
        </label>
        <div className="form-group col-md-12">
          <label >Cloud Usage:</label>
          <select className=" col-md-12 selectpicker " name="cloudUsage" multiple data-live-search="true" value={userInput.cloudUsage} onChange={handleOptionChange} required>
            <option value="AWS" selected>AWS</option>
            <option value="Azure">Azure</option>
            <option value="GCP">GCP</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUp;
