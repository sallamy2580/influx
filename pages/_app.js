import React from "react";
import { wrapper } from "../redux";

import '../styles/scss/custom.scss';

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);
