import React from 'react';
import { useParams } from 'react-router-dom';

function JobPage({ jobs }) {
  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id));

  return (
    <div>
      {job ? (
        <>
          <h2>{job.name}</h2>
          <p>{job.description}</p>
        </>
      ) : (
        <p>Job not found</p>
      )}
    </div>
  );
}

export default JobPage;
