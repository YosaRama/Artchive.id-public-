// Components
import { Col, Row } from "antd";
import PageContainerBox from "themes/components/container/box-container/indes";
import PageArtistCard from "themes/components/libs/page-artist-card";
import PageDividerButton from "themes/components/libs/page-devider-button";

function Homepage() {
  return (
    <PageContainerBox>
      <h1>This is Homepage</h1>
      <PageDividerButton>SEE MORE</PageDividerButton>
      <Row gutter={[16, 0]}>
        <Col span={6}>
          <PageArtistCard />
        </Col>
        <Col span={6}>
          <PageArtistCard />
        </Col>
        <Col span={6}>
          <PageArtistCard />
        </Col>
        <Col span={6}>
          <PageArtistCard />
        </Col>
      </Row>
    </PageContainerBox>
  );
}

export default Homepage;
