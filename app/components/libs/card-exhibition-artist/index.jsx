/* eslint-disable jsx-a11y/alt-text */

// Libs
import propTypes from "prop-types";
import { Card, Col, Image, Row } from "antd";

function AppCardExhibitionArtist(props) {
  const { name, city, profile } = props;
  return (
    <>
      <Card bodyStyle={{ padding: 0 }}>
        <Row gutter={16} align="middle">
          <Col span={4}>
            <Image
              src={
                profile
                  ? `${process.env.NEXT_PUBLIC_S3_URL}/${profile}`
                  : "/images/profile-default.png"
              }
              height={80}
              width={"100%"}
              style={{ objectFit: "contain", padding: "5px 0px 5px 10px" }}
            />
          </Col>
          <Col span={20}>
            <h1>{name && name}</h1>
            <p>{city && city}</p>
          </Col>
        </Row>
      </Card>
    </>
  );
}

AppCardExhibitionArtist.propTypes = {
  name: propTypes.string,
  city: propTypes.string,
  profile: propTypes.string,
};

export default AppCardExhibitionArtist;
