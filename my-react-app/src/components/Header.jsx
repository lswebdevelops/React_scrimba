import React from "react";
import avatar from "/images/user.png";

export default function Header(props) {
  return (
    <header>
      <img src={avatar} />
      <p>{props.nameOfUser}</p>
    </header>
  );
}
