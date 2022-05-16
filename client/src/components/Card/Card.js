import PropTypes from "prop-types";
// import Button from "../Button/Button";

// Card component contains basic title, text, button to navigate to asociated Challenge page, styling defaults
const Card = ({ title, text }) => {
  return (
    <>
      <h3 className="has-text-weight-semibold">{title}</h3>
      <p>{text}</p>
    </>
  );
};

Card.defaultProps = {
  title: "i'm a title",
  text: "fill me with text",
};

Card.ProTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;
