import React from "react";
import flexBoxStyles from "./flexBox.module.css";
import Card from "./card";
import Header from "../../components/Header";

export default function flexBox() {
  return (
    <>
      <Header/>
      <div className={flexBoxStyles.flex_box_main}>
        <div className={flexBoxStyles.flex_box_title}>
          <h1>
            Play With <span>FlexBox</span>
          </h1>
        </div>
        <div className={flexBoxStyles.flex_components}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}
