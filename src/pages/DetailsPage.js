import Avatar from "@mui/material/Avatar";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import MailFrom from "../components/MailFrom";
import "../styles/home.css";

const DetailsPage = ({ inboxFromData, inboxProfileData }) => {
  const { id } = useParams();

  const DetailsArea = styled.div`
    & .profile-wrap {
      display: flex;
      aligin-items: center;
      h4 {
        margin: 0;
      }
    }
    & .from-area {
      margin: 0;
      margin-top: 10px;
      display: flex;
      aligin-items: center;
      button {
        margin-left: 0 !important;
        padding: 0 !important;
        min-width: 2px !important;
      }
    }
    & .body {
      line-height: 35px;
    }
  `;
  return (
    <DetailsArea>
      <div className="body-wrapper">
        <h2>
          {id} From {inboxProfileData.name}
        </h2>
        <div className="profile-area">
          <Avatar className="avarter" alt={inboxProfileData.name} src="{img}" />
          <div className="profile-wrap">
            <h4>{inboxProfileData.name}</h4> &nbsp;
            <span>{inboxProfileData.email}</span>
          </div>
        </div>
        <p className="from-area">
          to Raju <MailFrom className="icon" inboxFromData={inboxFromData} />
        </p>
        <p className="body">
          Dear {id}, {inboxProfileData.body}
        </p>
        <p>Best Regards,</p>
        <p>Id: {id}</p>
        <p>Md. Rafiqul Islam</p>
        <p>Department: ECSE </p>
        <p>Semester: 9, Sec: B</p>
      </div>
    </DetailsArea>
  );
};

export default DetailsPage;
