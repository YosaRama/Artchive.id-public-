// Libs
import { Col, Button, Row, Carousel, Image } from "antd";
import { useRef } from "react";
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
import { useAuctionItems } from "app/hooks/auction/item";
import { auctionList } from "app/database/dummy/auction-list";

// Helpers
import { useWindowSize } from "app/helpers/useWindowSize";

// Styles
import s from "./index.module.scss";

function ThemesContentsAuctionDetailsOverview() {
  const { width } = useWindowSize();
  const router = useRouter();
  const { id: auctionId } = router.query;

  // #region Auction Data
  const { data: auctionData, loading: auctionDataLoading } = useAuction({
    singleId: auctionId,
  });
  // #endregion

  // #region Auction Data
  const { data: auctionItems, loading: auctionItemsLoading } = useAuctionItems({
    queryString: "",
    auctionId: auctionId,
  });
  // #endregion

  const description = auctionData?.description?.replace(/<\/p>/g, "\n").replace(/<p>/g, "").trim();

  // #region Handle Scroll
  const carouselRef = useRef(null);
  const handleNext = () => {
    carouselRef.current.next();
  };
  const handlePrev = () => {
    carouselRef.current.prev();
  };
  // #endregion
  return (
    <>
      <ThemesBanner imgSrc={auctionData?.thumbnail} className={s.bannerContainer} initial="visible">
        <ThemesBannerAuctionItem
          loading={auctionData}
          title={auctionData?.name}
          startDate={auctionData?.start_date}
          endDate={auctionData?.end_date}
          placeName={auctionData?.place_name}
        />
      </ThemesBanner>
      {
        // #region Overview Section
        <ThemesContainerMain>
          <Col className={s.description}>
            <Col
              span={width > 789 ? 20 : 24}
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
          </Col>
        </ThemesContainerMain>
        // #endregion
      }
      {/* //TODO : Need more databasa: video url, video name, video description, curatorList: {curator name, position}// */}
      {
        // #region Video Details
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
                <p span={24} dangerouslySetInnerHTML={{ __html: description }} />
              </Col>
            </Row>
          </ThemesContainerMain>
        </Col>
        // #endregion
      }
      {
        // #region Highlight Section
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
                      disabled={auctionItems?.length <= 3}
                    />
                  </Col>
                )}
                <Col span={width > 1024 ? 22 : 24} className={s.carousel}>
                  <Carousel
                    ref={carouselRef}
                    autoplay={true}
                    dots={false}
                    slidesToShow={auctionItems?.length >= 3 ? 3 : auctionItems?.length}
                    slidesToScroll={1}
                    draggable={true}
                    responsive={[
                      {
                        breakpoint: 768,
                        settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          centerMode: true,
                        },
                      },
                    ]}
                  >
                    {auctionItems?.map((item, index) => {
                      return (
                        <Col
                          key={index}
                          className={s.sliderItem}
                          onClick={() =>
                            router.push(`/auction/${auctionId}/lots/${item?.auction_details?.id}`)
                          }
                        >
                          <Image
                            preview={false}
                            src={`${process.env.NEXT_PUBLIC_S3_URL}/${item.artwork_details?.media_cover?.url}`}
                            alt=""
                          ></Image>
                        </Col>
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
                      disabled={auctionItems?.length <= 3}
                    />
                  </Col>
                )}
              </Row>
            </Col>
          </ThemesContainerMain>
        </Col>
        // #endregion
      }
      {
        // #region Curator Section
        // <Col className={s.bgwhite}>
        //   <ThemesContainerMain>
        //     <ThemesHeadline title="Curators" className={s.headline} />
        //     <Row gutter={width > 1024 ? [20, 20] : [10, 10]}>
        //       {auctionList[0].curator.map((item, index) => {
        //         return (
        //           <>
        //             <Col span={width > 500 ? 6 : 24} className={s.curatorContainer}>
        //               <Col span={width > 500 ? 24 : 9} className={s.imageCurator}>
        //                 <Image src={item.img_url} alt="" className={s.img} preview={false} />
        //               </Col>
        //               <Col span={width > 500 ? 24 : 14} className={s.curatorDesc}>
        //                 <h2>{item.name}</h2>
        //                 <p>{item.position}</p>
        //               </Col>
        //             </Col>
        //           </>
        //         );
        //       })}
        //     </Row>
        //     {/* // * ====================================== * // */}
        //   </ThemesContainerMain>
        // </Col>
        // #endregion
      }
    </>
  );
}

export default ThemesContentsAuctionDetailsOverview;
