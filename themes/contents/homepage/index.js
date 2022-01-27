// Libs
import propTypes from "prop-types";
import { useRouter } from "next/router";
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
  const router = useRouter();
  return (
    <>
      {/* Banner Section */}
      <PageBanner imgSrc="/images/banner-homepage.jpg">
        <div className={s.searchBox}>
          <PageHomepageSearchBox />
        </div>
      </PageBanner>
      {/* ============================ */}

      {/* Artwork Section */}
      <PageContainerBox sectionClass={s.sectionContainer}>
        {artworkData && (
          <section className={s.section}>
            <PageTitle
              title="Artwork"
              subtitle="Original artwork by indonesian artist"
              className={s.pageTitle}
            />
            <Row gutter={[16, 0]}>
              {artworkData.map((item, index) => (
                <Col span={6} key={index}>
                  <PageArtworkFrame
                    artworkTitle={item.title}
                    artworkSize={item.size}
                    imgSrc={item.imgUrl}
                  />
                </Col>
              ))}
            </Row>
          </section>
        )}
        {/* ============================ */}

        {/* Divider Section */}
        <section className={s.divider}>
          <PageDividerButton onClick={() => router.push("/artwork")}>SEE MORE</PageDividerButton>
        </section>
        {/* ============================ */}

        {/* Artist Section */}
        {artistData && (
          <section className={s.section}>
            <PageTitle title="Our New Artist" className={s.pageTitle} />
            <Row gutter={[16, 0]}>
              {artistData.map((item, index) => (
                <Col span={6} key={index}>
                  <PageArtistCard
                    artistName={item.name}
                    artistCity={item.city}
                    avatarSrc={item.avatar}
                    bannerSrc={item.artwork}
                  />
                </Col>
              ))}
            </Row>
          </section>
        )}
        {/* ============================ */}

        {/* Divider Section */}
        <section className={s.divider}>
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
