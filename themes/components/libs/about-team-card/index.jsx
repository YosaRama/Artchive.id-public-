// Libs
import propType from "prop-types";
import { Col, Card, Row, Image } from "antd";
import React from "react";

//Styles
import s from "./index.module.scss";

function ThemesAboutTeamCard(props) {
  const { imageTeam, name, position, description, socialMedia1, socialMedia2 } = props;
  return (
    <>
      <Card className={s.card}>
        <div className={s.imageContainer}>
          <Image
            className={s.imageTeam}
            src={imageTeam}
            preview={{
              maskClassName: s.customizemask,
            }}
            alt=""
          />
        </div>
        <section>
          <Col span={24} className={s.cardContainerDescription}>
            <h1 className={s.name}>{name}</h1>
            <p className={s.position}>{position}</p>
            <p className={s.description}>{description}</p>
          </Col>
          <Col span={24} className={s.socialMediaRow}>
            <Row>
              <input type="image" className={s.socialMedia1} src={socialMedia1} />
              <input type="image" className={s.socialMedia2} src={socialMedia2} />
            </Row>
          </Col>
        </section>
      </Card>
    </>
  );
}

ThemesAboutTeamCard.propType = {
  imageTeam: propType.string,
  name: propType.string,
  position: propType.string,
  description: propType.string,
  socialMedia1: propType.string,
  socialMedia2: propType.string,
  socialMedia1Image: propType.string,
  socialMedia2Image: propType.string,
};

export default ThemesAboutTeamCard;
