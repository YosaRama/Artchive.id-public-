// Libs
import propTypes from "prop-types";
import { Button } from "antd";

// Style
import s from "./index.module.scss";

function PageButton(props) {
  const { children, type = "default", onClick, loading, disabled } = props;
  return (
    <Button
      className={s.button + " page-button " + type}
      onClick={onClick}
      loading={loading}
      disabled={disabled}
      {...props}
    >
      {children}
    </Button>
  );
}

PageButton.propTypes = {
  loading: propTypes.bool,
  children: propTypes.node,
  type: propTypes.oneOf(["default", "outlined"]),
  onClick: propTypes.func,
  disabled: propTypes.bool,
};

export default PageButton;
