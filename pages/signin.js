import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  authenticate,
  checkServerSideCookie,
} from "../redux/actions/authActions";
import Layout from "../components/layout/index";
import { wrapper } from "../redux";
import Router from "next/router";

const Signin = ({ authenticate, token }) => {
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("password");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };
    authenticate(user);
  };

  useEffect(() => {
    if (token) {
      Router.push("/");
    }
  }, []);
  return (
    <Layout title="Sign In" isAuthenticated={token}>
      <h3>Sign In</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            className="input"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Sign In</button>
        </div>
      </form>
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    checkServerSideCookie(context);
    const token = context.store.getState().authentication.token;
    return {
      props: {
        token,
      },
    };
  }
);

export default connect((state) => state, { authenticate })(Signin);
