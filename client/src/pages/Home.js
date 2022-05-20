import React from "react";
//import components
import Logo from "../img/graveworld-logo-real.png";

const Home = () => {
  return (
    <main className="column center">
      <div className="center m-top m-bottom">
        <img
          className="j-center center miw-100@sml w-med"
          src={Logo}
          alt="Graveworld Logo"
        ></img>
      </div>
      <button className="bkg-red c-white font-bold n-border center l-spacing p-3 uppercase zoom">
        Press Start
      </button>
      <div></div>
    </main>
  );
};

export default Home;
