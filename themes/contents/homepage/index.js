// Libs
import { Col, Row } from "antd";

// Components
import PageContainerBox from "themes/components/container/box-container";
import PageArtistCard from "themes/components/libs/page-artist-card";
import PageArtworkFrame from "themes/components/libs/page-artwork-frame";
import PageDividerButton from "themes/components/libs/page-divider-button";
import PageBanner from "themes/components/libs/page-banner";
import PageHomepageSearchBox from "themes/components/libs/page-homepage-search-box";

// Styles
import s from "./index.module.scss";

function Homepage() {
  return (
    <>
      <PageBanner>
        <div className={s.searchBox}>
          <PageHomepageSearchBox />
        </div>
      </PageBanner>

      <PageContainerBox>
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
    </>
  );
}

export default Homepage;
