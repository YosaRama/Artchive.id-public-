// Libs
import propType from "prop-types";
import { Col, Card, Row, Image } from "antd";
import React from "react";
import { LinkedinOutlined, MailOutlined } from "@ant-design/icons";

//Styles
import s from "./index.module.scss";

function ThemesAboutTeamCard(props) {
  const { imageTeam, name, position, description } = props;
  return (
    <>
      <Card className={s.card}>
        <Col className={s.imageContainer}>
          <Image
            className={s.imageTeam}
            src={imageTeam}
            preview={{
              maskClassName: s.customizemask,
            }}
            alt=""
          />
        </Col>

        <Col span={24} className={s.cardContainerDescription}>
          <h1 className={s.name}>{name}</h1>
          <p className={s.position}>{position}</p>
          <p className={s.description}>{description}</p>
        </Col>
        <Col span={24}>
          <Row gutter={[50, 10]} className={s.socialMediaContainer}>
            <LinkedinOutlined className={s.socialIcon} />
            <MailOutlined className={s.socialIcon} />
          </Row>
        </Col>
      </Card>
    </>
  );
}

ThemesAboutTeamCard.propType = {
  imageTeam: propType.string,
  name: propType.string,
  position: propType.string,
  description: propType.string,
};

export default ThemesAboutTeamCard;
