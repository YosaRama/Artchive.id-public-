// Libs
import { Row, Col } from "antd";
import ThemesContainerMain from "../main";

// Styles
import s from "./index.module.scss";

function ThemesContainerProfile(props) {
  const { children } = props;
  return (
    <>
      <Row style={{ height: "100vh" }}>
        <Col span={1} className={s.mobileHidden}>
          {/* //TODO : Change to Profile Navbar */}
          <div style={{ background: "#ffffff", width: "100%", height: "100%" }}></div>
        </Col>
        <Col xl={{ span: 23 }} xs={{ span: 24 }}>
          <ThemesContainerMain sectionclass={s.contentSection}>{children}</ThemesContainerMain>
        </Col>
      </Row>
    </>
  );
}

export default ThemesContainerProfile;
