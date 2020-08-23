import React, { Component } from 'react';
import RepoList from './RepoList';
import './ProfilePage.css';

class ProfilePage extends Component {
  componentDidMount() {
    document.querySelector('#backBtn').addEventListener('click', (e) => {
      window.location.reload();
    });
  }

  render() {
    const { userProfile, userRepos } = this.props;

    const hireable = () => {
      if (userProfile.hireable) {
        return (
          <i className="fas fa-check-circle" style={{ color: '#28a745' }}></i>
        );
      }

      return (
        <i className="fas fa-times-circle" style={{ color: '#dc3545' }}></i>
      );
    };

    return (
      <div className="profile-page container">
        <h2>{userProfile.login}</h2>
        <button className="btn btn-secondary" id="backBtn">
          Back to Search
        </button>
        <div className="profile-contents">
          <div className="profile-image">
            <img src={userProfile.avatar_url} alt={userProfile.name} />
            <a href={userProfile.html_url} className="btn btn-secondary">
              View Profile
            </a>
          </div>
          <div className="profile-details">
            <h3>{userProfile.name}</h3>
            <p className="lead">
              <span>Bio:</span> {userProfile.bio}
            </p>
            <p className="lead">
              <span>Location:</span> {userProfile.location}
            </p>
            <p className="lead">
              <span>Website:</span>{' '}
              <a href={`http://${userProfile.blog}`}>{userProfile.blog}</a>
            </p>
            <p className="lead">
              <span>Hireable:</span> {hireable()}
            </p>
            <div className="badges">
              <span className="badge badge-danger">
                Followers: {userProfile.followers}
              </span>
              <span className="badge badge-success">
                Following: {userProfile.following}
              </span>
              <span className="badge badge-light">
                Public Repos: {userProfile.public_repos}
              </span>
              <span className="badge badge-dark">
                Public Gists: {userProfile.public_gists}
              </span>
            </div>
          </div>
        </div>
        <RepoList userRepos={userRepos} />
      </div>
    );
  }
}

export default ProfilePage;
