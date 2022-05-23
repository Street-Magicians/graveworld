import React from "react";
//import components
import Button from "../components/Button/Button";
import Demon from "../assets/images/sprites/Demonlord.png";

const handleSelection = () => {
  localStorage.removeItem("tokens");
  localStorage.removeItem("battleResult");
  window.location = "/profile";
};

const Ending = () => {
  return (
    <main className="mb-5 min-height-100vh center">
      <div className="center m-top m-bottom">
        <img className="j-center center miw-100@sml w-med" src={Demon} alt="Sprite1"></img>
        <h1 className="c-white font-reg">You did it!</h1>
        <h2 className="c-white font-reg">You collected all 3 Spirit Tokens, defeated the demon and brought peace to Graveworld once again, hooray!</h2>
      </div>
      <div className="">
        <Button children="Play Again?" handleSelection={handleSelection} />
      </div>
    </main>
  );
};

export default Ending;
