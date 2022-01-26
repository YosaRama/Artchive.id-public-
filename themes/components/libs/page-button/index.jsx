// Libs
import propTypes from "prop-types";
import { Button } from "antd";

// Style
import s from "./index.module.scss";

function PageButton(props) {
  const { children, type = "default", onClick } = props;
  return (
    <Button className={s.button + " page-button " + type} onClick={onClick} {...props}>
      {children}
    </Button>
  );
}

PageButton.propTypes = {
  children: propTypes.node,
  type: propTypes.oneOf(["default", "outlined"]),
  onClick: propTypes.func,
};

export default PageButton;
