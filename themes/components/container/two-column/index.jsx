// Libs
import propTypes from "prop-types";
import Image from "next/image";
import { Card, Col, Row } from "antd";

// Styles
import s from "./index.module.scss";

function ThemesContainerTwoColumns(props) {
  const { imgSrc, children } = props;
  return (
    <section>
      <Row>
        <Col lg={{ span: 12 }} xs={{ span: 24 }} className={s.bannerContainer}>
          <Image
            src={imgSrc ? imgSrc : "/images/artwork-1.jpg"}
            layout="fill"
            alt=""
            objectFit="cover"
          />
        </Col>
        <Col lg={{ span: 12 }} xs={{ span: 24 }} className={s.contentContainer}>
          <Card className="simplePageContainer-card">{children}</Card>
        </Col>
      </Row>
    </section>
  );
}

ThemesContainerTwoColumns.propTypes = {
  imgSrc: propTypes.string,
  children: propTypes.node,
};

export default ThemesContainerTwoColumns;
