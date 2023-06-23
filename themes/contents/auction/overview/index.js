// Libs
import { Col, Button, Row, Carousel, Image } from "antd";
import { useRef } from "react";
import propTypes from "prop-types";
import { useRouter } from "next/router";

import ReactPlayer from "react-player";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesBanner from "themes/components/libs/banner";
import ThemesBannerAuctionItem from "themes/components/libs/banner-auction";
import ThemesHeadline from "themes/components/libs/headline";

// Data Hook
import { useAuction } from "app/hooks/auction";
import { auctionList } from "app/database/dummy/auction-list";

// Helpers
import { useWindowSize } from "app/helpers/useWindowSize";

// Styles
import s from "./index.module.scss";

function ThemesContentsAuctionDetailsOverview(props) {
  const { width } = useWindowSize();
  const router = useRouter();

  //? ============== Auction Details============= ?//
  const { data: auctionDetails, loading } = useAuction({ singleId: router.query.id });
  const auctionData = auctionDetails?.result;
  // * ====================================== * //

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
      <ThemesBanner
        imgSrc={auctionData?.thumbnail}
        className={s.bannerContainer}
        id={router.query.id}
      >
        <ThemesBannerAuctionItem
          title={auctionData?.name}
          startDate={auctionData?.start_date}
          endDate={auctionData?.end_date}
          placeName={auctionData?.place_name}
        />
      </ThemesBanner>

      <ThemesContainerMain>
        {/* //? ============== Overview ============= ?// */}
        <Col className={s.description}>
          <Col span={20}>{auctionData?.description}</Col>
        </Col>
      </ThemesContainerMain>

      {/* //TODO : Need more databasa: video url, video name, video description, curatorList: {curator name, position}// */}
      {/* //? ============== Video Player ============= ?// */}
      <Col className={s.bgwhite}>
        <ThemesContainerMain>
          <Row gutter={[40, 20]} justifyContent="space-between">
            <Col span={width >= 500 ? 12 : 24} className={s.video}>
              <ReactPlayer
                height={width > 1024 ? 400 : width < 500 ? 250 : 350}
                url="https://youtu.be/kE_C8kmD9lY"
                controls={true}
              />
            </Col>
            <Col span={width >= 500 ? 12 : 24} className={s.videoDesc}>
              <h1 style={{ fontSize: 32 }}>{auctionData?.name}</h1>
              {auctionData?.description}
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
              {width > 1024 ? (
                <Col span={1} className={s.btnArrow}>
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<LeftOutlined />}
                    onClick={handlePrev}
                  />
                </Col>
              ) : (
                ""
              )}
              <Col span={width > 1024 ? 22 : 24} className={s.carousel}>
                <Carousel
                  ref={carouselRef}
                  autoplay={auctionList[0].overview.auction_img.length <= 3 ? false : true}
                  dots={false}
                  slidesToShow={3}
                  slidesToScroll={1}
                  draggable={true}
                  responsive={[
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                      },
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
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
                  {auctionList[0].overview.auction_img.map((item, index) => {
                    return (
                      <>
                        <Col key={index} className={s.sliderItem}>
                          <img src={`${process.env.NEXT_PUBLIC_S3_URL}/${item.url}`} alt="" />
                        </Col>
                      </>
                    );
                  })}
                </Carousel>
              </Col>
              {width > 1024 ? (
                <Col span={1} className={s.btnArrow}>
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<RightOutlined />}
                    onClick={handleNext}
                  />
                </Col>
              ) : (
                ""
              )}
            </Row>
          </Col>
        </ThemesContainerMain>
      </Col>

      <Col className={s.bgwhite}>
        <ThemesContainerMain>
          <ThemesHeadline title="Curators" className={s.headline} />
          <Row gutter={width > 1024 ? [20, 20] : [10, 10]}>
            {auctionList[0].curator.map((item, index) => {
              return (
                <>
                  <Col span={width > 500 ? 6 : 24} className={s.curatorContainer}>
                    <Col span={width > 500 ? 24 : 9} className={s.imageCurator}>
                      <Image src={item.img_url} alt="" className={s.img} preview={false} />
                    </Col>
                    <Col span={width > 500 ? 24 : 14} className={s.curatorDesc}>
                      <h2>{item.name}</h2>
                      <p>{item.position}</p>
                    </Col>
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
