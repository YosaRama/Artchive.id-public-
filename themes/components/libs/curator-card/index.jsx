// Libs
import propTypes from "prop-types";
import { Col, Row, Image } from "antd";
import { useState } from "react";

// Styles
import s from "./index.module.scss";

function ThemesCuratorCard(props) {
  const { imgUrl, curatorName, description } = props;

  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const descriptionClass = `${s.shortDescription} ${expanded ? s.expanded : ""}`;
  return (
    <>
      <Row className={s.container} justify="space-between">
        <Col span={6} className={s.img}>
          <Image src={imgUrl} alt="" preview={false} />
        </Col>
        <Col span={17} className={s.description}>
          <Col>
            <h2>{curatorName}</h2>
          </Col>
          <Col className={descriptionClass} onClick={handleExpand}>
            <p>{description}</p>
          </Col>
          <Col className={s.more} onClick={handleExpand}>
            {expanded ? <p>Read less</p> : <p>Read more</p>}
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
