import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { deauthenticate, reauthenticate } from "../../redux/actions/authActions";

// Layout Components
import Background from "./background";
import TopNavBar from "./topnavbar";
import Sidebar from "./sidebar";


const Layout = ({ children, isAuthenticated }) => {
  const dispatch = useDispatch();
  const [showSideBar, setShowSideBar] = useState(true);
  const handleClick = () => {
    debugger
    setShowSideBar(!showSideBar);
  }
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(reauthenticate(isAuthenticated));
    }
  }, []);
  return (
    <>
      <div>
        <Background>
          <TopNavBar showSideBar={ handleClick }></TopNavBar>
          <Sidebar display={showSideBar}></Sidebar>
          <div className="pages">{children}</div>
        </Background>
      </div>
    </>
  );
};

export default Layout;
