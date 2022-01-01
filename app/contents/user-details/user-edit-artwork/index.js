// Libs
import { Col, Row } from "antd";

// Component
import CardArtwork from "app/components/libs/card-artwork";

function UserEditArtwork() {
  return (
    <>
      <Row gutter={[16, 0]}>
        <Col span={6}>
          <CardArtwork />
        </Col>
        <Col span={6}>
          <CardArtwork />
        </Col>
        <Col span={6}>
          <CardArtwork />
        </Col>
        <Col span={6}>
          <CardArtwork />
        </Col>
      </Row>
    </>
  );
}

export default UserEditArtwork;
