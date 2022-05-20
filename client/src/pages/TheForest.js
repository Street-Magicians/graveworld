import React from "react";
import Header from "../components/Header";
// import Auth from "../utils/auth";
import Title from "../components/Title/Title";

// this page hosts The Desert Ruin story and component
const TheForest = () => {
  // challenge TODOs here
  //

  return (
    <main>
      <Header></Header>
      {/* This section sets the scene for the story */}
      <Title
        title="The Evernight Forest"
        text1="You pass through an eerie forest where the treecover is so dense it blocks out the sun. As you travel further in you begin to get the sense that something is following you! You turn to confront it, and find a wispy being staring at you. Head cocked it asks, 'I’ve been waiting for someone to pass though. My friends need help, and I can’t do it alone! If you give me your aid, I’ll return the favor!'"
        text2="Might as well help out, it feels good to do good! And if you're lucky you might just show this spirit that you're worthy of a boon"
      />
    </main>
  );
};

export default TheForest;
