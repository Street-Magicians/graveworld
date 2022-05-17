import React from "react";
// import Auth from "../utils/auth";
import Title from "../components/Title/Title";
import Card from "../components/Card/Card";
import Button from "../components/Button/Button";
import HeroBtn from "../components/HeroBtn/HeroBtn";

// Quest page is hub for how User navigates to 'Spirit Challenges'
const Quest = () => {
  // page loads  only if user is logged in, otherwise redirect to login/signup
  // handleDisplayAvatar (to retrieve and display player avatar as 'return to profile' icon)
  // handleDisplayTokens (to retrieve and display user's current spirit token images)
  // handleDemonChallenge (if user has 3 SpiritTokens OR 0 stamina display 'demon challenge component)

  return (
    <>
      {/* TODO: MAKE THIS COMPONENT DYNAMIC BASED ON USER AVATAR AND STAMINA!! */}
      <section className="m-4">
        <HeroBtn link="/profile" />
      </section>

      {/* Challenge 1: Desert Ruin */}
      <section>
        <Title
          title="Graveworld needs you, Hero!"
          text1="The demon Relphax has breached into Graveworld and threatens the realm. Only spirit magic can banish him once and for all. Seek aid from the spirits that reside throughout Graveworld then confront the demon!"
        />
        <div className="box b-white c-navy has-text-centered m-4 p-2">
          <Card
            title="The Desert Ruin"
            text="A once-proud castle torn asunder by time offers protection from an approaching storm. Perhaps you’ll find something inside to help you on your journey"
            className="b-taupe c-navy"
          />
          <Button text="Explore the ruin" link="/theruin" />
        </div>
      </section>

      {/* Challenge 2: Ship Graveyard */}
      <section>
        <div className="box b-white c-navy has-text-centered m-4 p-2">
          <Card title="The Ship Graveyard" text="Decaying ships create a land mass that may be worth checking out; perhaps there will be treasure!" className="b-taupe c-navy" />
          <Button text="Explore the graveyard" link="/thegraveyard" />
        </div>
      </section>

      {/* Challenge 3: Evernight Forest */}
      <section>
        <div className="box b-white c-navy has-text-centered m-4 p-2">
          <Card title="The Evernight Forest" text="This forest is rumored to be haunted...ghosts are just friends without bodies, right?" className="b-taupe c-navy" />
          <Button text="Explore the forest" link="/theforest" />
        </div>
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
