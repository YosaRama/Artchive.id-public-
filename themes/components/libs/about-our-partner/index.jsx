// Libs
import propType from "prop-types";
import { Col, Row, Image } from "antd";

// Styles
import s from "./index.module.scss";

function ThemesAboutOurPartner(props) {
  const { logoPartner } = props;
  return (
    <>
      <input
        type="Image"
        span={24}
        className={s.logoPartner}
        src={logoPartner}
        disabled="disabled"
        alt=""
      />
    </>
  );
}

ThemesAboutOurPartner.propType = {
  logoPartner: propType.string,
};

export default ThemesAboutOurPartner;
