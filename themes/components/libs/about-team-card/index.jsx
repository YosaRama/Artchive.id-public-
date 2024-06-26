// Libs
import propType from "prop-types";
import { Col, Card, Row, Image } from "antd";
import React from "react";
import { LinkedinOutlined, MailOutlined } from "@ant-design/icons";
import Router from "next/router";

//Styles
import s from "./index.module.scss";

function ThemesAboutTeamCard(props) {
  const { imageTeam, name, position, description, linkedin, email } = props;
  const { router } = Router;
  return (
    <>
      <Card className={s.card}>
        <Col className={s.imageContainer}>
          <Image className={s.imageTeam} src={imageTeam} preview={false} alt="" />
        </Col>

        <Col span={24} className={s.cardContainerDescription}>
          <h1 className={s.name}>{name}</h1>
          <p className={s.position}>{position}</p>
          <p className={s.description}>{description}</p>
        </Col>
        <Col span={24}>
          <Row gutter={[50, 10]} className={s.socialMediaContainer}>
            {linkedin ? (
              <LinkedinOutlined
                className={s.socialIcon}
                onClick={() => router.push(`${linkedin}`)}
              />
            ) : null}
            {email ? (
              <a href={`mailto:${email}`}>
                <MailOutlined className={s.socialIcon} />
              </a>
            ) : null}
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
  linkedin: propType.string,
  email: propType.string,
};

export default ThemesAboutTeamCard;
