import PropTypes from "prop-types";
import Button from "../Button/Button";

// Card component contains basic title, text, button to navigate to asociated Challenge page, styling defaults
const Card = ({ title, text }) => {
  return (
    <div style={cardStyle} className="box">
      <h3 className="has-text-weight-semibold">{title}</h3>
      <p>{text}</p>
      <Button text="Start Challenge" />
    </div>
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

// CSS styling
const cardStyle = {
  backgroundColor: "#bfc0c0",
  color: "#2d3142",
  margin: "1rem",
  padding: "1rem",
  textAlign: "center",
};

export default Card;
