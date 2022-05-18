import PropTypes from "prop-types";
// character icon to navigate back to profile page
// displays icons of spirit tokens earned
const HeroBtn = ({ link }) => {
  return (
    <>
      <a href={link} className="">
        <img src={require("./../../assets/images/sprites/char1.gif")} alt="an 8-bit rendering of a fantasy person" className="w-10 mqPh-w15" />
      </a>
      <p className="c-pink">Stamina: -/35</p>
    </>
  );
};

export default HeroBtn;
