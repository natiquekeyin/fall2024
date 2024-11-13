import Button from "./Button";
import { FaCheckDouble } from "react-icons/fa";

const Header = ({ title, onAdd, showAdd }) => {
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
      <Button
        text={showAdd ? "Close" : "Add"}
        color={showAdd ? "red" : "green"}
        click={onAdd}
        showAdd={showAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
