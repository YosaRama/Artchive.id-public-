// Libs
import { Col, Row } from "antd";

// Component
import AppCardArtwork from "app/components/libs/card-artwork";

function UserEditCollection() {
  return (
    <>
      <Row gutter={[16, 0]}>
        <Col span={6}>
          <AppCardArtwork />
        </Col>
        <Col span={6}>
          <AppCardArtwork />
        </Col>
        <Col span={6}>
          <AppCardArtwork />
        </Col>
        <Col span={6}>
          <AppCardArtwork />
        </Col>
      </Row>
    </>
  );
}

export default UserEditCollection;
