// Libs
import { Row, Col } from "antd";
import ThemesProfileNavbar from "themes/components/libs/profile-navbar";
import ThemesContainerMain from "../main";

// Styles
import s from "./index.module.scss";

function ThemesContainerProfile(props) {
  const { children } = props;
  return (
    <>
      <Row className={s.container}>
        <Col span={1} className={s.mobileHidden}>
          <ThemesProfileNavbar />
        </Col>
        <Col xl={{ span: 23 }} xs={{ span: 24 }}>
          <ThemesContainerMain sectionclass={s.contentSection}>{children}</ThemesContainerMain>
        </Col>
      </Row>
    </>
  );
}

export default ThemesContainerProfile;
