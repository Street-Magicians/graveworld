import PropTypes from "prop-types";

const TrophyTag = ({ children, className }) => {
  return (
    <>
      <p className={className ? className : "has-text-weight-bold is-size-2 overlay"}>{children}</p>
    </>
  );
};

TrophyTag.defaultProps = {
  children: "You Won!",
};

export default TrophyTag;
