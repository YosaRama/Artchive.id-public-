// Libs
import propTypes from "prop-types";
import { Col, Row, Image, Button } from "antd";
import { useState } from "react";

// Helper
import { useWindowSize } from "app/helpers/useWindowSize";

// Styles
import s from "./index.module.scss";

function ThemesCuratorCard(props) {
  const { imgUrl, curatorName, description } = props;
  const { width } = useWindowSize();
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const descriptionClass = `${s.shortDescription} ${expanded ? s.expanded : ""}`;

  return (
    <>
      {width > 500 ? (
        <Row className={s.container} justify="space-between">
          <Col span={6} className={s.img}>
            <Image src={imgUrl} alt="" preview={false} />
          </Col>
          <Col span={17} className={s.description}>
            <Col>
              <h2>{curatorName}</h2>
            </Col>
            <Col className={descriptionClass}>
              <p>{description}</p>
            </Col>
            {description.length >
              (width > 1024 ? 1000 : width > 768 ? 600 : width > 500 && 250) && (
              <Col className={s.more} onClick={handleExpand}>
                {expanded === true ? <p>Read less</p> : <p>Read more</p>}
              </Col>
            )}
          </Col>
        </Row>
      ) : (
        <Col className={s.container} justify="space-between">
          <Row gutter={[8, 8]} justify="space-between" style={{ marginBottom: 20 }}>
            <Col span={8} className={s.img}>
              <Image src={imgUrl} alt="" preview={false} />
            </Col>
            <Col span={15} className={s.curatorName}>
              <h2>{curatorName}</h2>
            </Col>
          </Row>
          <Col span={24} className={s.description}>
            <Col className={descriptionClass}>
              <p>{description}</p>
            </Col>
            {description.length > 150 && (
              <Col className={s.more} onClick={handleExpand}>
                {expanded === true ? <p>Read less</p> : <p>Read more</p>}
              </Col>
            )}
          </Col>
        </Col>
      )}
    </>
  );
}

ThemesCuratorCard.propTypes = {
  imgUrl: propTypes.string.isRequired,
  curatorName: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};

export default ThemesCuratorCard;
