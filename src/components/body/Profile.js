import Avatar from "@mui/material/Avatar";
const Profile = () => {
  return (
    <div className="profile-area">
      <Avatar className="avarter" alt="Remy Sharp" src="{img}" />
      <div>
        <h4>Md. Shafiqul Islam</h4>
        <span>Software Engineer, Dhaka Branch</span>
      </div>
    </div>
  );
};

export default Profile;
