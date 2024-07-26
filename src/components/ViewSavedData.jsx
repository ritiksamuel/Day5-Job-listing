import React, { useEffect, useState } from 'react';

function ViewSavedData() {
  const [savedData, setSavedData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('contentWriterApplications')) || [];
    setSavedData(data);
  }, []);

  return (
    <div>
      <h2>Saved Applications</h2>
      {savedData.length > 0 ? (
        <ul>
          {savedData.map((item, index) => (
            <li key={index}>
              <p>Name: {item.name}</p>
              <p>Email: {item.email}</p>
              <p>LinkedIn ID: {item.linkedinId}</p>
              <p>Resume: {item.resume}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No applications saved yet.</p>
      )}
    </div>
  );
}

export default ViewSavedData;
