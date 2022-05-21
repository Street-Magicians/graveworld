import React from "react";
import Button from "../components/Button/Button";
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
        <Button children="Profile" link="/profile" />
        <Button children="Play Again?" link="/quest" />
      </div>
    </main>
  );
};

export default Ending;
