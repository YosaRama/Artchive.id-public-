/* eslint-disable jsx-a11y/alt-text */

// Libs
import propTypes from "prop-types";
import { Col, Image, Row } from "antd";

function AppCardExhibitionArtist(props) {
  const { name, city, profile } = props;
  return (
    <>
      <Row gutter={16} align="middle">
        <Col span={4}>
          <Image
            src={
              profile
                ? `${process.env.NEXT_PUBLIC_S3_URL}/${profile}`
                : "/images/profile-default.png"
            }
            width={"100%"}
            style={{ objectFit: "contain" }}
          />
        </Col>
        <Col span={20}>
          <h1 style={{ marginBottom: 0 }}>{name && name}</h1>
          <p style={{ marginBottom: 0 }}>{city && city}</p>
        </Col>
      </Row>
    </>
  );
}

AppCardExhibitionArtist.propTypes = {
  name: propTypes.string,
  city: propTypes.string,
  profile: propTypes.string,
};

export default AppCardExhibitionArtist;
