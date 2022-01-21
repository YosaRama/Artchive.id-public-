// Libs
import { Col, Row } from "antd";

// Components
import PageContainerBox from "themes/components/container/box-container";
import PageArtistCard from "themes/components/libs/page-artist-card";
import PageArtworkFrame from "themes/components/libs/page-artwork-frame";
import PageDividerButton from "themes/components/libs/page-divider-button";
import PageBanner from "themes/components/libs/page-banner";
import PageHomepageSearchBox from "themes/components/libs/page-homepage-search-box";
import PageTitle from "themes/components/libs/page-title";

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
        <section className={s.section}>
          <PageTitle />
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
        </section>

        <section className={s.section}>
          <PageDividerButton>SEE MORE</PageDividerButton>
        </section>

        <section className={s.section}>
          <PageTitle />
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
        </section>

        <section className={s.section}>
          <PageDividerButton>SEE MORE</PageDividerButton>
        </section>
      </PageContainerBox>
    </>
  );
}

export default Homepage;
