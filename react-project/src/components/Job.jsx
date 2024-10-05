// src/pages/Jobs.jsx

import React, { useEffect, useState } from 'react';

const Jobs = () => {
  const [jobs, setJobs] = useState([]); // State to store jobs data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // State to store any error

  useEffect(() => {
    // Fetch jobs data from db.json
    fetch('/db.json') // Fetch from public folder
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON
      })
      .then((data) => {
        setJobs(data); // Set the data to state
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        console.error('Error fetching jobs:', error);
        setError(error); // Set error state
        setLoading(false); // Set loading to false even if there is an error
      });
  }, []);

  // Show a loading message while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  // Show an error message if there was an error
  if (error) {
    return <div>Error fetching jobs: {error.message}</div>;
  }

  // Display jobs once data is fetched
  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>{job.title}</li> // Adjust based on your db.json structure
        ))}
      </ul>
    </div>
  );
};

export default Jobs;
