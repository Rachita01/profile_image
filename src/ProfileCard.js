import React from 'react';
import './ProfilePage.css';
import './ProfileCard.css';
import { ProfileData } from './ProfileData';
class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: ProfileData,
    };
    this.setProfile = (id) => {
      this.setState({
        id: id,
      });
    };
  }

  render() {
    const { profiles } = this.state;
    const avatar2 = profiles.filter((profile) => profile.id === '2');
    const avatar3 = profiles.filter((profile) => profile.id === '3');
    const avatar4 = profiles.filter((profile) => profile.id === '4');
    const avatar5 = profiles.filter((profile) => profile.id === '5');
    const avatar6 = profiles.filter((profile) => profile.id === '6');
    const avatar7 = profiles.filter((profile) => profile.id === '7');
    return (
      <div className="container">
        <div className="profilecards">
          <img
            className="profile"
            src={avatar2[0].imag}
            onClick={() => {
              this.props.getImageId(avatar2[0].id);
            }}
          />
          <img
            className="profile"
            src={avatar3[0].imag}
            onClick={() => {
              this.props.getImageId(avatar3[0].id);
            }}
          />
          <img
            className="profile"
            src={avatar4[0].imag}
            onClick={() => {
              this.props.getImageId(avatar4[0].id);
            }}
          />
          <img
            className="profile"
            src={avatar5[0].imag}
            onClick={() => {
              this.props.getImageId(avatar5[0].id);
            }}
          />
          <img
            className="profile"
            src={avatar6[0].imag}
            onClick={() => {
              this.props.getImageId(avatar6[0].id);
            }}
          />
          <img
            className="profile"
            src={avatar7[0].imag}
            onClick={() => {
              this.props.getImageId(avatar7[0].id);
            }}
          />
        </div>
      </div>
    );
  }
}

export default ProfileCard;
