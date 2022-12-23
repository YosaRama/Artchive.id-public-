// Libs
import propTypes from "prop-types";
import { Col, Row } from "antd";
import { useRouter } from "next/router";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesArtworkWithFrame from "themes/components/libs/artwork-with-frame";
import ThemesButton from "themes/components/libs/button";
import ThemesArtistCard from "themes/components/libs/artist-card";
import ThemesDividerWithButton from "themes/components/libs/divider-with-button";

// Helpers
import { useWindowSize } from "app/helpers/useWindowSize";

// Styles
import s from "./index.module.scss";

function ThemesContentsHomepageV2ArtworkArtistSection(props) {
  const {
    listData,
    title,
    description,
    buttonText,
    buttonTextMobile,
    textPosition = "left",
    textPositionOnMobile = "bottom",
    listDataType,
    page,
  } = props;

  const { width } = useWindowSize();
  const router = useRouter();

  //? ============== Router Page Divider ============= ?//
  const pageDivider =
    listDataType === "artwork" ? "/artwork" : listDataType === "artist" ? "/artist" : "";
  // * ====================================== * //

  return (
    <>
      <Col>
        <ThemesContainerMain>
          <Row className={s.container} gutter={[40, 0]}>
            <Col
              lg={{ span: 8, order: textPosition === "left" ? 1 : 2 }}
              md={{ span: 24, order: textPositionOnMobile === "bottom" ? 2 : 1 }}
              xs={{ span: 24, order: textPositionOnMobile === "bottom" ? 2 : 1 }}
              className={s.description}
            >
              <Col
                style={{ padding: "0px" }}
                xl={{ span: 24 }}
                lg={{ span: 24 }}
                md={{ span: 19 }}
                xs={{ span: 24 }}
              >
                <div dangerouslySetInnerHTML={{ __html: title }} />
                <p>{description}</p>
              </Col>
              {width > 768 ? (
                <Col
                  className={s.btn}
                  xl={{ span: 24 }}
                  lg={{ span: 24 }}
                  md={{ span: 7 }}
                  xs={{ span: 7 }}
                >
                  <ThemesButton type={"default"} onClick={() => router.push(`${page}`)}>
                    {buttonText}
                  </ThemesButton>
                </Col>
              ) : (
                ""
              )}
            </Col>
            <Col
              lg={{ span: 16, order: textPosition === "left" ? 2 : 1 }}
              md={{ span: 24, order: textPositionOnMobile === "bottom" ? 1 : 2 }}
              xs={{ span: 24, order: textPositionOnMobile === "bottom" ? 1 : 2 }}
              style={{ padding: "0px 10px" }}
            >
              <Row gutter={(20, 20)} className={s.slider}>
                {listData?.map((item, index) => (
                  <Col
                    xl={{ span: 10 }}
                    lg={{ span: 11 }}
                    md={{ span: 10 }}
                    xs={{ span: 20 }}
                    key={index}
                    className={s.sliderItem}
                  >
                    {listDataType === "artwork" ? (
                      <>
                        <ThemesArtworkWithFrame
                          artworkSlug={`/artwork/${item.slug}`}
                          artworkTitle={item.title}
                          artworkSize={item.size}
                          imgSrc={item.imgUrl}
                          artworkStatus={item.status}
                          style={{ margin: "0px 10px", width: 300, height: 300 }}
                          isCuratorPick={item.isCuratorPick}
                        />
                      </>
                    ) : listDataType === "artist" ? (
                      <>
                        <ThemesArtistCard
                          artistId={item.id}
                          artistSlug={item.slug}
                          artistName={item.name}
                          artistCity={item.city}
                          avatarSrc={item.avatar}
                          bannerSrc={item.artwork}
                        />
                      </>
                    ) : (
                      <></>
                    )}
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
          {width <= 768 ? (
            <Col style={{ margin: "30px 0px 20px" }}>
              <ThemesDividerWithButton onClick={() => router.push(`${page}`)}>
                {buttonTextMobile}
              </ThemesDividerWithButton>
            </Col>
          ) : (
            ""
          )}
        </ThemesContainerMain>
      </Col>
    </>
  );
}

ThemesContentsHomepageV2ArtworkArtistSection.propTypes = {
  listData: propTypes.array,
  title: propTypes.string,
  description: propTypes.string,
  buttonText: propTypes.string,
  buttonTextMobile: propTypes.string,
  textPosition: propTypes.oneOf(["left", "right"]),
  textPositionOnMobile: propTypes.oneOf(["top", "bottom"]),
  listDataType: propTypes.oneOf(["artwork", "artist"]),
  router: propTypes.string,
};

export default ThemesContentsHomepageV2ArtworkArtistSection;
