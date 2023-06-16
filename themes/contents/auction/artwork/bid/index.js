// Libs
import { Col, Row, Image, Divider, Table, Carousel, Affix } from "antd";
import ThemesButton from "themes/components/libs/button";
import { useState } from "react";
import { MinusOutlined, PlusOutlined, CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
import propTypes, { string } from "prop-types";
import moment from "moment-timezone";

// Components
import ThemesHeadline from "themes/components/libs/headline";

// Helper
import priceFormatter from "app/helpers/priceFormatter";
import { useWindowSize } from "app/helpers/useWindowSize";
import { useSession } from "next-auth/react";

// Style
import s from "./index.module.scss";

function ThemesContentsAuctionBidDetails(props) {
  const { estimation, startingBid, step, sticky, status, bidHistory } = props;

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
  const [logsHistory, setLogsHistory] = useState(status == "SOLD" ? bidHistory : []);
  const session = useSession();

  const handleBid = () => {
    const newLog = {
      user_ref: <p>{session.data.user.full_name}</p>,
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
            return `${Math.floor(seconds)} sec ago`;
          } else if (seconds < 3600) {
            return `${Math.floor(seconds / 60)} min ago`;
          } else if (seconds < 86400) {
            return `${Math.floor(seconds / 3600)} hrs ago`;
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

  //? ============== Handle Collapse ============= ?//
  const [open, setOpen] = useState(false);
  const handleCollapse = () => {
    setOpen(!open);
  };
  // * ====================================== * //

  return (
    <>
      {width > 768 && !sticky && (
        <Col span={24} className={s.lotContainer}>
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
                  type={`${price === limit || status == "SOLD" ? "disable" : "primary"} + ${s.btn}`}
                  onClick={handleDecrement}
                  disabled={price === limit}
                >
                  <MinusOutlined />
                </ThemesButton>
              </Col>
              <Col style={{ margin: "0 10px" }}>
                <p style={{ fontWeight: "bold" }}>
                  IDR {priceFormatter(status == "SOLD" ? `${latestBidPrice}` : `${price}`, ",")}
                </p>
              </Col>
              <Col className={s.buttonContainer}>
                <ThemesButton
                  type={`${
                    price === estimationBid || status == "SOLD" ? "disable" : "primary"
                  }  + ${s.btn}`}
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
              disabled={isCurrentPriceMatch || status == "SOLD"}
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
                size={width > 1024 ? "large" : width >= 500 ? "small" : "middle"}
              />
            </Col>
            {/* // * ====================================== * // */}
          </Col>
          {/* // * ====================================== * // */}
        </Col>
      )}

      {width <= 768 && sticky && (
        <Col span={24} className={`${s.lotContainerSticky} ${open ? s.openCollapse : s.collapse}`}>
          {/* //? ============== Lot Details ============= ?// */}

          <Col className={s.collapseButton} onClick={handleCollapse}>
            {!open ? <CaretUpOutlined /> : <CaretDownOutlined />}
          </Col>
          <Col span={24} className={s.lotDetails}>
            <h2>
              {parseInt(latestBidPrice) === parseInt(estimationBid)
                ? "Final Price"
                : "Current price"}
              : IDR {latestBidPrice ? priceFormatter(`${latestBidPrice}`, ",") : 0}
            </h2>

            <Row className={s.priceBidder} justify="space-between">
              <Col className={s.buttonContainer}>
                <ThemesButton
                  type={`${price === limit || status == "SOLD" ? "disable" : "primary"} + ${s.btn}`}
                  onClick={handleDecrement}
                  disabled={price === limit}
                >
                  <MinusOutlined />
                </ThemesButton>
              </Col>
              <Col style={{ margin: "0 10px" }}>
                <p style={{ fontWeight: "bold" }}>
                  IDR {priceFormatter(status == "SOLD" ? `${latestBidPrice}` : `${price}`, ",")}
                </p>
              </Col>
              <Col className={s.buttonContainer}>
                <ThemesButton
                  type={`${
                    price === estimationBid || status == "SOLD" ? "disable" : "primary"
                  }  + ${s.btn}`}
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
              disabled={isCurrentPriceMatch || status == "SOLD"}
            >
              PLACE BID
            </ThemesButton>

            {/* //? ============== Bid History ============= ?// */}
            {open && (
              <Col span={24} className={s.bidContainer}>
                <h2>Bid History</h2>
                <Divider className={s.divider} />
                {width > 500 ? (
                  <Table
                    columns={columns}
                    dataSource={logsHistory}
                    pagination={{ pageSize: 5 }}
                    size={width > 1024 ? "large" : width >= 500 ? "small" : "middle"}
                  />
                ) : (
                  <Col className={s.scrollable}>
                    {logsHistory.toReversed().map((item, index) => {
                      const createdTime = moment.tz(item.created_at, timeZone); // Example created time
                      const currentTime = moment(); // Example current time

                      const duration = moment.duration(currentTime.diff(createdTime));
                      const timePassed = formatTimePassed(duration);

                      function formatTimePassed(duration) {
                        const seconds = duration.asSeconds();

                        if (seconds < 60) {
                          return `${Math.floor(seconds)} sec ago`;
                        } else if (seconds < 3600) {
                          return `${Math.floor(seconds / 60)} min ago`;
                        } else if (seconds < 86400) {
                          return `${Math.floor(seconds / 3600)} hrs ago`;
                        } else {
                          return `${Math.floor(seconds / 86400)} days ago`;
                        }
                      }
                      return (
                        <Col key={index} className={s.bidHistory}>
                          <h3>IDR {priceFormatter(item.bid_price, ",")}</h3>
                          {/* //TODO : Make thid based on real data// */}
                          <p>by {item.user_ref}</p>
                          <p style={{ color: "GAINSBORO" }}>{timePassed}</p>
                        </Col>
                      );
                    })}
                  </Col>
                )}
              </Col>
            )}

            {/* // * ====================================== * // */}
          </Col>
          {/* // * ====================================== * // */}
        </Col>
      )}
    </>
  );
}

ThemesContentsAuctionBidDetails.propTypes = {
  estimation: propTypes.string,
  startingBid: propTypes.string,
  step: propTypes.string,
  sticky: propTypes.string,
  status: propTypes.string,
  bidHistory: propTypes.string,
};

export default ThemesContentsAuctionBidDetails;
