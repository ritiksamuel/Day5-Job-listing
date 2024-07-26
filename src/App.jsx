import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from 'react-router-dom';
import './App.css';
import JobPage from './JobPage';
import LogoCreator from './components/LogoCreator';
import FullStackDeveloper from './components/FullStackDeveloper';
import ContentWriter from './components/ContentWriter';
import ViewSavedData from './components/ViewSavedData';

function JobBox({ job }) {
  const navigate = useNavigate();

  const handleApply = () => {
    if (job.id === 1) {
      navigate('/job/1');
    } else if (job.id === 2) {
      navigate('/job/2');
    } else if (job.id === 3) {
      navigate('/job/3');
    }
  };

  return (
    <div className="job-box">
      <h2 style={{ color: job.id === 1 ? '#3498db' : job.id === 2 ? '#f1c40f' : '#2ecc71' }}>
        {job.name}
      </h2>
      <p>{job.description}</p>
      <button
        onClick={handleApply}
        style={{
          backgroundColor: job.id === 1 ? '#3498db' : job.id === 2 ? '#f1c40f' : '#2ecc71',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Apply
      </button>
    </div>
  );
}

function App() {
  const [jobs] = useState([
    { id: 1, name: 'UI/UX Designer', description: 'Create UI for clients' },
    { id: 2, name: 'Full Stack Developer', description: 'Develop full stack applications' },
    { id: 3, name: 'Content Writer', description: 'Write content for clients' },
  ]);

  return (
    <Router>
      <div className="App">
        <h1>Job Portal</h1>
        <div className="job-container">
          {jobs.map((job) => (
            <JobBox key={job.id} job={job} />
          ))}
          {/* Add View button */}
          
        </div>
        <div className="view-container">
            <Link to="/view-saved-data">
              <button className="view-button">View Saved Applications</button><br/>
            </Link>
          </div>
      </div>
      <Routes>
        <Route path="/job/1" element={<LogoCreator />} />
        <Route path="/job/2" element={<FullStackDeveloper />} />
        <Route path="/job/3" element={<ContentWriter />} />
        <Route path="/job/:id" element={<JobPage jobs={jobs} />} />
        <Route path="/view-saved-data" element={<ViewSavedData />} />
      </Routes>
    </Router>
    
  );
}

export default App;
