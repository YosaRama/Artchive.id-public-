/* eslint-disable @next/next/no-img-element */

// Libs
import moment from "moment";
import propTypes from "prop-types";
import { Col, Row } from "antd";
import { useRouter } from "next/router";

// Components
import ThemesButton from "themes/components/libs/button";
import ThemesHeadline from "themes/components/libs/headline";
import ThemesArtworkCard from "themes/components/libs/artwork-card";
import ThemesContainerMasonry from "themes/components/container/masonry";
import ThemesContainerMain from "themes/components/container/main";
import ThemesMapsGoogleLocation from "themes/components/libs/maps-google-location";
import ThemesThumbnailCard from "themes/components/libs/thumbnail-card";
import ThemesArticleCard from "themes/components/libs/article-card";

// Helper
import { useWindowSize } from "app/helpers/useWindowSize";

// Styles
import s from "./index.module.scss";

// Icons
import { ClockCircleOutlined, CalendarOutlined, PushpinOutlined } from "@ant-design/icons";

function ThemesContentsExhibitionDetails(props) {
  const router = useRouter();
  const { exhibitionData } = props;

  //? ============== Handle Get Viewport ============= ?//
  const viewport = useWindowSize();
  // * ====================================== * //

  return (
    <>
      {/* //? ============== Artwork List Section ============= ?// */}
      <section className={s.section}>
        <ThemesContainerMain>
          <Col className={s.titleContainer}>
            <ThemesHeadline
              title={exhibitionData?.title}
              subtitle={exhibitionData?.short_description}
            />
            <a href={exhibitionData?.catalogue_link} target="_blank" rel="noreferrer">
              <ThemesButton type={`primary ${s.catalogueButton}`}>VIEW CATALOGUE</ThemesButton>
            </a>
          </Col>
          {exhibitionData?.artworks && (
            <section className={s.artworkListContainer}>
              <ThemesContainerMasonry
                breakPoint={
                  viewport?.width > 1024
                    ? 4
                    : viewport?.width <= 1024 && viewport?.width > 768
                    ? 3
                    : viewport?.width <= 768 && viewport?.width > 500
                    ? 2
                    : 1
                }
              >
                {exhibitionData?.artworks?.map((item, index) => {
                  return (
                    <Col key={index}>
                      <ThemesArtworkCard
                        artistName={item.artist.full_name}
                        artistCity={item.artist.city}
                        artworkHeight={item.height}
                        artworkWidth={item.width}
                        artworkMedia={item.material}
                        artworkPrice={item.exhibitions[0].exhibition_price}
                        artworkUrl={`/exhibition/${exhibitionData.slug}/artwork/${item.slug}`}
                        artworkStatus={item.status}
                        artworkTitle={item.title}
                        artworkYear={item.year}
                        imgSrc={`${process.env.NEXT_PUBLIC_S3_URL}/${item.media_cover.url}`}
                      />
                    </Col>
                  );
                })}
              </ThemesContainerMasonry>
            </section>
          )}
        </ThemesContainerMain>
      </section>
      {/* // * ====================================== * // */}

      {/* //? ============== Press Release Section ============= ?// */}
      <section className={`${s.whiteSection} ${s.section}`}>
        <ThemesContainerMain>
          <Col>
            <h1 className={s.title}>Press Release</h1>
            {exhibitionData.media_gallery.length != 0 && (
              <Col>
                <Row gutter={16}>
                  <Col span={12} className={s.pressImageContainer}>
                    <img
                      src={`${process.env.NEXT_PUBLIC_S3_URL}/${exhibitionData?.media_gallery?.[0]?.url}`}
                      className={`${s.pressImage} ${s.pressLargeImage}`}
                      alt=""
                    />
                  </Col>
                  <Col span={12} className={s.pressImageContainer}>
                    <Row gutter={16} className={s.pressImageContainer}>
                      {exhibitionData?.media_gallery
                        ?.filter((item, index) => index > 0 && index < 5)
                        .map((item, index) => {
                          return (
                            <Col span={12} className={s.pressHalfImageContainer} key={index}>
                              <img
                                src={`${process.env.NEXT_PUBLIC_S3_URL}/${item.url}`}
                                className={`${s.pressImage} ${s.pressHalfImage}`}
                                alt=""
                              />
                            </Col>
                          );
                        })}
                    </Row>
                  </Col>
                </Row>
              </Col>
            )}
            <p className={s.pressDescription}>
              <div dangerouslySetInnerHTML={{ __html: exhibitionData?.description }} />
            </p>
          </Col>
        </ThemesContainerMain>
      </section>
      {/* // * ====================================== * // */}

      {/* //? ============== Location Section ============= ?// */}
      <section className={s.section}>
        <ThemesContainerMain>
          <h1 className={s.title}>Location & Time</h1>
          <Col span={24}>
            <Row gutter={16}>
              <Col sm={{ span: 8 }} xs={{ span: 24 }} className={s.locTimeDetailsContainer}>
                <h1>
                  <span>
                    <CalendarOutlined />{" "}
                  </span>
                  Date
                </h1>
                <h4>
                  {moment(exhibitionData?.start_date).format("DD MMMM")} -{" "}
                  {moment(exhibitionData?.end_date).format("DD MMMM YYYY")}
                </h4>
              </Col>
              <Col sm={{ span: 8 }} xs={{ span: 24 }} className={s.locTimeDetailsContainer}>
                <h1>
                  <span>
                    <PushpinOutlined />{" "}
                  </span>
                  Location
                </h1>
                <h4>{exhibitionData?.address}</h4>
              </Col>
              <Col sm={{ span: 8 }} xs={{ span: 24 }} className={s.locTimeDetailsContainer}>
                <h1>
                  <span>
                    <ClockCircleOutlined />{" "}
                  </span>
                  Time
                </h1>
                <h4>
                  {exhibitionData?.start_time} - {exhibitionData?.end_time}
                </h4>
              </Col>
              <Col span={24} style={{ paddingLeft: 0, paddingRight: 0 }}>
                <ThemesMapsGoogleLocation lat={exhibitionData?.lat} lng={exhibitionData?.lng} />
              </Col>
            </Row>
          </Col>
        </ThemesContainerMain>
      </section>
      {/* // * ====================================== * // */}

      {/* //? ============== Artist Section ============= ?// */}
      <section className={`${s.whiteSection} ${s.section}`}>
        <ThemesContainerMain>
          <h1 className={s.title}>Artist On Exhibition</h1>
          <Row>
            {exhibitionData?.artists?.map((item, index) => {
              return (
                <Col
                  lg={{ span: 12 }}
                  xs={{ span: 24 }}
                  key={index}
                  className={s.artistThumbnailContainer}
                >
                  <ThemesThumbnailCard
                    title={item.full_name}
                    subtitle={item.city}
                    profile={item?.profile?.url}
                  />
                </Col>
              );
            })}
          </Row>
        </ThemesContainerMain>
      </section>
      {/* // * ====================================== * // */}

      {/* //? ============== Article Section ============= ?// */}
      {/* //TODO : Create Connection With Article List// */}
      {/* <section className={s.section}>
        <ThemesContainerMain>
          <h1 className={s.title}>Article For You</h1>
          <Row gutter={16}>
            <Col sm={{ span: 8 }} xs={{ span: 24 }} className={s.articleCard}>
              <ThemesArticleCard />
            </Col>
            <Col sm={{ span: 8 }} xs={{ span: 24 }} className={s.articleCard}>
              <ThemesArticleCard />
            </Col>
            <Col sm={{ span: 8 }} xs={{ span: 24 }} className={s.articleCard}>
              <ThemesArticleCard />
            </Col>
          </Row>
        </ThemesContainerMain>
      </section> */}
      {/* // * ====================================== * // */}
    </>
  );
}

ThemesContentsExhibitionDetails.propTypes = {
  exhibitionData: propTypes.any.isRequired,
};

export default ThemesContentsExhibitionDetails;
