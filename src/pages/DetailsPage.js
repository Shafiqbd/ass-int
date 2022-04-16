import Avatar from "@mui/material/Avatar";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import MailFrom from "../components/MailFrom";
import "../styles/home.css";
const DetailsPage = ({ profileData }) => {
  // const profileData = {
  //   name: "Shafiqul Islam",
  //   designation: "Web Developer",
  //   address: "Narail",
  // };
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
  `;
  const { id } = useParams();
  return (
    <DetailsArea>
      <div className="body-wrapper">
        <h2>Are you interested to join us as a ReactJS Developer?</h2>
        <div className="profile-area">
          <Avatar className="avarter" alt={profileData.name} src="{img}" />
          <div className="profile-wrap">
            <h4>{profileData.name}</h4> &nbsp;
            <span>{profileData.email}</span>
          </div>
        </div>
        <p className="from-area">
          to Raju <MailFrom className="icon" />
        </p>
        <pre>
          Dear Sir, I beg most respectfully to state that I am a regular student of 9th semester of your university. Due
          to family financial problems, the fall 2021 and spring 2022 semester fees could not be paid on time along with
          the delay penalty. Fall 2021 delay penalty(1000tk) and Spring 2022 delay penalty(2000tk). Now I have paid all
          of my due fees without late fines (3000tk). Last semester I applied but did not get considered. In this case,
          reduce my late fine and participate in the final of spring 2022 with no late fine. Therefore, I sincerely
          request you to grant me a waiver of delay fee considering my family in this Corona pandemic. Best Regards, Md.
          Shafiqul Islam Department: ECSE Semester: 9 Id: 21190201181 Sec: B
        </pre>
      </div>
    </DetailsArea>
  );
};

export default DetailsPage;
