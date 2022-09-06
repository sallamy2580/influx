import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";

const Background = ({children}) => {
  const dispatch = useDispatch();

  useEffect(() => {
  }, []);
  return (
    <>
      <div className="background-layout">
        <img src="/img/bg_fragment1.png" className="bg_fragement1"></img>
        <img src="/img/bg_fragment2.png" className="bg_fragement2"></img>
        <img src="/img/bg_fragment3.png" className="bg_fragement3"></img>
        <img src="/img/bg_fragment4.png" className="bg_fragement4"></img>
        <img src="/img/bg_fragment5.png" className="bg_fragement5"></img>
        <img src="/img/bg_fragment6.png" className="bg_fragement6"></img>
        <img src="/img/bg_fragment7.png" className="bg_fragement7"></img>
        <img src="/img/bg_fragment8.png" className="bg_fragement8"></img>
        <div className="has-text-centered">{children}</div>
      </div>
    </>
  );
};
export default Background;
