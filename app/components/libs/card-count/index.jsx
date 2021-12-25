/* eslint-disable @next/next/no-img-element */

// Library
import { Card, Col, Row } from "antd";

// Style
import s from "./index.module.scss";

function CardCount(props) {
  const { icon, count, title } = props;
  return (
    <Card className={"dashboard-card-container " + s.card}>
      <Row justify="space-between" gutter={[16, 0]}>
        <Col className={s.image}>{icon}</Col>
        <Col className={s.content}>
          <h3 className={s.count}>{count}</h3>
          <h1 className={s.title}>{title}</h1>
        </Col>
      </Row>
    </Card>
  );
}

export default CardCount;
