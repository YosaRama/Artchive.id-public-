// Libs
import propType from "prop-types";
import { Col, Image } from "antd";

// Styles
import s from "./index.module.scss";

function ThemesAboutOurPartner(props) {
  const { logoPartner } = props;
  return (
    <Col className={s.partnerContainer}>
      <Image span={24} src={logoPartner} preview={false} alt="" />
    </Col>
  );
}

ThemesAboutOurPartner.propType = {
  logoPartner: propType.string,
};

export default ThemesAboutOurPartner;
