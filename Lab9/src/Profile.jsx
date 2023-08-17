import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Profile = () => {

  return (
    <div className="showcase_profile">
      <img className="ava-conan" src="https://phunuvietnam.mediacdn.vn/179072216278405120/2022/11/4/edogawa-conan--166754179290680712885.jpg" alt="Avatar" style={{ width: "100%" }} />
      <div className="showcase_profile-container">
        <h2>John Doe</h2>
        <div className="icon_profile">
        <FontAwesomeIcon icon={faCoffee} style={{margin: 10}}/>
        <FontAwesomeIcon icon={faCoffee} style={{margin: 10}}/>
        <FontAwesomeIcon icon={faCoffee} style={{margin: 10}}/>
        </div>
      </div>
      <div className="contact_info">
          <p>Contacts</p>
          <p>Discussions</p>
        </div>
    </div>
  );
};

export default Profile;