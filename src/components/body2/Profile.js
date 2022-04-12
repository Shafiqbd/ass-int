import Avatar from "@mui/material/Avatar";
const Profile = ({ name, designation, address }) => {
  return (
    <div className="profile-area">
      <Avatar className="avarter" alt="Remy Sharp" src="{img}" />
      <div>
        <h4>{name}</h4>
        <span>
          {designation}, {address}
        </span>
      </div>
    </div>
  );
};

export default Profile;
