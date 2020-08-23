import React from 'react';
import ProfilePreview from './ProfilePreview';
import './ProfileList.css';

const ProfileList = ({ profiles, profilePage }) => {
  const renderedList = profiles.map((profile) => {
    return (
      <ProfilePreview
        key={profile.id}
        profile={profile}
        profilePage={profilePage}
      />
    );
  });

  return <div className="profile-list container">{renderedList}</div>;
};

export default ProfileList;
