/* eslint-disable @next/next/no-img-element */

// Libs
import { useRouter } from "next/router";
import { Avatar, Card, Col, Row, Tag } from "antd";
const { Meta } = Card;

// Style
import s from "./index.module.scss";

function CardArtwork(props) {
  const router = useRouter();
  const { title, size, image, status, featured, id } = props;
  return (
    <>
      <Card
        hoverable
        cover={<img alt="example" src={image} className={s.image} />}
        onClick={() => router.push(`/dashboard/artwork/${id}`)}
      >
        <Row gutter={[16, 0]}>
          <Col span={6}>
            <Avatar />
          </Col>
          <Col span={18}>
            <Meta title={title} description={size} />
          </Col>
          <Col className={s.tag} span={24}>
            {featured && <Tag color={"#faad14"}>NEW</Tag>}
            <Tag
              color={
                (status == "PUBLISH" && "#13c2c2") ||
                (status == "SOLD" && "#cf1322") ||
                (status == "DRAFT" && "#73d13d")
              }
            >
              {status}
            </Tag>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default CardArtwork;
