import React from "react";
// import Auth from "../utils/auth";
import "../assets/questPage.css";
import Card from "../components/Card/Card";
import Title from "../components/Title/Title";

// Quest page is hub for how User navigates to 'Spirit Challenges'
const Quest = () => {
  // page loads  only if user is logged in, otherwise redirect to login/signup
  // handleDisplayAvatar (to retrieve and display player avatar as 'return to profile' icon)
  // handleDisplayTokens (to retrieve and display user's current spirit token images)
  // handleDemonChallenge (if user has 3 SpiritTokens OR 0 stamina display 'demon challenge component)

  return (
    <>
      {/* character icon to navigate back to profile component */}
      {/* displays icons of spirit tokens earned */}
      {/* text promps with lore and instructions  */}
      <section>
        <Title
          title="Hero, we need your help!"
          text="Lore summing up why spirits need help. Release the spirits adn they may give you a magical token of their appreciation. Use the tokens to banish the demon once and for all!"
        />
        <Card title="Spirit Challenge 1" text="summary of story behind this challenge" />
        <Card title="Spirit Challenge 2" text="summary of story behind this challenge" />
        <Card title="Spirit Challenge 3" text="summary of story behind this challenge" />
      </section>
      {/* comonent for SpiritChallenge 1  */}
      {/* component for SpiritChallenge 2  */}
      {/* component for SpiritChallenge 3  */}
      {/* when 3 tokens are earned, display DemonChallenge component */}
      {/* footer component */}
    </>
  );
};

// const styles {

// }
// style other page elements

// create 'spirit challenge' component
// create 'demon challenge' component
// create button component

export default Quest;
