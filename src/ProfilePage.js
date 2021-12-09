import React from 'react';
import './ProfilePage.css';
import ProfileCard from './ProfileCard';
import { ProfileData } from './ProfileData';
class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: ProfileData,
      id: '1',
    };

    this.setProfile = (id) => {
      this.setState({
        id: id,
      });
    };
  }

  render() {
    const { profiles } = this.state;
    const imgsrc = profiles.filter((profile) => profile.id === this.state.id);

    return (
      <div>
        <div className="profile_wrap">
          <div>
            <img src={imgsrc[0].imag} className="profile" />
          </div>
          <h2 className="hoverContent">
            <ProfileCard getImageId={this.setProfile} />
          </h2>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
