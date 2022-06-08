import React from "react";

function Contact() {
  const menus = ["Home", "About", "Service"];

  return (
    <div>
      <ul>
        {menus.map((menu) => {
          return <li><a href="#">{menus}</a></li>;
        })}
      </ul>
    </div>
  );
}

export default Contact;

// https://api.coinstats.app/public/v1/coins?skip=0