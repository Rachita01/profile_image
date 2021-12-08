import React from 'react';
import './ProfilePage.css';
import ProfileCard from './ProfileCard';
const ProfilePage = () => {
  return (
    <div>
      <div className="profile_wrap">
        <img
          src="https://media.istockphoto.com/vectors/female-avatar-profile-icon-round-woman-face-vector-id897379486"
          className="profile"
        />
        <h2 className="hoverContent">
          <ProfileCard />
        </h2>
      </div>
    </div>
  );
};

export default ProfilePage;
