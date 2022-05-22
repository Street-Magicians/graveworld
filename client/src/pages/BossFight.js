import React, { useEffect } from "react";
import Header from "../components/Header";
// import Auth from "../utils/auth";
import Title from "../components/Title/Title";
import Overcast from "../img/OVERCAST_AdobeStock_452594013_preview.m4a";
import Tiger from "../img/Tiger-Tracks_AdobeStock_331814277_preview.m4a";

// this page hosts The Desert Ruin story and component
const BossFight = ({ handleMusicChange }) => {
  useEffect(() => {
    handleMusicChange(Overcast);
    return () => {
      handleMusicChange(Tiger);
    };
  }, []);

  return (
    <>
      <Header></Header>
      <main></main>
    </>
  );
};

export default BossFight;
