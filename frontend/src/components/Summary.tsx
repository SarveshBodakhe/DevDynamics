// Summary.tsx
import React from 'react';
import './Summary.css'; // Import the CSS file
import { AuthorWorklogData } from '../types/data';

interface SummaryProps {
  data: AuthorWorklogData;
}

const Summary: React.FC<SummaryProps> = ({ data }) => {
  const totalActivities = data.rows.reduce(
    (acc, author) => acc + author.totalActivity.reduce((sum, activity) => sum + parseInt(activity.value), 0),
    0
  );
  const totalAuthors = data.rows.length;

  return (
    <div className="summary-container mb-4 p-4 rounded-lg shadow-md">
      <h2 className="summary-title">Activities and Authors</h2>
      <div className="summary-data">
        <p>Total Activities: <span className="activity-count">{totalActivities}</span></p>
        <p>Total Authors: <span className="author-count">{totalAuthors}</span></p>
      </div>
    </div>
  );
};

export default Summary;
