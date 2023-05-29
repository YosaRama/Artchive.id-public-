// Libs
import { Col, Button, Image, Row, Carousel } from "antd";
import { useRef } from "react";
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

  //? ============== Handle Scroll ============= ?//

  const carouselRef = useRef(null);

  const handleNext = () => {
    carouselRef.current.next();
  };

  const handlePrev = () => {
    carouselRef.current.prev();
  };

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

          <Col span={24}>
            <Row>
              {width > 1024 && (
                <Col span={1} className={s.btnArrow}>
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<LeftOutlined />}
                    onClick={handlePrev}
                  />
                </Col>
              )}
              <Col span={22}>
                <Carousel
                  ref={carouselRef}
                  autoplay={auctionData.overview.auction_img.length <= 3 ? false : true}
                  dots={false}
                  slidesToShow={3}
                  slidesToScroll={3}
                  draggable={true}
                  responsive={[
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                      },
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                      },
                    },
                    {
                      breakpoint: 500,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                      },
                    },
                  ]}
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
                </Carousel>
              </Col>
              {width > 1024 && (
                <Col span={1} className={s.btnArrow}>
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<RightOutlined />}
                    onClick={handleNext}
                  />
                </Col>
              )}
            </Row>
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
