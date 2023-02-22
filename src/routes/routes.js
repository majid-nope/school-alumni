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
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const Router = () => {
  const user = useSelector((state) => state);
  const [log, setLog] = useState();
  console.log(user, "ff");

  useEffect(() => {
    if (user.authReducer.user) {
      setLog(true);
    }else{
      setLog(false)
    }
  }, [user.authReducer.user]);
  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: log ? <Home /> : <Navigate to={"/login"} />,
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
        element: log ? (
          <Navigate to={"/directory"} />
        ) : (
          <Login />
        ),
      },
    ],
    { basename: "/" }
  );
  return routes;
};

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
