import React from "react";
//import components
import Char1 from "../assets/images/sprites/char1.png";
import Token from "../assets/images/sprites/placeholder.png";

const Profile = () => {
  return (
    <main className="column center">
      <div className="center m-top m-bottom">
        <img
          className="j-center center miw-100@sml w-med"
          src={Char1}
          alt="Sprite1"
        ></img>
        <h1 className="c-white font-reg">Hero Name</h1>
        <button className="button">Start Your Quest</button>
      </div>
      <h2 className="c-white font-reg m-bottom">Spirit Tokens</h2>
      <div className="d-flex m-bottom">
        <img className="img w-10" src={Token} alt="Sprite1"></img>
        <img className="img w-10" src={Token} alt="Sprite1"></img>
        <img className="img w-10" src={Token} alt="Sprite1"></img>
      </div>
    </main>
  );
};

export default Profile;
