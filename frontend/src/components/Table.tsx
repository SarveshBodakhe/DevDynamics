// Table.tsx
import React from 'react';
import './Table.css'; // Import the CSS file
import { AuthorWorklogData } from '../types/data';

interface TableProps {
  data: AuthorWorklogData;
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="table-container mb-4 p-4 rounded-lg shadow-md">
      <h2 className="table-title text-xl font-bold mb-2">Table Content</h2>
      <table className="custom-table w-full">
        <thead>
          <tr>
            <th className="table-header">Author</th>
            {data.activityMeta.map((activity) => (
              <th key={activity.label} className="table-header">{activity.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((author) => (
            <tr key={author.name}>
              <td className="table-cell border px-4 py-2">{author.name}</td>
              {author.totalActivity.map((activity) => (
                <td key={activity.name} className="table-cell border px-4 py-2">{activity.value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
