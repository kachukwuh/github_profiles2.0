import React from 'react';
import Repo from './Repo';

const RepoList = ({ userRepos }) => {
  const renderedList = userRepos.map((repo) => {
    return <Repo key={repo.id} repo={repo} />;
  });

  return <div>{renderedList}</div>;
};

export default RepoList;
