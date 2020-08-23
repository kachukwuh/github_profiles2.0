import React from 'react';
import './ProfilePreview.css';

const ProfilePreview = ({ profile, profilePage }) => {
  return (
    <div className="profile-preview card">
      <img src={profile.avatar_url} alt={profile.name} />
      <p>{profile.login}</p>
      <button
        onClick={() => {
          profilePage(profile);
        }}
        className="btn btn-secondary"
      >
        View Profile
      </button>
    </div>
  );
};

export default ProfilePreview;
