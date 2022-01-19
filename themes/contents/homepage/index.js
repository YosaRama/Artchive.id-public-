// Libs
import { Col, Row } from "antd";

// Components
import PageContainerBox from "themes/components/container/box-container/indes";
import PageArtistCard from "themes/components/libs/page-artist-card";
import PageArtworkFrame from "themes/components/libs/page-artwork-frame";
import PageDividerButton from "themes/components/libs/page-divider-button";

function Homepage() {
  return (
    <PageContainerBox>
      <h1>This is Homepage</h1>

      <Row gutter={[16, 0]}>
        <Col span={6}>
          <PageArtworkFrame />
        </Col>
        <Col span={6}>
          <PageArtworkFrame />
        </Col>
        <Col span={6}>
          <PageArtworkFrame />
        </Col>
        <Col span={6}>
          <PageArtworkFrame />
        </Col>
      </Row>

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

      <PageDividerButton>SEE MORE</PageDividerButton>
    </PageContainerBox>
  );
}

export default Homepage;
