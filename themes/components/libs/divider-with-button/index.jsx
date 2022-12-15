// Libs
import propTypes from "prop-types";
import { Divider } from "antd";

// Components
import ThemesButton from "themes/components/libs/button";

// Styles
import s from "./index.module.scss";

function ThemesDividerWithButton(props) {
  const { children, onClick } = props;
  return (
    <Divider style={{ margin: 0 }} className={s.divider}>
      <ThemesButton type="primary" onClick={onClick}>
        {children}
      </ThemesButton>
    </Divider>
  );
}

ThemesDividerWithButton.propTypes = {
  children: propTypes.node,
  onClick: propTypes.func,
};

export default ThemesDividerWithButton;
