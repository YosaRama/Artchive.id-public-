/* eslint-disable jsx-a11y/alt-text */

// Libs
import propTypes from "prop-types";
import { Col, Image, Row } from "antd";

// Styles
import s from "./index.module.scss";

function ThemesThumbnailCard(props) {
  const { title, subtitle, profile } = props;
  return (
    <>
      <Row gutter={32} align="middle">
        <Col sm={{ span: 6 }} xs={{ span: 10 }}>
          <Image
            src={
              profile
                ? `${process.env.NEXT_PUBLIC_S3_URL}/${profile}`
                : "/images/default-images.jpg"
            }
            className={s.image}
          />
        </Col>
        <Col sm={{ spang: 18 }} xs={{ span: 14 }}>
          <h1 style={{ marginBottom: 0 }} className={s.title}>
            {title && title}
          </h1>
          <p style={{ marginBottom: 0 }} className={s.subtitle}>
            {subtitle && subtitle}
          </p>
        </Col>
      </Row>
    </>
  );
}

ThemesThumbnailCard.propTypes = {
  title: propTypes.string,
  subtitle: propTypes.string,
  profile: propTypes.string,
};

export default ThemesThumbnailCard;
