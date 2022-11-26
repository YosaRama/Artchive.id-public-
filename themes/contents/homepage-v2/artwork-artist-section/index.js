// Libs
import propTypes from "prop-types";
import { Col, Row } from "antd";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesArtworkWithFrame from "themes/components/libs/artwork-with-frame";
import ThemesButton from "themes/components/libs/button";
import ThemesArtistCard from "themes/components/libs/artist-card";

// Styles
import s from "./index.module.scss";

function ThemesContentsHomepageV2ArtworkArtistSection(props) {
  const {
    listData,
    title,
    description,
    buttonText,
    textPosition = "left",
    textPositionOnMobile = "bottom",
    listDataType,
  } = props;

  return (
    <>
      <Col className={s.section}>
        <ThemesContainerMain>
          <Row className={s.container} gutter={[40, 0]}>
            <Col
              md={{ span: 8, order: textPosition === "left" ? 1 : 2 }}
              xs={{ span: 24, order: textPositionOnMobile === "bottom" ? 2 : 1 }}
              className={s.description}
            >
              <div dangerouslySetInnerHTML={{ __html: title }} />
              <p>{description}</p>
              <Col className={s.btn}>
                <ThemesButton
                  type={"default"}
                  style={{ marginTop: "22px", color: "white" }}
                  onClick={() => router.push("/artwork")}
                >
                  {buttonText}
                </ThemesButton>
              </Col>
            </Col>
            <Col
              md={{ span: 16, order: textPosition === "left" ? 2 : 1 }}
              xs={{ span: 24, order: textPositionOnMobile === "bottom" ? 1 : 2 }}
            >
              <Row gutter={(20, 20)} className={s.slider}>
                {listData.map((item, index) => (
                  <Col
                    xl={{ span: 10 }}
                    lg={{ span: 11 }}
                    md={{ span: 15 }}
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
  textPosition: propTypes.oneOf(["left", "right"]),
  textPositionOnMobile: propTypes.oneOf(["top", "bottom"]),
  listDataType: propTypes.oneOf(["artwork", "artist"]),
};

export default ThemesContentsHomepageV2ArtworkArtistSection;
