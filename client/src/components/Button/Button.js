import PropTypes from "prop-types";

const Button = ({ text, handleSelection, link }) => {
  return (
    <a onClick={handleSelection} className="button b-teal c-pink f-1 has-text-weight-semibold m-2" href={link}>
      {text}
    </a>
  );
};

Button.defaultProps = {
  text: "Click Me",
};

Button.ProTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
