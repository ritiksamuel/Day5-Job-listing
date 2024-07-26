import React, { useState, useEffect } from 'react';
import './ContentWriter.css';

function ContentWriter() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [linkedinId, setLinkedinId] = useState('');
  const [resume, setResume] = useState('Submit your Drive link here...');
  const [formFilled, setFormFilled] = useState(false);

  useEffect(() => {
    if (name && email && linkedinId && resume && resume !== 'Submit your Drive link here...') {
      setFormFilled(true);
    } else {
      setFormFilled(false);
    }
  }, [name, email, linkedinId, resume]);

  const handleResumeChange = (e) => {
    const inputText = e.target.innerText.replace('Submit your Drive link here...', '');
    setResume(inputText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, linkedinId, resume };
    
    // Get existing data from local storage
    const existingData = JSON.parse(localStorage.getItem('contentWriterApplications')) || [];

    // Add new form data
    const updatedData = [...existingData, formData];

    // Save updated data to local storage
    localStorage.setItem('contentWriterApplications', JSON.stringify(updatedData));

    alert('Data saved successfully!');
  };

  return (
    <div className="content-writer-container">
      <h2>UI/UX Developer</h2>
      <p>Details about the UI/UX Developer job...</p>
      <form className="content-writer-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            LinkedIn ID:
            <input
              type="text"
              value={linkedinId}
              onChange={(e) => setLinkedinId(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Resume:
            <div
              className="resume-input"
              contentEditable
              onInput={handleResumeChange}
              data-placeholder="Submit your Drive link here..."
              suppressContentEditableWarning={true}
            >
            </div>
          </label>
        </div>
        {formFilled && (
          <button type="submit" className="submit-button">
            Submit
          </button>
        )}
      </form>
    </div>
  );
}

export default ContentWriter;
