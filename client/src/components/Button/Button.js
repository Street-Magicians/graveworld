import PropTypes from "prop-types";

const Button = ({ text }) => {
  return (
    <button style={buttonStyle} className="button has-text-weight-semibold" href="">
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Click Me",
};

Button.ProTypes = {
  text: PropTypes.string.isRequired,
};

// CSS Syling
const buttonStyle = {
  backgroundColor: "#247b7b",
  color: "#bfc0c0",
};

export default Button;
