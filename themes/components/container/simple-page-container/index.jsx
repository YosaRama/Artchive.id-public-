// Libs
import propTypes from "prop-types";
import Image from "next/image";
import { Card, Col, Row } from "antd";

function SimplePageContainer(props) {
  const { imgSrc, children } = props;
  return (
    <section>
      <Row>
        <Col span={12}>
          <Image
            src={imgSrc ? imgSrc : "/images/artwork-1.jpg"}
            layout="fill"
            alt=""
            objectFit="cover"
          />
        </Col>
        <Col span={12} style={{ padding: "50px", minHeight: "70vh", paddingRight: "0" }}>
          <Card className="simplePageContainer-card">{children}</Card>
        </Col>
      </Row>
    </section>
  );
}

SimplePageContainer.propTypes = {
  imgSrc: propTypes.string,
  children: propTypes.node,
};

export default SimplePageContainer;
