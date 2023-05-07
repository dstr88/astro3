import React, { useState } from 'react';


function Modal(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [guardianName, setGuardianName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  }

  return (
    <div className="modal">
      <h2>Contact Information</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first-name">First Name:</label>
        <input type="text" id="first-name" name="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />

        <label htmlFor="last-name">Last Name:</label>
        <input type="text" id="last-name" name="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />

        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" min="0" max="120" value={age} onChange={(e) => setAge(e.target.value)} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={phone} onChange={(e) => setPhone(e.target.value)} required />

        {age < 18 && (
          <div>
            <label htmlFor="guardian-name">Guardian Name:</label>
            <input type="text" id="guardian-name" name="guardian-name" value={guardianName} onChange={(e) => setGuardianName(e.target.value)} required />
          </div>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Modal;