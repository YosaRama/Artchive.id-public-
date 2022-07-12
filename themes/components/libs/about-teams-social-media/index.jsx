// Libs
import { Col, Row } from "antd";

// Style
import s from "./index.module.scss";

// Icons
import { LinkedinOutlined, MailOutlined } from "@ant-design/icons";

function ThemesAboutSocialMediaTeam() {
  return (
    <>
      <Row gutter={[10, 0]} className={s.socialMediaContainer}>
        <Col>
          <LinkedinOutlined className={s.socialIcon} />
        </Col>
        <Col>
          <MailOutlined className={s.socialIcon} />
        </Col>
      </Row>
    </>
  );
}

ThemesAboutSocialMediaTeam.prototype = {};

export default ThemesAboutSocialMediaTeam;
