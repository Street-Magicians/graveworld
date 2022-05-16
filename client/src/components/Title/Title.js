import PropTypes from "prop-types";

// Basic Title Card
const Title = ({ title, text1, text2 }) => {
  return (
    <div style={cardStyle} className="b-teal box c-pink m-4 has-text-centered">
      <h3 className="font-reg has-text-weight-semibold is-size-5">{title}</h3>
      <p>{text1}</p>
      <p>{text2}</p>
    </div>
  );
};

Title.defaultProps = {
  title: "i'm a title",
  text1: "fill me with text",
};

Title.ProTypes = {
  title: PropTypes.string.isRequired,
  text1: PropTypes.string.isRequired,
};

// CSS styling
const cardStyle = {
  backgroundColor: "#247b7b",
  color: "#f0e1f4",
};

export default Title;
