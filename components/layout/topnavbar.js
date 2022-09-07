import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

const TopNavBar = ({ showSideBar }) => {
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  return (
    <>
      <div className="top-navbar-layout">
        <div className="col-md-4 col-12">
          <div className="hamberger" onClick={showSideBar}>
            <img src="/img/Hamburger menu.png" className="hamburger-icon"></img>
          </div>
          <img src="/img/site_logo_update.png" className="site-logo"></img>
        </div>
        <div className="col-md-8">
          <Button
            className="btn btn-ls-influencers"
            style={{ position: "relative" }}
          >
            <span className="list-influencers" style={{ position: "absolute" }}>
              List your influencers
            </span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default TopNavBar;
