import React from "react";
// import Auth from "../utils/auth";
import Title from "../components/Title/Title";

// this page hosts The Desert Ruin story and component
const TheGraveyard = () => {
  // challenge TODOs here
  //

  return (
    <main>
      {/* This section sets the scene for the story */}
      <Title
        title="The Ship Graveyard"
        text1="Your path leads you through a ship graveyard. You begin to explore in search of supplies to help you on your quest. As you step into one of the foresaken ships the ground collapses under you, and you fall into the brig! A ghostly pirate appears before you and says, 'It’s been some time since we’ve had guests, it has. Provide us a wee bit o’ entertainment and perhaps we’ll consider letting yee go. If we like yee enough, maybe we’ll even grant yee a boon'"
        text2="Well, you're stuck in the brig so it's not like you have much choice. Might as well humor this ghost pirate...who knows, maybe you'll win them over!"
      />
    </main>
  );
};

export default TheGraveyard;