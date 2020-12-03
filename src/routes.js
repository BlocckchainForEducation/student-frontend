import React from "react";
import { Navigate } from "react-router-dom";
import DashboardLayout from "src/layouts/DashboardLayout";
import MainLayout from "src/layouts/MainLayout";
import NotFoundView from "src/shared/NotFoundView";
import SignUpView from "src/views/SignUp";
import SignInView from "src/views/SignIn";
import { getToken } from "./utils/mng-token";
import StudentProfile from "./views/StudentProfile";
import Test from "./Test";
import AccountManagement from "./views/AccountManagement";
import ShareCertificate from "./views/ShareCertificate";

const routes = [
  {
    path: "/nh",
    element: <DashboardLayout />,
    children: [
      { path: "thong-tin-ca-nhan", element: <StudentProfile /> },
      { path: "quan-ly-tai-khoan", element: <AccountManagement /> },
      { path: "chia-se-bang-cap", element: <ShareCertificate /> },
      { path: "*", element: <Navigate to="/404" replace={true} /> },
    ],
  },
  { path: "test", element: <Test /> },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "dang-ki", element: <SignUpView /> },
      { path: "dang-nhap", element: <SignInView /> },
      { path: "404", element: <NotFoundView /> },
      { path: "/", element: <Redirector /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

function Redirector(props) {
  const token = getToken();
  if (!token) {
    return <Navigate to="/dang-ki"></Navigate>;
  } else {
    return <Navigate to="/nh/thong-tin-ca-nhan"></Navigate>;
  }
}

export default routes;
