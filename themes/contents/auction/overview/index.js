// Libs
import { Col, Button, Row, Carousel, Image, Badge, Divider } from "antd";
import { useRef } from "react";
import { useRouter } from "next/router";
import moment from "moment";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesBanner from "themes/components/libs/banner";
import ThemesBannerAuctionItem from "themes/components/libs/banner-auction";
import ThemesHeadline from "themes/components/libs/headline";

// Data Hook
import { useAuction } from "app/hooks/auction";
import { useAuctionItems } from "app/hooks/auction/item";

// Helpers
import { useWindowSize } from "app/helpers/useWindowSize";
import { auction_details } from "app/database/dummy/overview.js";

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
  const carouselRefSpeech = useRef(null);
  const handleNextSpeech = () => {
    carouselRefSpeech.current.next();
  };

  const handlePrevSpeech = () => {
    carouselRefSpeech.current.prev();
  };
  const carouselRef = useRef(null);
  const handleNext = () => {
    carouselRef.current.next();
  };
  const handlePrev = () => {
    carouselRef.current.prev();
  };
  // #endregion
  const startDate = moment(auctionData?.start_date);
  const endDate = moment(auctionData?.end_date);
  const days = endDate.diff(startDate, "days");

  const uniqueArtists = new Set(auctionItems?.map((item) => item?.artwork_details?.artist_id));
  const artistCount = uniqueArtists.size;

  const totalCurrentPrice = auctionItems?.reduce(
    (acc, item) => parseInt(acc + item?.auction_details?.current_price),
    0
  );
  const formatNumber = (number) => {
    if (number > 999999999999) {
      return (number / 1000000000000).toFixed(0) + (width > 1024 ? " Trillion" : " Tril.");
    } else if (number > 999999999) {
      return (number / 1000000000).toFixed(0) + (width > 1024 ? " Billion" : " Bill.");
    } else if (number > 999999) {
      return (number / 1000000).toFixed(0) + (width > 1024 ? " Million" : " Mill.");
    } else if (number > 999) {
      return (number / 1000).toFixed(0) + (width > 1024 ? " Thousand" : " K");
    } else {
      return number;
    }
  };
  const formattedTotalCurrentPrice = formatNumber(totalCurrentPrice);

  return (
    <>
      <ThemesBanner imgSrc={auctionData?.thumbnail} className={s.bannerContainer} initial="visible">
        <ThemesBannerAuctionItem
          overview={true}
          loading={auctionData}
          title={auctionData?.name}
          startDate={auctionData?.start_date}
          endDate={auctionData?.end_date}
          placeName={auctionData?.place_name}
          auctionDetails={auction_details}
          auctionId={auctionId}
        />
      </ThemesBanner>

      <Col span={24} className={s.bgwhite}>
        <Col>
          <ThemesContainerMain>
            {
              // #region Overview Section
              <Col className={s.description}>
                <Col>
                  <h1>About The Auction</h1>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: description,
                    }}
                  />
                </Col>
              </Col>
              // #endregion
            }
            {
              <Col className={s.logoContainer}>
                <p>Diselenggarakan Oleh:</p>
                <Row gutter={[40, 20]} justify="center">
                  {auction_details?.logo_organizer.map((item, index) => {
                    return (
                      <Col key={item?.id} className={s.imageOrganizer}>
                        <Image src={`/images/${item?.logo}`} alt="" preview={false} />
                      </Col>
                    );
                  })}
                </Row>
                <br />
                <p>Didukung Oleh:</p>
                <Row gutter={[40, 20]} justify="center">
                  {auction_details?.logo_supporter.map((item, index) => {
                    return (
                      <Col key={item?.id} className={s.imageSupporter}>
                        <Image src={`/images/${item?.logo}`} alt="" preview={false} />
                      </Col>
                    );
                  })}
                </Row>
              </Col>
            }
            {
              // #region Art Statistic
              <Col className={s.statistic}>
                <Col span={24}>
                  <Divider className={s.divider} />
                  <Row gutter={[20, 50]}>
                    <Col xl={{ span: 6 }} lg={{ span: 6 }} md={{ span: 6 }} xs={{ span: 24 }}>
                      {/* <h1>{days}</h1> */}
                      <h1>14</h1>
                      <h2>Day{days > 1 && "s"}</h2>
                    </Col>
                    <Col xl={{ span: 6 }} lg={{ span: 6 }} md={{ span: 6 }} xs={{ span: 24 }}>
                      <h1>{auctionItems?.length}</h1>
                      <h2>Artwork{auctionItems?.length > 1 && "s"}</h2>
                    </Col>
                    <Col xl={{ span: 6 }} lg={{ span: 6 }} md={{ span: 6 }} xs={{ span: 24 }}>
                      <h1>{artistCount}</h1>
                      <h2>Artist{artistCount > 1 && "s"}</h2>
                    </Col>
                    <Col xl={{ span: 6 }} lg={{ span: 6 }} md={{ span: 6 }} xs={{ span: 24 }}>
                      <h1>{formattedTotalCurrentPrice}</h1>
                      <h2>Bid Value</h2>
                    </Col>
                  </Row>
                  <Divider className={s.divider} />
                </Col>
              </Col>
              // #endregion
            }
            <Col className={s.speechControl}>
              <Col span={24}>
                <Row gutter={[0, 0]} className={s.speechHeadline} justify="space-around">
                  <Col xl={{ span: 20 }} lg={{ span: 20 }} md={{ span: 20 }} xs={{ span: 18 }}>
                    <h1 style={{ textDecoration: "underline" }}>Auction Supporters</h1>
                  </Col>

                  <Col
                    xl={{ span: 4 }}
                    lg={{ span: 4 }}
                    md={{ span: 4 }}
                    xs={{ span: 6 }}
                    style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}
                  >
                    <Row gutter={[10, 10]} justify="space-around" align="bottom">
                      <Col span={2} className={s.btnArrow}>
                        <Button
                          size={width > 500 ? "large" : "middle"}
                          type="primary"
                          shape="circle"
                          icon={<LeftOutlined />}
                          onClick={handlePrevSpeech}
                        />
                      </Col>
                      <Col span={2} className={s.btnArrow}>
                        <Button
                          size={width > 500 ? "large" : "middle"}
                          type="primary"
                          shape="circle"
                          icon={<RightOutlined />}
                          onClick={handleNextSpeech}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Col>

            <Carousel
              effect="fade"
              ref={carouselRefSpeech}
              autoplaySpeed={6000}
              dots={false}
              slidesToScroll={1}
              draggable={true}
            >
              {auction_details?.naratama?.map((item, index) => {
                return (
                  <>
                    <Col span={24} className={s.speechContainer}>
                      <Row gutter={[40, 20]}>
                        <Col
                          xl={{ span: 9 }}
                          lg={{ span: 9 }}
                          md={{ span: 9 }}
                          xs={{ span: 24 }}
                          className={s.imageContainer}
                        >
                          <Image
                            src={item?.profile_image}
                            preview={false}
                            className={s.image}
                            alt=""
                          />
                        </Col>
                        <Col
                          xl={{ span: 15 }}
                          lg={{ span: 15 }}
                          md={{ span: 15 }}
                          xs={{ span: 24 }}
                        >
                          <Row justify="space-between">
                            <Col span={20}>
                              <h1>{item?.name}</h1>
                              <h4>{item?.position}</h4>
                            </Col>
                            <Col span={4}>
                              <h2>
                                {item?.id}/{auction_details?.naratama?.length}
                              </h2>
                            </Col>
                          </Row>
                          <Col className={s.speech}>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: item?.speech,
                              }}
                            />
                          </Col>
                        </Col>
                      </Row>
                    </Col>
                  </>
                );
              })}
            </Carousel>

            <Col className={s.shoutoutAuction}>
              <Col xl={{ span: 20 }} lg={{ span: 20 }} md={{ span: 24 }} xs={{ span: 24 }}>
                <Col>
                  <h1>{auction_details?.name}</h1>
                  <h2>{auction_details?.sub_name} </h2>
                </Col>
              </Col>
            </Col>
          </ThemesContainerMain>
        </Col>
      </Col>

      {
        // #region Highlight Section
        <Col style={{ margin: "40px 0px" }}>
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
                        breakpoint: 500,
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
                        <>
                          {item?.status === "CLOSED" && (
                            <Badge.Ribbon text="LOT CLOSED!" color="fulvous" className={s.badge} />
                          )}
                          <Col
                            key={index}
                            className={`${s.sliderItem}`}
                            onClick={() =>
                              router.push(`/auction/${auctionId}/lots/${item?.auction_details?.id}`)
                            }
                          >
                            <Image
                              preview={false}
                              className={item?.status === "CLOSED" && s.image}
                              src={`${process.env.NEXT_PUBLIC_S3_URL}/${item.artwork_details?.media_cover?.url}`}
                              alt=""
                            />
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
    </>
  );
}

export default ThemesContentsAuctionDetailsOverview;
