import PropTypes from "prop-types";

// Basic Title Card
const Title = ({ title, text1, text2 }) => {
  return (
    <section style={cardStyle} className="b-teal box c-pink m-4 has-text-centered">
      <h1 className="font-reg has-text-weight-semibold is-size-5">{title}</h1>
      <p className="pt-2">{text1}</p>
      <p className="pt-2">{text2}</p>
    </section>
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
