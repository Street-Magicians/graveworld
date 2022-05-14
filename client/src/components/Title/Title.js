import PropTypes from "prop-types";

// Basic Title Card
const Title = ({ title, text }) => {
  return (
    <div style={cardStyle} className="box">
      <h3 className="has-text-weight-semibold is-size-4">{title}</h3>
      <p>{text}</p>
    </div>
  );
};

Title.defaultProps = {
  title: "i'm a title",
  text: "fill me with text",
};

Title.ProTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

// CSS styling
const cardStyle = {
  backgroundColor: "#247b7b",
  color: "#f0e1f4",
  margin: "1rem",
  padding: "1rem",
  textAlign: "center",
};

export default Title;
