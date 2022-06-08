import React from 'react'
import flexBoxStyles from "./flexBox.module.css";
import Card from './card'

export default function flexBox() {
  return (
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
  );
}
