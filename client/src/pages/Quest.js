import React, { useState, useEffect } from "react";
// import Auth from "../utils/auth";
import Title from "../components/Title/Title";
import Card from "../components/Card/Card";
import Button from "../components/Button/Button";
import HeroBtn from "../components/HeroBtn/HeroBtn";

// Quest page is hub for how User navigates to 'Spirit Challenges'
const Quest = () => {
  // handleDemonChallenge (if user has 3 SpiritTokens OR 0 stamina display 'demon challenge component)

  // sets tokenArray to state
  const [tokens, setTokens] = useState([]);
  useEffect(() => {
    // reads/sets token array from local storage
    const tokenArray = JSON.parse(localStorage.getItem("tokens"));
    setTokens(tokenArray);
  }, []);

  return (
    <main>
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
          {/* loopss through token array. If flame token is present, marks challenge as complete */}
          {tokens.map((token) => (
            <div>{token.name === "Flame Token" ? <Button>Quest Complete!</Button> : <Button link="/theruin">Explore the ruin</Button>}</div>
          ))}
        </div>
      </section>

      {/* Challenge 2: Ship Graveyard */}
      <section>
        <div className="box b-white c-navy has-text-centered m-4 p-2">
          <Card title="The Ship Graveyard" text="Decaying ships create a land mass that may be worth checking out; perhaps there will be treasure!" className="b-taupe c-navy" />
          {/* loopss through token array. If wave token is present, marks challenge as complete */}
          {tokens.map((token) => (
            <div>{token.name === "Wave Token" ? <Button>Quest Complete!</Button> : <Button link="/thegraveyard">Explore the graveyard</Button>}</div>
          ))}
        </div>
      </section>

      {/* Challenge 3: Evernight Forest */}
      <section>
        <div className="box b-white c-navy has-text-centered m-4 p-2">
          <Card title="The Evernight Forest" text="This forest is rumored to be haunted...ghosts are just friends without bodies, right?" className="b-taupe c-navy" />
          {/* loopss through token array. If root token is present, marks challenge as complete */}
          {tokens.map((token) => (
            <div>{token.name === "Root Token" ? <Button>Quest Complete!</Button> : <Button link="/theforest">Explore the forest</Button>}</div>
          ))}
        </div>
      </section>

      {/* when 3 tokens are earned, display DemonChallenge component */}
    </main>
  );
};

export default Quest;
