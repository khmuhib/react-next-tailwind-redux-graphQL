import stylesCard from "./card.module.css";
import cardImage from "./../assets/images/image3.png";
import Image from "next/image";

import React from "react";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default function card({ data }) {
  return (
    <>
      <div className={stylesCard.card_main}>
        <div className={stylesCard.card_top_circle_img}>
          <Image
            src={cardImage}
            alt="Picture of the author"
            layout="fixed"
            objectFit="cover"
          />
        </div>
        <div className={stylesCard.card_top_circle_text}>
          <h3>This is title here</h3>
          <hr />
          <p>
            This is peragraph This is peragraph This is peragraph This is
            peragraph This is peragraph This is peragraph This is peragraph This
            is peragraph This is peragraph.
          </p>
        </div>
        <div className={stylesCard.card_top_circle_button}>
          <a href="#">Click Here</a>
        </div>
      </div>
    </>
  );
}
