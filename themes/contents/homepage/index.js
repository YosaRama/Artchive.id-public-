// Libs
import propTypes from "prop-types";
import { useRouter } from "next/router";
import { Col, Row } from "antd";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesArtistCard from "themes/components/libs/artist-card";
import ThemesArtworkWithFrame from "themes/components/libs/artwork-with-frame";
import ThemesDividerWithButton from "themes/components/libs/divider-with-button";
import ThemesBanner from "themes/components/libs/banner";
import ThemesHomepageSearchBox from "themes/components/libs/homepage-search-box";
import ThemesHeadline from "themes/components/libs/headline";

// Styles
import s from "./index.module.scss";

function ThemesContentsHomepage(props) {
  const { artworkData, artistData } = props;
  const router = useRouter();
  return (
    <>
      {/* //? ============== Banner Section ============= ?// */}
      <ThemesBanner imgSrc="/images/banner-homepage.jpg">
        <div className={s.searchBox}>
          <ThemesHomepageSearchBox />
        </div>
      </ThemesBanner>
      {/* // * ====================================== * // */}

      {/* //? ============== Artwork Section ============= ?// */}
      <ThemesContainerMain sectionclass={s.sectionContainer}>
        {artworkData && (
          <section className={s.section}>
            <ThemesHeadline
              title="Artwork"
              subtitle="Original artwork by our artist"
              className={s.pageTitle}
            />
            <Row gutter={[16, 0]} className={s.list}>
              {artworkData.map((item, index) => (
                <Col
                  xl={{ span: 6 }}
                  lg={{ span: 7 }}
                  md={{ span: 11 }}
                  xs={{ span: 19 }}
                  key={index}
                >
                  <ThemesArtworkWithFrame
                    artworkSlug={item.slug}
                    artworkTitle={item.title}
                    artworkSize={item.size}
                    imgSrc={item.imgUrl}
                    artworkStatus={item.status}
                  />
                </Col>
              ))}
            </Row>
          </section>
        )}
        {/* // * ====================================== * // */}

        {/* //? ============== Divider Section ============= ?// */}
        <section className={s.divider}>
          <ThemesDividerWithButton onClick={() => router.push("/artwork")}>
            SEE MORE
          </ThemesDividerWithButton>
        </section>
        {/* // * ====================================== * // */}

        {/* //? ============== Artist Section ============= ?// */}
        {artistData && (
          <section className={s.section}>
            <ThemesHeadline title="Our New Artist" className={s.pageTitle} />
            <Row gutter={[16, 0]} className={s.list}>
              {artistData.map((item, index) => (
                <Col
                  xl={{ span: 6 }}
                  lg={{ span: 7 }}
                  md={{ span: 11 }}
                  xs={{ span: 21 }}
                  key={index}
                >
                  <ThemesArtistCard
                    artistId={item.id}
                    artistSlug={item.slug}
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
        {/* // * ====================================== * // */}

        {/* //? ============== Divider Section ============= ?// */}
        <section className={s.divider}>
          <ThemesDividerWithButton onClick={() => router.push("/artist")}>
            SEE MORE
          </ThemesDividerWithButton>
        </section>
        {/* // * ====================================== * // */}
      </ThemesContainerMain>
    </>
  );
}

ThemesContentsHomepage.propTypes = {
  artworkData: propTypes.array,
  artistData: propTypes.array,
};

export default ThemesContentsHomepage;
