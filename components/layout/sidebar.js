import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { Button, Nav } from "react-bootstrap";

const Sidebar = ({display}) => {
  debugger
  console.log("display : ", display);
  const dispatch = useDispatch();
  useEffect(() => {
  }, []);
  return (
    <>
    {
      display === true && <div className="sidebar-layout" style={{ display: 'block' }}>
      <Nav className="flex-column pt-2">
        <Nav.Item className="activem menu-item-list">
          <Nav.Link href="/discover" className="menu-item-area">
            <img src="/img/ant-design_compass-outlined.png" 
            className="menu-item">
            </img>
            <span className="menu-item-subject">Discover</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="active below-menu-item-list">
          <Nav.Link href="/campaigns" className="menu-item-area">
            <img src="/img/compaign_icon.png" 
            className="menu-item">
            </img>
            <span className="menu-item-subject">Campaigns</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="activem below-menu-item-list">
          <Nav.Link href="/" className="menu-item-area">
            <img src="/img/foundbyinfl_icon.png" 
            className="menu-item">
            </img>
            <span className="menu-item-subject">Get Found By infl.</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="active below-menu-item-list">
          <Nav.Link href="/" className="menu-item-area">
            <img src="/img/profile_icon.png" 
            className="menu-item">
            </img>
            <span className="menu-item-subject">Profile</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="activem below-menu-item-list">
          <Nav.Link href="/" className="menu-item-area">
            <img src="/img/medical-icon_i-billing.png" 
            className="menu-item">
            </img>
            <span className="menu-item-subject">Plan & Billing</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="activem coming-soon-menu">
          <Nav.Link href="/" className="menu-item-area">
            <img src="/img/comingsoon_icon.png" 
            className="coming-menu-item">
            </img>
            <span className="coming-soon-menu-subject">Coming Soon</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="activem booster-menu-engage">
          <Nav.Link href="/" className="menu-item-area">
            <span className="booster-menu-list">Engagement BOOSTER</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="activem booster-menu">
          <Nav.Link href="/" className="menu-item-area">
            <span className="booster-menu-list">Conversion BOOSTER</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="activem booster-menu">
          <Nav.Link href="/" className="menu-item-area">
            <span className="booster-menu-list">Campaign BOOSTER</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="activem menu-item-list">
          <Nav.Link href="/" className="menu-item-area">
            <img src="/img/compaign_icon.png" 
            className="menu-item">
            </img>
            <span className="menu-item-subject">I am an Influencer</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="active below-menu-item-list">
          <Nav.Link href="/" className="menu-item-area">
            <img src="/img/eos-icons_trusted-organization.png" 
            className="menu-item">
            </img>
            <span className="menu-item-subject">Trusted Agencies</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="activem below-menu-item-list">
          <Nav.Link href="/" className="menu-item-area">
            <img src="/img/carbon_settings.png" 
            className="menu-item">
            </img>
            <span className="menu-item-subject">Settings</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="activem below-menu-item-list">
          <Nav.Link href="/" className="menu-item-area">
            <img src="/img/bx_help-circle.png" 
            className="menu-item">
            </img>
            <span className="menu-item-subject">Help Center</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="activem log-out-item-list">
          <Nav.Link href="/" className="menu-item-area">
            <img src="/img/bx_log-out.png" 
            className="log-out-item">
            </img>
            <span className="log-out-subject">Log Out</span>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
    }
    
      
    </>
  );
};

export default Sidebar;
