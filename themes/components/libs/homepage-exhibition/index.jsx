import { Col, Row, Divider } from "antd";
import { RightOutlined } from "@ant-design/icons";

import s from "./index.module.scss";

function ThemesHomepageExhibitionSection() {
  return (
    <>
      <Col className={s.container}>
        <Row gutter={(10, 10)} className={s.row}>
          <Col span={21} className={s.select}>
            <h1 className={s.title}>ART IN JAKARTA!</h1>
            <p className={s.description}>The Latest Art Exhibition in Jakarta!</p>
          </Col>
          <Col span={3} className={s.movePage}>
            <RightOutlined className={s.arrow} />
          </Col>
        </Row>
        <Divider className={s.divider} />
      </Col>
    </>
  );
}

export default ThemesHomepageExhibitionSection;
