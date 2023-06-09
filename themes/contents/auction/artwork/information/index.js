// Libs
import { Col, Row, Image, Divider, Table, Carousel } from "antd";
import ThemesButton from "themes/components/libs/button";
import { useState } from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import propTypes, { string } from "prop-types";
import moment from "moment-timezone";

// Helper
import priceFormatter from "app/helpers/priceFormatter";
import { useWindowSize } from "app/helpers/useWindowSize";
import { useSession } from "next-auth/react";

// Style
import s from "./index.module.scss";
import ThemesHeadline from "themes/components/libs/headline";

function ThemesContentsAuctionArtworkDetails(props) {
  const {
    artworkImg,
    mediaGallery,
    title,
    artistProfile,
    artistName,
    artistRole,
    artistDesc,
    imgWidth,
    imgHeight,
    media,
    information,
    description,
    imgCondition,
    conditionDesc,
    lotEnd,
    estimation,
    startingBid,
    step,
    logs,
  } = props;

  const { width } = useWindowSize();

  //? ============== Price Incremental ============= ?//
  const estimationBid = parseInt(estimation);
  const startBid = parseInt(startingBid);

  const [price, setPrice] = useState(startBid);
  const [limit, setLimit] = useState(price);
  const [priceStep, setPriceStep] = useState(step);
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

  //? ============== TimeZone ============= ?//
  const timeZone = moment.tz.guess();
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
      render: (text) => <p>{moment.tz(text, timeZone).format("DD-MM-YYYY | HH:mm:ss")} WITA</p>,
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

  return (
    <>
      <Row justify="space-between">
        <Col span={width > 500 ? 12 : 24}>
          {/* //? ============== Artwork Container ============= ?// */}
          <Image.PreviewGroup>
            <Col span={24} className={s.imageContainer}>
              <Image src={`${process.env.NEXT_PUBLIC_S3_URL}/${artworkImg}`} alt="" />
            </Col>

            <Row gutter={[16, 0]}>
              {mediaGallery?.map((item, index) => {
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
          {/* // * ====================================== * // */}

          {/* //? ============== Artwork Details ============= ?// */}
          <Col span={24} className={s.detailsContainer}>
            <Col style={{ marginBottom: "40px" }}>
              <h2>Details</h2>
              <Divider className={s.divider} />
              <p style={{ fontWeight: "bold" }}>{title}</p>
              <br />
              <p>by {artistName}</p>
              <br />
              <p>
                {imgWidth} x {imgHeight} cm
              </p>
              <p>{media}</p>
              <p>{information}</p>
              <br />
              <p style={{ fontWeight: "bold" }}>Description</p>
              <br />
              <p>{description} </p>
              <br />
              <p>
                Item Condition: <span>{imgCondition}</span>
              </p>
              <br />
              <p>
                Auction ends:{" "}
                <span style={{ fontWeight: "bold" }}>
                  {moment.tz(lotEnd, timeZone).format("DD MMM YYYY, HH:mm")} WITA
                </span>
              </p>
            </Col>
            <Col>
              <h2>About The Artist</h2>
              <Divider className={s.divider} />
              <Row gutter={[16, 0]} className={s.artistProfileContainer}>
                <Col span={width > 768 ? 6 : 24} className={s.image}>
                  <Row>
                    <Col span={8}>
                      <Image src="/images/profile-3.jpg" alt="" preview={false} />
                    </Col>
                    {width <= 768 && (
                      <Col style={{ margin: "auto 0px" }}>
                        <h4>{artistName}</h4>
                        <p>{artistRole}</p>
                      </Col>
                    )}
                  </Row>
                </Col>
                <Col span={width > 768 ? 18 : 24}>
                  {width > 768 && (
                    <>
                      <h4>{artistName}</h4>
                      <p>{artistRole}</p>
                    </>
                  )}
                  <br />
                  <p>{artistDesc}</p>
                </Col>
              </Row>
            </Col>
          </Col>
          {/* // * ====================================== * // */}
        </Col>
        {width > 500 && (
          <Col span={11}>
            <Col className={s.lotContainer}>
              {/* //? ============== Lot Details ============= ?// */}
              <Col span={24} className={s.lotDetails}>
                <h2>
                  {parseInt(latestBidPrice) === parseInt(estimationBid)
                    ? "Final Price"
                    : "Current price"}
                  : IDR {latestBidPrice ? priceFormatter(`${latestBidPrice}`, ",") : 0}
                </h2>

                <p>Estimation: IDR {priceFormatter(`${estimation}`, ",")}</p>
                <Col className={s.reminder}>
                  <p style={{ textAlign: "center" }}>
                    {parseInt(latestBidPrice) === parseInt(estimationBid) ? (
                      <span>Reserve price has been met</span>
                    ) : (
                      ""
                    )}
                  </p>
                </Col>
                <Row className={s.priceBidder} justify="space-between">
                  <Col className={s.buttonContainer}>
                    <ThemesButton
                      type={`${price === limit ? "disable" : "primary"} + ${s.btn}`}
                      onClick={handleDecrement}
                      disabled={price === limit}
                    >
                      <MinusOutlined />
                    </ThemesButton>
                  </Col>
                  <Col style={{ margin: "0 10px" }}>
                    <p style={{ fontWeight: "bold" }}>IDR {priceFormatter(`${price}`, ",")}</p>
                  </Col>
                  <Col className={s.buttonContainer}>
                    <ThemesButton
                      type={`${price === estimationBid ? "disable" : "primary"}  + ${s.btn}`}
                      onClick={handleIncrement}
                      disabled={price === estimationBid}
                    >
                      <PlusOutlined />
                    </ThemesButton>
                  </Col>
                </Row>
                <ThemesButton
                  type={`primary + ${s.btn}`}
                  onClick={handleBid}
                  disabled={isCurrentPriceMatch}
                >
                  PLACE BID
                </ThemesButton>

                {/* //? ============== Bid History ============= ?// */}
                <Col span={24} className={s.bidContainer}>
                  <h2>Bid History</h2>
                  <Divider className={s.divider} />
                  <Table
                    columns={columns}
                    dataSource={logsHistory}
                    pagination={{ pageSize: 5 }}
                    size={width < 1024 ? "small" : ""}
                  />
                </Col>
                {/* // * ====================================== * // */}
              </Col>
              {/* // * ====================================== * // */}
            </Col>
          </Col>
        )}
      </Row>

      {/* //? ============== Auction Highlight ============= ?// */}
      {/* //TODO : Not yet get auction artwork data// */}
      <Col className={s.highlightContainer}>
        <ThemesHeadline title="Auction Highlight" className={s.headline} />
        {width > 500 ? (
          <Row gutter={[16, 16]} justify="space-between">
            <Col span={width > 500 ? 6 : 22} className={s.artworkContainer}>
              <Col className={s.artwork}>
                <Col className={s.imageContainer}>
                  <Image src="/images/artwork-1.jpg" alt="" preview={false} />
                </Col>
                <h3>Mona Lisa</h3>
                <p>Artist</p>
                <p style={{ fontWeight: "bold" }}>Estimation</p>
                <p style={{ marginBottom: "0px" }}>IDR 2.000.000 - IDR 5.000.000</p>
              </Col>
            </Col>
            <Col span={width > 500 ? 6 : 22} className={s.artworkContainer}>
              <Col className={s.artwork}>
                <Col className={s.imageContainer}>
                  <Image src="/images/artwork-1.jpg" alt="" preview={false} />
                </Col>
                <h3>Mona Lisa</h3>
                <p>Artist</p>
                <p style={{ fontWeight: "bold" }}>Estimation</p>
                <p style={{ marginBottom: "0px" }}>IDR 2.000.000 - IDR 5.000.000</p>
              </Col>
            </Col>
            <Col span={width > 500 ? 6 : 22} className={s.artworkContainer}>
              <Col className={s.artwork}>
                <Col className={s.imageContainer}>
                  <Image src="/images/artwork-1.jpg" alt="" preview={false} />
                </Col>
                <h3>Mona Lisa</h3>
                <p>Artist</p>
                <p style={{ fontWeight: "bold" }}>Estimation</p>
                <p style={{ marginBottom: "0px" }}>IDR 2.000.000 - IDR 5.000.000</p>
              </Col>
            </Col>
            <Col span={width > 500 ? 6 : 22} className={s.artworkContainer}>
              <Col className={s.artwork}>
                <Col className={s.imageContainer}>
                  <Image src="/images/artwork-1.jpg" alt="" preview={false} />
                </Col>
                <h3>Mona Lisa</h3>
                <p>Artist</p>
                <p style={{ fontWeight: "bold" }}>Estimation</p>
                <p style={{ marginBottom: "0px" }}>IDR 2.000.000 - IDR 5.000.000</p>
              </Col>
            </Col>
          </Row>
        ) : (
          <Col>
            <Carousel dots autoplay>
              <Col span={width > 500 ? 6 : 22} className={s.artworkContainer}>
                <Col className={s.artwork}>
                  <Col className={s.imageContainer}>
                    <Image src="/images/artwork-1.jpg" alt="" preview={false} />
                  </Col>
                  <h3>Mona Lisa</h3>
                  <p>Artist</p>
                  <p style={{ fontWeight: "bold" }}>Estimation</p>
                  <p style={{ marginBottom: "0px" }}>IDR 2.000.000 - IDR 5.000.000</p>
                </Col>
              </Col>
              <Col span={width > 500 ? 6 : 22} className={s.artworkContainer}>
                <Col className={s.artwork}>
                  <Col className={s.imageContainer}>
                    <Image src="/images/artwork-1.jpg" alt="" preview={false} />
                  </Col>
                  <h3>Mona Lisa</h3>
                  <p>Artist</p>
                  <p style={{ fontWeight: "bold" }}>Estimation</p>
                  <p style={{ marginBottom: "0px" }}>IDR 2.000.000 - IDR 5.000.000</p>
                </Col>
              </Col>
              <Col span={width > 500 ? 6 : 22} className={s.artworkContainer}>
                <Col className={s.artwork}>
                  <Col className={s.imageContainer}>
                    <Image src="/images/artwork-1.jpg" alt="" preview={false} />
                  </Col>
                  <h3>Mona Lisa</h3>
                  <p>Artist</p>
                  <p style={{ fontWeight: "bold" }}>Estimation</p>
                  <p style={{ marginBottom: "0px" }}>IDR 2.000.000 - IDR 5.000.000</p>
                </Col>
              </Col>
              <Col span={width > 500 ? 6 : 22} className={s.artworkContainer}>
                <Col className={s.artwork}>
                  <Col className={s.imageContainer}>
                    <Image src="/images/artwork-1.jpg" alt="" preview={false} />
                  </Col>
                  <h3>Mona Lisa</h3>
                  <p>Artist</p>
                  <p style={{ fontWeight: "bold" }}>Estimation</p>
                  <p style={{ marginBottom: "0px" }}>IDR 2.000.000 - IDR 5.000.000</p>
                </Col>
              </Col>
            </Carousel>
          </Col>
        )}
      </Col>
      {/* // * ====================================== * // */}
    </>
  );
}

ThemesContentsAuctionArtworkDetails.propTypes = {
  artworkImg: propTypes.string,
  mediaGallery: propTypes.string,
  title: propTypes.string,
  artistProfile: propTypes.string,
  artistName: propTypes.string,
  artistRole: propTypes.string,
  artistDesc: propTypes.string,
  imgWidth: propTypes.string,
  imgHeight: propTypes.string,
  media: propTypes.string,
  information: propTypes.string,
  description: propTypes.string,
  imgCondition: propTypes.string,
  conditionDesc: propTypes.string,
  lotEnd: propTypes.string,
  estimation: propTypes.string,
  startingBid: propTypes.string,
  step: propTypes.string,
  logs: propTypes.string,
};

export default ThemesContentsAuctionArtworkDetails;
