/* eslint-disable @next/next/no-img-element */

// Library
import propTypes from "prop-types";
import { Card, Col, Row } from "antd";

// Style
import s from "./index.module.scss";

function CardCount(props) {
  const { icon, count, title } = props;
  return (
    <Card className={"dashboard-card-container " + s.card}>
      <Row gutter={[16, 0]} style={{ alignItems: "center" }}>
        <Col className={s.image}>{icon}</Col>
        <Col className={s.content}>
          <h3 className={s.count}>{count}</h3>
          <h1 className={s.title}>{title}</h1>
        </Col>
      </Row>
    </Card>
  );
}

CardCount.propTypes = {
  icon: propTypes.element,
  count: propTypes.oneOfType([propTypes.number, propTypes.string]),
  title: propTypes.string,
};

export default CardCount;
