import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, body }) => {
  return (
    <div>
      <h1 style={headingStyle}>{title}</h1>
      <p className="foot-container">{body}</p>
      <Button text="Click me" color="blue" />
      <Button text="Stop it" color="red" />
      <Button text="Start" />
      <Button color="green" text="Some" />
    </div>
  );
};

const headingStyle = {
  color: "green",
  backgroundColor: "red",
};

Header.defaultProps = {
  title: "Default",
  body: "Default text here",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
export default Header;
