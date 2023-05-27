// Libs
import propTypes from "prop-types";
import { Col, Row, Image } from "antd";

// Styles
import s from "./index.module.scss";

function ThemesCuratorCard(props) {
  const { imgUrl, curatorName, description } = props;
  return (
    <>
      <Row className={s.container}>
        <Col span={6} className={s.img}>
          <Image src={imgUrl} alt="" preview={false} />
        </Col>
        <Col span={17} className={s.description}>
          <Col>
            <h2>{curatorName}</h2>
          </Col>
          <Col className={s.shortDescription}>
            <p>{description}</p>
          </Col>
          <Col className={s.more}>
            <p>Read more</p>
          </Col>
        </Col>
      </Row>
    </>
  );
}

ThemesCuratorCard.propTypes = {
  imgUrl: propTypes.string.isRequired,
  curatorName: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};

export default ThemesCuratorCard;
