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
  const profileData = {
    name: "Shafiqul Islam",
    designation: "Web Developer",
    address: "Narail",
    email: "<shafiq@gmail.com>",
  };
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/inbox" replace />} />

      <Route element={<Layout /> ? <Layout /> : <Loader />}>
        <Route path="/inbox" element={<Inbox />}>
          <Route path=":id" element={<DetailsPage profileData={profileData} />} />
        </Route>
        {/* <Route path="iinbox/:id" element={<DetailsPage />} /> */}
        <Route path="/starred" element={<Starred />} />
        <Route path="/draft" element={<Draft />} />
        <Route path="/all-mail" element={<AllMail />} />
        <Route path="/spam" element={<Spam />} />
        <Route path="/trash" element={<Trash />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
