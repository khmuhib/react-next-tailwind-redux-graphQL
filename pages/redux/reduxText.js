import React from "react";
import Increment from "../../components/Increment.js";
import Decrement from "../../components/Decrement.js";
import { useSelector } from "react-redux";
import stylesReduxText from "./reduxText.module.css";
import Contact from "../../components/Contact.js";
import Header from "../../components/Header.js";

export default function reduxText() {
  const count = useSelector((state) => state.counter.value);
  return (
    <>
      <Header/>
      <div className={stylesReduxText.redux_text_main}>
        <h1>Redux Configuration in Next Js</h1>
        <Increment />
        <h3 className="ml-5 text-xl">{count}</h3>
        <Decrement />

        <Contact />
      </div>
    </>
  );
}
