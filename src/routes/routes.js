import { createBrowserRouter, Navigate } from "react-router-dom";
import Directory from "../components/layouts/Dashboards/Directory/Directory/Directory";
import Home from "../page/Home/Home";
import SignUp from "../page/Register/Register";

//mui icons
import Hubicon from "@mui/icons-material/Hub";
import StadiumIcon from "@mui/icons-material/Stadium";
import GroupIcon from "@mui/icons-material/Group";
import WorkIcon from "@mui/icons-material/Work";
import PowerIcon from "@mui/icons-material/PowerSettingsNew";
import Login from "../page/Login/Login";

export const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
      children: [
        { path: "", element: <Navigate to={"/directory"} /> },
        { path: "directory", element: <Directory /> },
      ],
    },
    {
      path: "/register",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ],
  { basename: "/" }
);

export const sidebarRouter = () => {
  return [
    {
      path: "/directory",
      title: "Directory",
      icon: (
        <>
          <Hubicon />
        </>
      ),
    },
    {
      path: "/membership",
      title: "Membership",
      icon: (
        <>
          <GroupIcon />
        </>
      ),
    },
    {
      path: "/events",
      title: "Events",
      icon: (
        <>
          <StadiumIcon />
        </>
      ),
    },
    {
      path: "/jobs",
      title: "Jobs",
      icon: (
        <>
          <WorkIcon />
        </>
      ),
    },
    {
      path: "/login",
      title: "Logout",
      icon: (
        <>
          <PowerIcon />
        </>
      ),
    },
  ];
};
