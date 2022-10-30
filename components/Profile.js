import React from "react";
import profile from "url:/img/profileimg.jpg";

function Profile() {
  return (
    <>
      <div className="profile_section">
        <img id="profile__img" src={profile} alt="Profile image" />
        <div className="handles">
          <h3 id="twitter">@officialAigbe</h3>
          <span id="slack">@stilwart</span>
        </div>
      </div>
    </>
  );
}

export default Profile;
