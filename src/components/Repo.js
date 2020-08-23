import React from 'react';
import './Repo.css';

const Repo = ({ repo }) => {
  return (
    <div className="repo card">
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
      <p className="lead">Forks: {repo.forks_count}</p>
      <p className="lead">Watchers: {repo.watchers_count}</p>
    </div>
  );
};

export default Repo;
