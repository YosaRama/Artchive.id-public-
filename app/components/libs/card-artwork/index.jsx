/* eslint-disable @next/next/no-img-element */

// Libs
import propTypes from "prop-types";
import { useRouter } from "next/router";
import { Avatar, Card, Col, Row, Tag, Tooltip } from "antd";
import Image from "next/image";
const { Meta } = Card;

// Style
import s from "./index.module.scss";

function CardArtwork(props) {
  const router = useRouter();
  const { title, size, image, status, featured, id, artistImage, artistName } = props;
  return (
    <>
      <Card
        className={s.card}
        bodyStyle={{ padding: 0 }}
        onClick={() => router.push(`/dashboard/artworks/${id}`)}
      >
        <Col className={s.imageContainer}>
          <Image alt="example" src={image} className={s.image} layout="fill" />
        </Col>
        <Row gutter={[16, 0]} className={s.textContainer}>
          <Col span={6}>
            <Tooltip title={artistName}>
              <Avatar src={artistImage} />
            </Tooltip>
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

CardArtwork.propTypes = {
  title: propTypes.string,
  size: propTypes.string,
  image: propTypes.string,
  status: propTypes.oneOf(["PUBLISH", "SOLD", "DRAFT"]),
  featured: propTypes.bool,
  id: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
  artistImage: propTypes.string,
  artistName: propTypes.string,
};

export default CardArtwork;
