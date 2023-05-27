// Libs
import { useRouter } from "next/router";
import { Col, Button, Image, Row, Card, Form, Input, Select, Slider, Spin, Divider } from "antd";
import { useEffect, useRef, useState } from "react";
import propTypes from "prop-types";

import ReactPlayer from "react-player";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesBanner from "themes/components/libs/banner";
import ThemesBannerAuctionItem from "themes/components/libs/banner-auction";
import ThemesHeadline from "themes/components/libs/headline";

// Data Hook

// Helpers
import { useWindowSize } from "app/helpers/useWindowSize";

// Styles
import s from "./index.module.scss";

function ThemesContentsAuctionDetailsOverview(props) {
  const { width } = useWindowSize();
  // const auctionData = auctionList[0];
  const { auctionData } = props;
  console.log(auctionData);
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
      <ThemesBanner imgSrc={auctionData.thumbnail} className={s.bannerContainer}>
        <ThemesBannerAuctionItem
          title={auctionData.title}
          startDate={auctionData.start_date}
          placeName={auctionData.place_name}
          slug={auctionData.slug}
        />
      </ThemesBanner>

      <ThemesContainerMain>
        {/* //? ============== Overview ============= ?// */}
        <Col style={{ display: "flex", justifyContent: "center", margin: "40px 0px" }}>
          <Col span={10}>{auctionData.overview.description}</Col>
        </Col>
      </ThemesContainerMain>

      {/* //? ============== Video Player ============= ?// */}
      <Col className={s.bgwhite}>
        <ThemesContainerMain>
          <Row gutter={[40, 40]} justifyContent="space-between">
            <Col span={12} style={{ height: "400px", display: "flex", alignItems: "center" }}>
              <ReactPlayer
                url={auctionData.overview.video_url}
                width={600}
                height={380}
                controls={true}
              />
            </Col>
            <Col span={12}>
              <h1 style={{ fontSize: 32 }}>{auctionData.overview.title}</h1>
              {auctionData.overview.description}
            </Col>
          </Row>
        </ThemesContainerMain>
      </Col>
      {/* // * ====================================== * // */}

      <Col className={s.bgdefault}>
        <ThemesContainerMain>
          <ThemesHeadline title="Auction Highlight" className={s.headline} />
          <Col className={s.imageContainer}>
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
                gutter={[{ xl: 20, lg: 20, md: 20, xs: 10 }]}
                className={s.slider}
                ref={ref}
                onScroll={scrollCheck}
              >
                {auctionData.overview.auction_img.map((item, index) => {
                  return (
                    <>
                      <Col
                        xl={{ span: 8 }}
                        lg={{ span: 8 }}
                        md={{ span: 8 }}
                        xs={{ span: 8 }}
                        key={index}
                        span={8}
                        className={s.sliderItem}
                      >
                        <Image preview={false} src={item.img_url} alt="" />
                      </Col>
                    </>
                  );
                })}
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
        </ThemesContainerMain>
      </Col>

      <Col className={s.bgwhite}>
        <ThemesContainerMain>
          <ThemesHeadline title="Curators" className={s.headline} />
          <Row gutter={[20, 20]}>
            {auctionData.curator.map((item, index) => {
              return (
                <>
                  <Col span={6} className={s.curatorContainer}>
                    <Col className={s.imageCurator}>
                      <Image src={item.img_url} alt="" className={s.img} preview={false} />
                    </Col>
                    <h2>{item.name}</h2>
                    <p>{item.position}</p>
                  </Col>
                </>
              );
            })}
          </Row>
          {/* // * ====================================== * // */}
        </ThemesContainerMain>
      </Col>
    </>
  );
}

ThemesContentsAuctionDetailsOverview.propTypes = {
  auctionData: propTypes.any.isRequired,
};

export default ThemesContentsAuctionDetailsOverview;
