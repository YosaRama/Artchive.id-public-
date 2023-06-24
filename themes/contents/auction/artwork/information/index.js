// Libs
import { Col, Row, Image, Divider, Carousel } from "antd";
import { useState, useEffect } from "react";
import moment from "moment-timezone";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

// Components
import ThemesHeadline from "themes/components/libs/headline";
import ThemesContentsAuctionBidDetails from "../bid";

// Hooks
import { useAuctionItem, useAuctionItems } from "app/hooks/auction/item";

// Helper
import priceFormatter from "app/helpers/priceFormatter";
import { useWindowSize } from "app/helpers/useWindowSize";
import stringCapitalize from "app/helpers/capitalize";

// Style
import s from "./index.module.scss";

function ThemesContentsAuctionArtworkDetails() {
  const router = useRouter();
  const { width } = useWindowSize();
  // #region timeline
  const timeZone = moment.tz.guess();
  // #endregion

  // #region Data Parse
  const { id: auctionId, lotId } = router.query;
  const { data: lotDetails } = useAuctionItem({ singleId: lotId, auctionId: auctionId });
  const artworkDetails = lotDetails?.artwork_details;
  const auctionDetails = lotDetails?.auction_details;

  const { data: lotHighlightData } = useAuctionItems({ auctionId: auctionId, queryString: "" });
  const [randomData, setRandomData] = useState([]);

  useEffect(() => {
    getRandomData();
  }, [auctionDetails]);

  const getRandomData = () => {
    // Filter out the shown data item from the data array
    const filteredData = lotHighlightData.filter(
      (item) => item?.auction_details.id !== auctionDetails?.id
    );

    // Shuffle the filtered data array
    const shuffledData = [...filteredData].sort(() => 0.5 - Math.random());
    // Select the first 4 elements from the shuffled array
    const selectedData = shuffledData.slice(0, 4);
    setRandomData(selectedData);
  };
  // #endregion

  const handleHighlight = () => {
    router.push(`/auction/${auctionId}/lots/${lotId}`);
  };

  //? ============== Price Incremental ============= ?//
  const estimationBid = parseInt(auctionDetails?.end_estimation);
  const startBid = parseInt(auctionDetails?.initial_price);

  const [price, setPrice] = useState(startBid);
  const [limit, setLimit] = useState(price);
  const [priceStep, setPriceStep] = useState(auctionDetails?.step);
  const handleDecrement = () => {
    if (price > startBid) {
      setPrice((prevPrice) => prevPrice - parseInt(priceStep));
    }
  };
  const handleIncrement = () => {
    if (price < estimationBid) {
      setPrice((prevPrice) => prevPrice + parseInt(priceStep));
    }
  };
  // * ====================================== * //

  //? ============== Place Bid Handle ============= ?//
  const [logsHistory, setLogsHistory] = useState([]);
  const session = useSession();

  const handleBid = () => {
    const newLog = {
      user_ref: session.data.user.full_name,
      created_at: new Date().toISOString(), // or use the desired format for the date
      bid_price: `${price}`, // assuming `price` is the current bid price
    };

    setLogsHistory((prevLogs) => [...prevLogs, newLog]);
    setPrice(price);
    setLimit(price);
  };
  const isCurrentPriceMatch = logsHistory.some((log) => log.bid_price === price.toString());

  // Sort the logs in descending order based on index
  const sortedLogs = [...logsHistory].sort(
    (a, b) => logsHistory.indexOf(b) - logsHistory.indexOf(a)
  );

  // Get the latest bid price
  const latestBidPrice = sortedLogs[0]?.bid_price;
  // * ====================================== * //

  //? ============== Bid History Column ============= ?//
  const columns = [
    {
      title: "Date",
      dataIndex: "created_at",
      key: "created_at",
      render: (text) => {
        //? ============== Timer ============= ?//
        const createdTime = moment.tz(text, timeZone); // Example created time
        const currentTime = moment(); // Example current time

        const duration = moment.duration(currentTime.diff(createdTime));
        const timePassed = formatTimePassed(duration);

        function formatTimePassed(duration) {
          const seconds = duration.asSeconds();

          if (seconds < 60) {
            return `${Math.floor(seconds)} seconds ago`;
          } else if (seconds < 3600) {
            return `${Math.floor(seconds / 60)} minutes ago`;
          } else if (seconds < 86400) {
            return `${Math.floor(seconds / 3600)} hours ago`;
          } else {
            return `${Math.floor(seconds / 86400)} days ago`;
          }
        }
        // * ====================================== * //
        return <p>{timePassed}</p>;
      },
    },
    {
      title: "Bid",
      dataIndex: "bid_price",
      key: "bid_price",
      render: (text) => <p>IDR {priceFormatter(text, ",")}</p>,
      sortOrder: "descend",
      sorter: (a, b) => a.bid_price - b.bid_price,
    },
    {
      title: "User",
      dataIndex: "user_ref",
      key: "user_ref",
    },
  ];

  const artistDescription =
    "Through the absence of color, you delve into the realm of monochrome, allowing for a focus on contrast, texture, and form. Your artistic style embraces the power of simplicity, utilizing shades of black, white, and the countless nuances in between to create striking compositions. Whether you work with pencils, charcoal, ink, or explore digital mediums, your mastery of grayscale brings depth and a sense of mystery to your creations. Your artworks possess a timeless quality, evoking emotions and inviting viewers to interpret the imagery through their own lens. Within this black and white realm, you skillfully capture the interplay of light and shadow, emphasizing the details that might otherwise be overlooked. ";

  return (
    <>
      <Row justify="space-between">
        <Col span={width > 768 ? 12 : 24}>
          {
            // #region Artwork Container
            <Image.PreviewGroup>
              <Col span={24} className={s.imageContainer}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_URL}/${artworkDetails?.media_cover?.url}`}
                  alt=""
                />
              </Col>

              <Row gutter={[16, 0]}>
                {artworkDetails?.media_gallery?.map((item, index) => {
                  return (
                    <>
                      <Col
                        key={index}
                        xl={{ span: 6 }}
                        lg={{ span: 6 }}
                        md={{ span: 6 }}
                        xs={{ span: 6 }}
                        className={s.detailsImageContainer + " artworkDetails-details-image"}
                      >
                        <Image src={`${process.env.NEXT_PUBLIC_S3_URL}/${item.url}`} alt="" />
                      </Col>
                    </>
                  );
                })}
              </Row>
            </Image.PreviewGroup>
            // #endregion
          }
          {
            // #region Artwork Details
            <Col span={24} className={s.detailsContainer}>
              <Col style={{ marginBottom: "40px" }}>
                <h2>Details</h2>
                <Divider className={s.divider} />
                <p style={{ fontWeight: "bold" }}>{artworkDetails?.title}</p>
                <br />
                <p>by {artworkDetails?.artist?.full_name}</p>
                <br />
                <p>
                  {artworkDetails?.width} x {artworkDetails?.height} cm
                </p>
                <p>{stringCapitalize(`${artworkDetails?.material}`.replace(/_/g, " "))}</p>
                <p>Artist painted this in 1913</p>
                {/* //TODO : Information of the artist// */}
                <br />
                <p style={{ fontWeight: "bold" }}>Description</p>
                <br />
                <p>{artworkDetails?.description} </p>
                <br />
                <p>
                  Item Condition: <span>Good</span>
                </p>
                <br />
                <p>
                  Auction ends:{" "}
                  <span style={{ fontWeight: "bold" }}>
                    {moment.tz(artworkDetails?.stopped_at, timeZone).format("DD MMM YYYY, HH:mm")}{" "}
                    WITA
                  </span>
                </p>
              </Col>
              {
                // #region About Artist Section
                <Col>
                  <h2>About The Artist</h2>
                  <Divider className={s.divider} />
                  <Row gutter={[16, 0]} className={s.artistProfileContainer}>
                    <Col span={width > 768 ? 6 : 24} className={s.image}>
                      <Row>
                        <Col xl={{ span: 8 }} lg={{ span: 8 }} sm={{ span: 4 }} xs={{ span: 8 }}>
                          <Image src="/images/profile-3.jpg" alt="" preview={false} />
                        </Col>
                        {width <= 768 && (
                          <Col style={{ margin: "auto 0px" }}>
                            <h4 style={{ fontWeight: "bold" }}>
                              {artworkDetails?.artist?.full_name}
                            </h4>
                            <p>Artist</p>
                          </Col>
                        )}
                      </Row>
                    </Col>
                    <Col span={width > 768 ? 18 : 24}>
                      {width > 768 && (
                        <>
                          <h4>{artworkDetails?.artist.full_name}</h4>
                          <p>Artist</p>
                        </>
                      )}
                      <br />
                      <p>{artistDescription}</p>
                    </Col>
                  </Row>
                </Col>
                // #endregion
              }
            </Col>
            // #endregion
          }
        </Col>
        <Col span={11}>
          <ThemesContentsAuctionBidDetails
            estimation={auctionDetails?.end_estimation}
            startingBid={auctionDetails?.initial_price}
            step={auctionDetails?.step}
            sticky={false}
            // status={status}
            // bidHistory={logs}
          />
        </Col>
      </Row>

      {randomData && (
        <Col className={s.highlightContainer}>
          <ThemesHeadline title="Auction Highlight" className={s.headline} />
          {width > 768 ? (
            <Row gutter={[16, 16]} justify="flex-start">
              {randomData.map((item, index) => {
                return (
                  <>
                    <Col span={6} className={s.artworkContainer} onClick={handleHighlight}>
                      <Col className={s.artwork}>
                        <Col className={s.imageContainer}>
                          <Image
                            src={`${process.env.NEXT_PUBLIC_S3_URL}/${item?.artwork_details?.media_cover?.url}`}
                            alt=""
                            preview={false}
                          />
                        </Col>
                        <h3>{item?.artwork_details?.title}</h3>
                        <p>Artist</p>
                        <p style={{ fontWeight: "bold" }}>Estimation</p>
                        <p style={{ marginBottom: "0px" }}>
                          IDR {priceFormatter(item.auction_details?.start_estimation, ",")} - IDR{" "}
                          {priceFormatter(item.auction_details?.end_estimation, ",")}
                        </p>
                      </Col>
                    </Col>
                  </>
                );
              })}
            </Row>
          ) : (
            <Col>
              <Carousel dots autoplay slidesToShow={width <= 500 ? 1 : 3}>
                {randomData.map((item, index) => {
                  return (
                    <>
                      <Col span={24} className={s.artworkContainer} onClick={handleHighlight}>
                        <Col className={s.artwork}>
                          <Col className={s.imageContainer}>
                            <Image
                              src={`${process.env.NEXT_PUBLIC_S3_URL}/${item?.artwork_details?.media_cover?.url}`}
                              alt=""
                              preview={false}
                            />
                          </Col>
                          <h3>{item?.artwork_details?.title}</h3>
                          <p>Artist</p>
                          <p style={{ fontWeight: "bold" }}>Estimation</p>
                          <p style={{ marginBottom: "0px" }}>
                            IDR {priceFormatter(item.auction_details?.start_estimation, ",")} - IDR{" "}
                            {priceFormatter(item.auction_details?.end_estimation, ",")}
                          </p>
                        </Col>
                      </Col>
                    </>
                  );
                })}
              </Carousel>
            </Col>
          )}
        </Col>
      )}
    </>
  );
}

export default ThemesContentsAuctionArtworkDetails;
