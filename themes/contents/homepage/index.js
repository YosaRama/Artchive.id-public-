// Libs
import propTypes from "prop-types";
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

function Homepage(props) {
  const { artworkData, artistData } = props;
  return (
    <>
      {/* Banner Section */}
      <PageBanner>
        <div className={s.searchBox}>
          <PageHomepageSearchBox />
        </div>
      </PageBanner>
      {/* ============================ */}

      {/* Artwork Section */}
      <PageContainerBox>
        {artworkData && (
          <section className={s.section}>
            <PageTitle />
            <Row gutter={[16, 0]}>
              {artworkData.map((item, index) => (
                <Col span={6} key={index}>
                  <PageArtworkFrame />
                </Col>
              ))}
            </Row>
          </section>
        )}
        {/* ============================ */}

        {/* Divider Section */}
        <section className={s.section}>
          <PageDividerButton>SEE MORE</PageDividerButton>
        </section>
        {/* ============================ */}

        {/* Artist Section */}
        {artistData && (
          <section className={s.section}>
            <PageTitle />
            <Row gutter={[16, 0]}>
              {artistData.map((item, index) => (
                <Col span={6} key={index}>
                  <PageArtistCard />
                </Col>
              ))}
            </Row>
          </section>
        )}
        {/* ============================ */}

        {/* Divider Section */}
        <section className={s.section}>
          <PageDividerButton>SEE MORE</PageDividerButton>
        </section>
        {/* ============================ */}
      </PageContainerBox>
    </>
  );
}

Homepage.propTypes = {
  artworkData: propTypes.array,
  artistData: propTypes.array,
};

export default Homepage;
