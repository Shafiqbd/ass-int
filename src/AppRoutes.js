import React from "react";
import { Navigate, useNavigate } from "react-router";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Loader from "./components/Loader";
import AllMail from "./pages/AllMail";
import DetailsPage from "./pages/DetailsPage";
import Draft from "./pages/Draft";
import Inbox from "./pages/Inbox";
import Spam from "./pages/Spam";
import Starred from "./pages/Starred";
import Trash from "./pages/Trash";

const AppRoutes = () => {
  const navigate = useNavigate();
  const inboxProfileData = {
    name: "Shafiqul Islam",
    designation: "Web Developer",
    address: "Narail",
    email: "<shafiq@gmail.com>",
    subject: "Are you interested to join us as a ReactJS Developer?",
    body: "I beg most respectfully to state that I am a regular student of 9th semester of your university. Due to family financial problems, the fall 2021 and spring 2022 semester fees could not be paid on time along with the delay penalty. Fall 2021 delay penalty(1000tk) and Spring 2022 delay penalty(2000tk). Now I have paid all of my due fees without late fines (3000tk). Last semester I applied but did not get considered. In this case, reduce my late fine and participate in the final of spring 2022 with no late fine. Therefore, I sincerely request you to grant me a waiver of delay fee considering my family in this Corona pandemic.",
  };
  const inboxFromData = {
    from: "shafiq@gmail.com",
    to: "shafiq52000@gmail.com",
    date: "Mar 14, 2022, 9:14 PM",
    subject: "Are you interested to join us as a ReactJS Developer?",
    mailby: "gmail.com",
  };

  const starredProfileData = {
    name: "Mahfuz Ahmed",
    designation: "Software Engineer",
    address: "Dhaka",
    email: "<mahfuz@gmail.com>",
    body: "I beg most respectfully to state that I am a regular student of 9th semester of your university.",
  };
  const starredFromData = {
    from: "shafiq@gmail.com",
    to: "mahfuz@gmail.com",
    date: "April 14, 2022, 9:14 PM",
    subject: "Apply late panelty",
    mailby: "gmail.com",
  };

  const draftProfileData = {
    name: "Yeasin Ahmed",
    designation: "Aps Engineer",
    address: "Jessore",
    email: "<yeasin@gmail.com>",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
  };
  const draftFromData = {
    from: "shafiq@gmail.com",
    to: "yeasin@gmail.com",
    date: "April 20, 2022, 9:14 PM",
    subject: "Lorem Ipsum is simply dummy text of the printing",
    mailby: "gmail.com",
  };

  const allMailProfileData = {
    name: "Hridoy Ahmed",
    designation: "Data Engineer",
    address: "Jessore",
    email: "<hridoy@gmail.com>",
    body: "typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  };
  const allMail = {
    from: "shafiq@gmail.com",
    to: "hridoy@gmail.com",
    date: "May 20, 2022, 9:14 PM",
    subject: "Lorem Ipsum is simply dummy text of the printing",
    mailby: "gmail.com",
  };

  const spamProfileData = {
    name: "Iktear Ahmed",
    designation: "Aps Engineer",
    address: "Khulna",
    email: "<iktear@gmail.com>",
    body: "typesetting, passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  };
  const spam = {
    from: "shafiq@gmail.com",
    to: "iktear@gmail.com",
    date: "June 20, 2022, 9:14 PM",
    subject: "Lorem Ipsum is simply dummy text of the printing",
    mailby: "gmail.com",
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/inbox" replace />} />

      <Route element={<Layout /> ? <Layout /> : <Loader />}>
        <Route path="/inbox" element={<Inbox />}>
          <Route
            path=":id"
            element={<DetailsPage inboxProfileData={inboxProfileData} inboxFromData={inboxFromData} />}
          />
        </Route>
        <Route path="/starred" element={<Starred />}>
          <Route
            path=":id"
            element={<DetailsPage inboxProfileData={starredProfileData} inboxFromData={starredFromData} />}
          />
        </Route>
        <Route path="/draft" element={<Draft />}>
          <Route
            path=":id"
            element={<DetailsPage inboxProfileData={draftProfileData} inboxFromData={draftFromData} />}
          />
        </Route>
        <Route path="/all-mail" element={<AllMail />}>
          <Route path=":id" element={<DetailsPage inboxProfileData={allMailProfileData} inboxFromData={allMail} />} />
        </Route>
        <Route path="/spam" element={<Spam />}>
          <Route path=":id" element={<DetailsPage inboxProfileData={spamProfileData} inboxFromData={spam} />} />
        </Route>
        <Route path="/trash" element={<Trash />}>
          <Route
            path=":id"
            element={<DetailsPage inboxProfileData={inboxProfileData} inboxFromData={inboxFromData} />}
          />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
