// Libs
import { Col, Button, Row, Carousel, Image, Badge, Modal, Divider } from "antd";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import moment from "moment";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import ReactPlayer from "react-player";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesBanner from "themes/components/libs/banner";
import ThemesBannerAuctionItem from "themes/components/libs/banner-auction";
import ThemesHeadline from "themes/components/libs/headline";
import ThemesButton from "themes/components/libs/button";

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
      return (number / 1000000000000).toFixed(1) + (width > 1024 ? " Trillion" : " Tril.");
    } else if (number > 999999999) {
      return (number / 1000000000).toFixed(1) + (width > 1024 ? " Billion" : " Bill.");
    } else if (number > 999999) {
      return (number / 1000000).toFixed(1) + (width > 1024 ? " Million" : " Mill.");
    } else if (number > 999) {
      return (number / 1000).toFixed(1) + (width > 1024 ? " Thousand" : " K");
    } else {
      return number;
    }
  };

  //#region Bid Value
  const formattedTotalCurrentPrice = formatNumber(totalCurrentPrice);
  //#endregion

  //#region Statistic
  const statistic = [
    { statistic: "14", suffix: `Day${days > 1 && "s"}` },
    { statistic: `${auctionItems?.length}`, suffix: `Artwork${auctionItems?.length > 1 && "s"}` },
    { statistic: `${artistCount}`, suffix: `Artist${artistCount > 1 && "s"}` },
    { statistic: `${formattedTotalCurrentPrice}`, suffix: `Bid Value` },
  ];
  //#endregion

  //#region Handle Modal
  const [visible, isVisible] = useState(false);
  const [selectedSpeech, setSelectedSpeech] = useState("");
  const [selectedName, setSelectedName] = useState("");

  const handleOpenModal = (item) => {
    setSelectedSpeech(item?.speech);
    setSelectedName(item?.name);
    isVisible(true);
  };

  const handleCloseModal = () => {
    isVisible(false);
  };

  const contentSpeech = (
    <Col className={s.speechContainer}>
      <h1>{selectedName}</h1>
      <Divider />
      <p
        dangerouslySetInnerHTML={{
          __html: selectedSpeech,
        }}
      />
    </Col>
  );

  //#endregion

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
              <>
                <Col className={s.description}>
                  <Col span={24}>
                    <h1>About The Auction</h1>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: description,
                      }}
                    />
                  </Col>
                </Col>

                <Col className={s.description}>
                  <Col span={24}>
                    <h1>{auction_details?.article?.title}</h1>
                    {auction_details?.article?.item.map((item, index) => {
                      return (
                        <>
                          <Row gutter={[40]} className={s.descriptionContainer}>
                            <Col
                              md={{ span: 10, order: item?.id % 2 == 0 ? 2 : 1 }}
                              xs={{ span: 24, order: 1 }}
                              order={item?.id % 2 == 0 ? 2 : 1}
                            >
                              {item?.video_url === "" ? (
                                <Image
                                  src={item?.image_url}
                                  className={s.image}
                                  alt=""
                                  preview={false}
                                />
                              ) : (
                                <ReactPlayer
                                  url={`${item?.video_url}`}
                                  light={true}
                                  controls={true}
                                  className={s.video}
                                />
                              )}
                            </Col>
                            <Col
                              md={{ span: 14, order: item?.id % 2 == 0 ? 1 : 2 }}
                              xs={{ span: 24, order: 2 }}
                            >
                              <h2>{item?.title}</h2>
                              <p className={s.shortDescription}>{item?.short_description}</p>
                              <ThemesButton
                                type={`outlined + ${s.button}`}
                                onClick={() => router.push(`/articles/${item?.slug}`)}
                              >
                                READ MORE
                              </ThemesButton>
                            </Col>
                          </Row>
                        </>
                      );
                    })}
                  </Col>
                </Col>
                {
                  // #region Art Statistic
                  <Row className={s.statisticContainer}>
                    <Col span={24}>
                      <h1>Auction Statistics</h1>
                    </Col>

                    <Col span={24} className={s.container}>
                      <Row gutter={[20, 50]} justify="center">
                        {statistic?.map((item, index) => {
                          return (
                            <>
                              <Col
                                xl={{ span: 5 }}
                                lg={{ span: 5 }}
                                md={{ span: 5 }}
                                xs={{ span: 24 }}
                              >
                                <h1>{item.statistic}</h1>
                                <h2>{item.suffix}</h2>
                              </Col>
                            </>
                          );
                        })}
                      </Row>
                    </Col>
                  </Row>
                  // #endregion
                }
              </>
              // #endregion
            }

            {
              <Col className={s.logoContainer}>
                <p>Diselenggarakan Oleh:</p>
                <Row gutter={[40, 20]} justify="center">
                  {auction_details?.logo_organizer.map((item, index) => {
                    return (
                      <Col key={item?.id} className={s.logoLarge}>
                        <Image src={`/images/${item?.logo}`} alt="" preview={false} />
                      </Col>
                    );
                  })}
                </Row>
                <br />
                <p>Didukung Oleh:</p>
                <Row gutter={[40, 20]} justify="center">
                  {auction_details?.logo_supporter_vip.map((item, index) => {
                    return (
                      <Col key={item?.id} className={s.logoLarge}>
                        <Image src={`/images/${item?.logo}`} alt="" preview={false} />
                      </Col>
                    );
                  })}
                </Row>
                <br />

                <Row gutter={[40, 20]} justify="center">
                  {auction_details?.logo_supporter.map((item, index) => {
                    return (
                      <Col key={item?.id} className={s.logoSmall}>
                        <Image src={`/images/${item?.logo}`} alt="" preview={false} />
                      </Col>
                    );
                  })}
                </Row>
              </Col>
            }
            {
              //#region Speech Carousel
              <Col className={s.speechControl}>
                <h1 style={{ textDecoration: "underline" }}>Auction Supporters</h1>

                <>
                  <Row className={s.supportersRow}>
                    {auction_details?.naratama?.map((item, index) => {
                      return (
                        <>
                          <Col
                            xl={{ span: 7 }}
                            lg={{ span: 7 }}
                            md={{ span: 11 }}
                            xs={{ span: 24 }}
                            id={item.id}
                            className={s.supportersCard}
                          >
                            <Col>
                              <Image
                                src={item?.profile_image}
                                alt=""
                                className={s.image}
                                preview={false}
                              />
                            </Col>
                            <Col className={s.cardDescription}>
                              <h2>{item?.name}</h2>
                              <p>{item?.position}</p>
                              <ThemesButton
                                type={`outlined + ${s.button}`}
                                onClick={() => handleOpenModal(item)}
                              >
                                VIEW SPEECH
                              </ThemesButton>
                            </Col>
                          </Col>
                        </>
                      );
                    })}
                  </Row>
                </>
              </Col>
              //#endregion
            }

            <Col className={s.shoutoutAuction}>
              <Col xl={{ span: 20 }} lg={{ span: 20 }} md={{ span: 24 }} xs={{ span: 24 }}>
                <h1>{auction_details?.name}</h1>
                <h2>{auction_details?.sub_name}</h2>
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
      {
        //#region Modal
        <Modal
          centered
          footer={null}
          closeable={true}
          visible={visible}
          onCancel={handleCloseModal}
          keyboard={true}
          bodyStyle={{ height: "600px", overflowY: "auto" }}
        >
          {contentSpeech}
        </Modal>
        //#endregion
      }
    </>
  );
}

export default ThemesContentsAuctionDetailsOverview;
