import React, { useEffect, useState } from "react";

import Button from "./../Button/Button";
import Title from "../Title/Title";

// game attack array
const choices = ["Root Magic", "Flame Magic", "Wave Magic"];

const BossGame = () => {
  // set initial states
  const [userAttack, setUserAttack] = useState("");
  const [demonAttack, setDemonAttack] = useState("");
  const [score, setScore] = useState(0);

  // function determines Demon Attack choice
  const play = () => {
    if (!userAttack) {
      return;
    } else {
      const demonAttackIndex = Math.floor(Math.random() * choices.length);
      setDemonAttack(choices[demonAttackIndex]);
      console.log(demonAttack);
      console.log(userAttack);
      result();
    }
  };

  useEffect(() => {
    play();
  }, [userAttack]);

  useEffect(() => {
    result();
  }, [demonAttack]);

  // function determines game mechanic, changes state based on results
  const result = () => {
    let fightScore = score;
    if (demonAttack === userAttack) {
      setScore(fightScore);
      console.log("Tie");
    } else if (
      (demonAttack === "Root Magic" && userAttack === "Wave Magic") ||
      (demonAttack === "Flame Magic" && userAttack === "Root Magic") ||
      (demonAttack === "Wave Magic" && userAttack === "Flame Magic")
    ) {
      console.log("Fail");
      setScore(0);
    } else {
      setScore(fightScore + 1);
      console.log("Win");
    }
    console.log(fightScore);
  };

  // when user score = 3 navigate to ending page for story conclusion
  const handleEnding = () => {
    window.location = "/ending";
  };

  return (
    <>
      {/* when user score = 3 run handleEnding function */}
      <section className="box mx-4 my-2">
        {score === 2 ? (
          handleEnding()
        ) : (
          <>
            <figure className="columns is-centered is-mobile  ">
              <img
                src={require("./../../assets/images/sprites/Demonlord.png")}
                alt="an 8-bit rendering of a red horned demon"
                className="column is-one-third-mobile is-one-fifth-tablet is-one-fifth-desktop"
              />
            </figure>
            <div className="columns m-3 is-centered">
              {/* user's attack choices sets userState as that attack */}
              <div className="column is-3">
                <Button onClick={() => setUserAttack("Root Magic")}>Use Root Magic </Button>
              </div>
              <div className="column is-3">
                <Button onClick={() => setUserAttack("Flame Magic")}>Use Flame Magic</Button>
              </div>
              <div className="column is-3">
                <Button onClick={() => setUserAttack("Wave Magic")}>Use Wave Magic</Button>
              </div>
            </div>
            <div className="m-3 is-3">
              {/* Attack button calls Play function */}
              {/* <Button className="button b-rose c-white" onClick={play}>
                Attack the Demon!
              </Button> */}
            </div>
            <div className="box b-pink">
              <p className="is-size-4-desktop is-size-4-tablet is-size-6-mobile">
                You're attacking with: <span className="has-text-weight-bold">{userAttack}</span>
              </p>
              <p className="is-size-4-desktop is-size-4-tablet is-size-6-mobile">
                Demon Relphax is attacking with: <span className="has-text-weight-bold">{demonAttack}</span>
              </p>
              <div className="box m-3">
                <p className="is-size-4-desktop is-size-6-mobile">
                  Your win streak is: <span className=" has-text-weight-bold">{score} times</span>!
                </p>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default BossGame;
