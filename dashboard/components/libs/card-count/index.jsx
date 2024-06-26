/* eslint-disable @next/next/no-img-element */

// Libs
import propTypes from "prop-types";
import { useRouter } from "next/router";
import { Card, Col, Row } from "antd";

// Style
import s from "./index.module.scss";

function AppCardCount(props) {
  const { icon, count, title, link } = props;
  const router = useRouter();
  return (
    <Card className={"dashboard-card-container " + s.card} onClick={() => router.push(link)}>
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

AppCardCount.propTypes = {
  icon: propTypes.element,
  count: propTypes.oneOfType([propTypes.number, propTypes.string]),
  title: propTypes.string,
  link: propTypes.string,
};

export default AppCardCount;
