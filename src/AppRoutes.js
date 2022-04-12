import React from "react";
import { Route, Routes } from "react-router-dom";
import { default as Body } from "./components/body/Index";
import Layout from "./components/layouts/Layout";
import Loader from "./components/Loader";
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout /> ? <Layout /> : <Loader />}>
        <Route
          path="/"
          element={
            <Body name={"Md. Mahfuz Ahmed"} designation={"Software Engineer"} address={"Dhaka, Mohammadpur"} /> ? (
              <Body name={"Md. Mahfuz Ahmed"} designation={"Software Engineer"} address={"Dhaka, Mohammadpur"} />
            ) : (
              <Loader />
            )
          }
        />
        <Route
          path="/inbox"
          element={
            <Body name={"Md. Rafiqul Ahmed"} designation={"Civil Engineer"} address={"Rangpur, Rajbari"} /> ? (
              <Body name={"Md. Rafiqul Ahmed"} designation={"Civil Engineer"} address={"Rangpur, Rajbari"} />
            ) : (
              <Loader />
            )
          }
        ></Route>
        <Route path="/inbox/9bsdfse321deb4d-3b7d/{:id}" element={<Body />} />

        <Route
          path="/starred"
          element={<Body name={"Md. Shafiqul Islam"} designation={"Web Developer"} address={"Narail, Lohagara"} />}
        />
        <Route
          path="/draft"
          element={<Body name={"Raju Khan"} designation={"Jr. Web Developer"} address={"Narail, Lohagara"} />}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
