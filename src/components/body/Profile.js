import Avatar from "@mui/material/Avatar";
const Profile = ({ profileData }) => {
  return (
    <div className="profile-area">
      <Avatar className="avarter" alt={profileData.name} src="{img}" />
      <div>
        <h4>{profileData.name}</h4>
        <span>
          {profileData.designation}, {profileData.address}
        </span>
      </div>
    </div>
  );
};

export default Profile;
