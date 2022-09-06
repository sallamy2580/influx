import React from "react";
import axios from "axios";
import { checkServerSideCookie } from "../redux/actions/authActions";
import Layout from "../components/layout/index";
import jwt from "jwt-decode";
import { wrapper } from "../redux";

const Campaigns = ({ }) => {
  return (
    <Layout title="Campaigns">
      <div>
        <span>Test</span>
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

export default Campaigns;
