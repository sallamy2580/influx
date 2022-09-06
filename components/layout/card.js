import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { Button, Nav } from "react-bootstrap";

const Card = ({ name, followers, icon }) => {
  debugger;
  console.log("name : ", name);
  console.log("followers : ", followers);
  console.log("image : ", icon);
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  return (
    <>
      <div className="influencer-card">
        <div className="name-area">
          <label className="name">{name}</label>
        </div>
        <div className="personnel-info">
          <div>
            <img src={icon} className="user-picture"></img>
          </div>
          <div className="user-symbol-link">
            <div>
              <label className="personnel-symbol">@influencer</label>
            </div>
            <div className="personnel-social-link">
              <button class="youtube-dot">
                <img
                  src="img/logos_youtube-icon.png"
                  className="social-link-icon"
                ></img>
              </button>
              <button class="dot">
                <img
                  src="img/logos_telegram.png"
                  className="social-link-icon"
                ></img>
              </button>
              <button class="dot">
                <img
                  src="img/logos_twitter.png"
                  className="social-link-icon"
                ></img>
              </button>
            </div>
          </div>
        </div>
        <div className="property">
          <div className="followers">
            <span className="followers-letter">Followers</span>
            <span className="followers-count">22K</span>
          </div>
          <div class="border-line"></div>
          <div className="followers">
            <span className="followers-letter">ER</span>
            <span className="followers-count">Good</span>
          </div>
          <div class="border-line"></div>
          <div className="followers">
            <span className="followers-letter">Price Range</span>
            <span className="followers-count">$1000-5000$</span>
          </div>
          <div className="select">
            <img src="img/select.png" className="select-image"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
