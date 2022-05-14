import React from "react";
// import Auth from "../utils/auth";
import Title from "../components/Title/Title";
import Challenge1 from "../components/Challenge/Challenge1";
import ChallengeAlt from "../components/Challenge/ChallengeAlt";

// Page as hub for challenge minigames -- riddle quizes!
const Challenge = () => {
  // challenge TODOs here
  //

  return (
    <main>
      {/* Text component with little story about minigame */}
      <Title
        title="Light from within a cavern glows..."
        text1="At first you believe the glow to be evidence of someone else seeking shelter, but as you get nearer you see that this isn't true. The light hovers in mid-air, quivering. Is it...crying? As you approach it speaks, 'Have you come to free me? I was trapped by the demon when he crossed over into this realm. But the longer I stay, the more I forget. I think I was once someone powerful, but I don't remember. If you can help, I'll return the favor!'"
        text2="You need all the help you can get to banish the demon, and if this ally is as powerful as they say it would be worth having their favor. You start exploring the cavern for clues."
      />
      {/* component housing each riddle/trivia story. Will need props to be dynamic */}
      <ChallengeAlt />
    </main>
  );
};

export default Challenge;
