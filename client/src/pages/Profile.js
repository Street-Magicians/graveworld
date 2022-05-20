import React, { useEffect, useState } from "react";
//import components

import Token from "../assets/images/sprites/placeholder.png";
const Profile = () => {
  const char1 = require("../assets/images/sprites/char1.png");
  const char2 = require("../assets/images/sprites/char2.png");
  const char3 = require("../assets/images/sprites/char3.png");
  const char4 = require("../assets/images/sprites/char4.png");

  const [avatarImg, setAvatarImg] = useState(
    "../assets/images/sprites/char1.png"
  );

  useEffect(() => {
    const charImg = localStorage.getItem("charAv");
    setAvatarImg(eval(`char${charImg}`));
  });
  return (
    <main className="column center">
      <div className="center m-top m-bottom">
        <img
          className="j-center center miw-100@sml w-med"
          src={avatarImg}
          alt="Sprite1"
        ></img>
        <h1 className="c-white font-reg">Hero Name</h1>
      </div>
      <h2 className="align-center c-white font-reg m-bottom">Spirit Tokens</h2>
      <div className="d-flex m-bottom">
        <img className=" img w-10" src={Token} alt="Sprite1"></img>
        <img className=" img w-10" src={Token} alt="Sprite1"></img>
        <img className=" img w-10" src={Token} alt="Sprite1"></img>
      </div>
    </main>
  );
};

export default Profile;
