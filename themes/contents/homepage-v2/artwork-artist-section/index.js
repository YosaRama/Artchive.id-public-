// Libs
import propTypes from "prop-types";
import { Col, Row, Button } from "antd";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

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

  //? ============== Handle Scroll ============= ?//
  const ref = useRef(0);
  const [scrollX, setscrollX] = useState(0); // For detecting start scroll postion
  const [scrollEnd, setscrollEnd] = useState(false); // For detecting end of scrolling

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;

    if (Math.floor(ref.current.scrollWidth - ref.current.scrollLeft) <= ref.current.offsetWidth) {
      setscrollEnd(true);
    } else {
      setscrollEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(ref.current.scrollLeft);
    if (Math.floor(ref.current.scrollWidth - ref.current.scrollLeft) <= ref.current.offsetWidth) {
      setscrollEnd(true);
    } else {
      setscrollEnd(false);
    }
  };

  useEffect(() => {
    if (ref.current && ref?.current?.scrollWidth === ref.current.offsetWidth) {
      setscrollEnd(true);
    } else {
      setscrollEnd(false);
    }
    return () => {};
  }, [ref?.current?.scrollWidth, ref?.current?.offsetWidth]);

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
              className={s.imageContainer}
            >
              {width > 1024 && (
                <Col span={1} className={s.btnArrow}>
                  {scrollX !== 0 && (
                    <Button
                      type="primary"
                      shape="circle"
                      icon={<LeftOutlined />}
                      onClick={() => scroll(-320)}
                    />
                  )}
                </Col>
              )}

              <Col
                xl={{ span: 22 }}
                lg={{ span: 24 }}
                md={{ span: 24 }}
                xs={{ span: 24 }}
                style={{ padding: "0px" }}
              >
                <Row
                  gutter={{ xl: 20, lg: 20, md: 20, xs: 10 }}
                  className={s.slider}
                  ref={ref}
                  onScroll={scrollCheck}
                >
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
              {width > 1024 && (
                <Col span={1} className={s.btnArrow}>
                  {!scrollEnd && (
                    <Button
                      type="primary"
                      shape="circle"
                      icon={<RightOutlined />}
                      onClick={() => scroll(320)}
                    />
                  )}
                </Col>
              )}
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
