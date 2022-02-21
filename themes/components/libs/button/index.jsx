// Libs
import propTypes from "prop-types";
import { Button } from "antd";

// Style
import s from "./index.module.scss";

function ThemesButton(props) {
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

ThemesButton.propTypes = {
  loading: propTypes.bool,
  children: propTypes.node,
  type: propTypes.oneOf(["default", "outlined"]),
  onClick: propTypes.func,
  disabled: propTypes.bool,
};

export default ThemesButton;
