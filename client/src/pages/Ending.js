import React from "react";
//import components
import Demon from "../assets/images/sprites/Demonlord.png";

const Ending = () => {
  return (
    <main className="column center">
      <div className="center m-top m-bottom">
        <img
          className="j-center center miw-100@sml w-med"
          src={Demon}
          alt="Sprite1"
        ></img>
        <h1 className="c-white font-reg">You did it!</h1>
        <h2 className="c-white font-reg">
          You collected all 3 Spirit Tokens, defeated the demon and brought
          peace to Graveworld once again!
        </h2>
      </div>
      <div className="">
        <button className="button m-regular">Play Again?</button>
        <button className="button m-regular">Profile</button>
      </div>
    </main>
  );
};

export default Ending;
