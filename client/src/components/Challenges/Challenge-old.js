// Here's where our trivia minigame happens!
// Generate question
// generate answers
// answer validation
// timeclock?
// success/failure conditional
// if success - "hooray message" and return to Quest page. If failure, "oh no, maybe another time. Retry or Return to Quest page" message
// updateUser stamina (-5 to attempt, -10 if lose)
// save win/lose to local storage
import React from "react";
import Button from "../Button/Button";

const Challenge1 = () => {
  const selection = (value) => {
    // if user clicks correct answer (fire) then hooray!!
    if (value === true) {
      console.log("Spirit 1: You did it, I'm free!");
    } else {
      console.log("Spirit 1: Oh no well thanks for trying anyways. Maybe next time");
    }
  };

  return (
    <section>
      <div>
        <h3 className="box">
          I'm looking for my heart, it's red through and through. It has no mouth, but would swiftly consume you. It fears water but befriends the breeze. If you find it, I will move on with ease!
        </h3>

        <Button text="Fire" handleSelection={() => selection(true)} />
        <Button text="Rubies" handleSelection={() => selection(false)} />
        <Button text="Flamin' Hot Cheetos" handleSelection={() => selection(false)} />
      </div>
    </section>
  );
};

export default Challenge1;
