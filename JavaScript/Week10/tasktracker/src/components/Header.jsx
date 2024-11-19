import Button from "./Button";
import { FaCheckDouble } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  // const onClick = (e) => {
  //   console.log("Click");
  //   console.log(e);
  // };
  return (
    <header className="header">
      <h1>
        <FaCheckDouble style={{ color: "green" }} />
        {title}
      </h1>
      {location.pathname === "/about" && (
        <Button
          text={showAdd ? "Close" : "Add"}
          color={showAdd ? "red" : "green"}
          click={onAdd}
          showAdd={showAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
