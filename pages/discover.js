import React from "react";
import axios from "axios";
import { checkServerSideCookie } from "../redux/actions/authActions";
import Layout from "../components/layout/index";
import jwt from "jwt-decode";
import { wrapper } from "../redux";
import Card from "../components/layout/card";

const Discover = ({}) => {
  return (
    <Layout title="discover">
      <div className="discover-layout">
        <span className="title">
          Discover The Biggest List Of Over Vetted Crypto Infulencers
        </span>
        <div className="social-user-info">
          <div className="col-md-3 social-link"></div>
          <div className="col-md-8 user-info"></div>
        </div>
        <div className="social-user-info-merged"></div>
        <div class="hr-theme-slash-2">
          <div class="hr-line"></div>
          <div class="hr-icon">
            <img src="/img/Mask group.png"></img>
          </div>
          <div class="hr-line"></div>
        </div>
        <div className="row sort-filters">
          <div className="col-md-6 row ">
            <div className="col-sm-12 col-lg-6">
              <div class="search">
                <div className="search-input">
                  <span className="sort-subject">Sort</span>
                  <img
                    src="/img/sort_icon.png"
                    className="sort-icon"
                    style={{ float: "right" }}
                  ></img>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6">
              <div class="filter">
                <div className="search-input">
                  <span className="sort-subject">filter</span>
                  <img
                    src="/img/clarity_filter-line.png"
                    className="sort-icon"
                    style={{ float: "right" }}
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="influencers scrollbar scrollbar-primary">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Card name="AAA" followers={123} icon="img/user_1.png" />
            <Card name="BBB" followers={123} icon="img/user_2.png" />
            <Card name="CCC" followers={123} icon="img/user_3.png" />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Card name="DDD" followers={123} icon="img/user_4.png" />
            <Card name="EEE" followers={123} icon="img/user_5.png" />
            <Card name="FFF" followers={123} icon="img/user_6.png" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    checkServerSideCookie(context);
    const token = context.store.getState().authentication.token;
    if (token) {
      const data = jwt(token);
      const user = "test";
      return {
        props: {
          user,
          token,
        },
      };
    }
  }
);

export default Discover;
