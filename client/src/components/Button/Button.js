import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Button = ({ children, handleSelection, link, className }) => {
  return link ? (
    <Link to={link}>
      <button type="button" className={className ? className : "button b-teal c-pink f-1 has-text-weight-semibold m-2"}>
        {children}
      </button>
    </Link>
  ) : (
    <button type="button" onClick={handleSelection} className={className ? className : "button b-teal c-white f-1 has-text-weight-semibold m-2"}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  children: "Click Me",
};

export default Button;
