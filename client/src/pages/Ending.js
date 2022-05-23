import React from "react";
import Button from "../components/Button/Button";
//import components
import Demon from "../assets/images/sprites/Demonlord.png";
import Header from "../components/Header";

function clearTokens() {
  window.localStorage.removeItem("tokens");
  document.location = "/profile";
}

const Ending = () => {
  return (
    <main className="mb-5 min-height-100vh center">
      <Header></Header>
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
        <button
          onClick={() => clearTokens()}
          className="button b-teal c-pink f-1 has-text-weight-semibold m-2"
          children="Play Again?"
        />
      </div>
    </main>
  );
};

export default Ending;
