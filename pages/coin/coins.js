import React from "react";
import Header from "../../components/Header";
import stylesCoins from "./coins.module.css";

function Coins({ data }) {
  return (
    <>
      <Header />

      <div className={stylesCoins.coin_main}>
        <h1>Fatch Data From API</h1>
        

        {data.map((x) => {
          return (
            <p>
              {x.id} = {x.title}
            </p>
          );
        })}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default Coins;
