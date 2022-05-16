import React from "react";
// import Auth from "../utils/auth";
import Title from "../components/Title/Title";
import DesertRuin from "../components/Challenges/DesertRuin";

// Page as hub for challenge minigames -- riddle quizes!
const Challenge = () => {
  // challenge TODOs here
  //

  return (
    <main>
      {/* Title component sets the scene for the story */}
      <Title
        title="The Desert Ruin"
        text1="You enter the desert ruin to escape the harsh sunlight. You see a dim light further inside - another traveller, perhaps? As you approach a clearing, you discover it’s not a person at all - it’s a spirit! The light hovers in midair, and speaks, 'I can’t remember the last time I had visitors; I’ve been alone so long I’ve forgotten who I am. Help me remember, and I’ll return the favor.'"
        text2="You need all the help you can get to banish the demon, and if this ally is as powerful as they say it would be worth having their favor. You start exploring the cavern for clues."
      />
      <DesertRuin />
    </main>
  );
};

export default Challenge;
