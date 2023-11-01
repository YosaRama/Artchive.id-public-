// Libs
import { Col } from "antd";
import ThemesButton from "themes/components/libs/button";
import { useState, useEffect } from "react";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";

import propTypes from "prop-types";

import moment from "moment-timezone";

// Components
import ThemesModalAuctionLogin from "themes/components/libs/modal-auction-login";

// Helper
import priceFormatter from "app/helpers/priceFormatter";
import { useWindowSize } from "app/helpers/useWindowSize";
import { useSession } from "next-auth/react";

// Style
import s from "./index.module.scss";
import { useRouter } from "next/router";
import { useAuctionItem } from "app/hooks/auction/item";

function ThemesContentsAuctionBidDetails(props) {
  const { estimation, startingBid, step, sticky, status, bidHistory } = props;

  const router = useRouter();
  const { id: auctionId, lotId: artworkId } = router.query;
  const { data: auctionItem } = useAuctionItem({ singleId: artworkId, auctionId: auctionId });
  const initialPrice = auctionItem?.auction_details?.initial_price;

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

  // #region Check User and Visibility of Modal
  const [isVisible, setIsVisible] = useState(false);
  const handleModal = () => {
    setIsVisible(!isVisible);
  };
  //#endregion

  const todayDate = moment();
  const beforeLotStarted = todayDate.isBefore(auctionItem?.auction_details?.started_at);
  const afterLotClosed = todayDate.isAfter(auctionItem?.auction_details?.stopped_at);
  const liveLot = todayDate.isBetween(
    auctionItem?.auction_details?.started_at,
    auctionItem?.auction_details?.stopped_at
  );

  //#region Handle button content
  const [buttonContent, setButtonContent] = useState("");
  useEffect(() => {
    if (beforeLotStarted) {
      setButtonContent("START SOON");
    }
    if (liveLot) {
      setButtonContent(
        session && session?.data?.user?.role === "auction-participant"
          ? "PLACE BID"
          : "LOGIN TO BID"
      );
    }
    if (auctionItem?.artwork_details?.status === "SOLD" || afterLotClosed) {
      setButtonContent("SEE DETAILS");
    }
  }, [afterLotClosed, auctionItem?.artwork_details?.status, beforeLotStarted, liveLot, session]);
  //#endregion

  //#region Handle button
  const handleButton = () => {
    handleVisible();
  };
  //#endregion

  const iframeParams = `userId=${session?.data?.user?.id}&userName=${session?.data?.user?.full_name}&eventId=${auctionId}&itemId=${artworkId}&initialPrice=${initialPrice}&step=${step}`;

  return (
    <>
      {width > 768 && !sticky && (
        <Col span={24} className={s.lotContainer}>
          {/* //? ============== Lot Details ============= ?// */}
          <Col span={24} className={s.lotDetails}>
            {session && session?.data?.user?.role === "auction-participant" ? (
              <iframe
                title="Auction History"
                className={s.bidBoardIframeDesktop}
                src={`https://auctioo-id.vercel.app/live-auction?mode=desktop&${iframeParams}`}
              />
            ) : (
              <>
                <Col className={s.warning}>
                  <h3>Sorry, you are not allowed to bid in this lot item.</h3>
                  <p>
                    Please please check your participant account id on your email or login here if
                    already have this auction participant account!
                  </p>
                  <ThemesButton type={`primary + ${s.btn}`} onClick={handleModal}>
                    {buttonContent}
                  </ThemesButton>
                </Col>
              </>
            )}
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
            {session && session?.data?.user?.role === "auction-participant" ? (
              <iframe
                title="Auction History"
                className={s.bidBoardIframeMobile}
                src={`https://auctioo-id.vercel.app/live-auction?mode=mobile&${iframeParams}`}
              />
            ) : (
              <>
                <p>
                  Sorry, you are not allowed to bid in this lot item. please check your participant
                  account or login here!
                </p>{" "}
                <ThemesButton type={`primary + ${s.btn}`} onClick={handleModal}>
                  {buttonContent}
                </ThemesButton>
              </>
            )}
            {/* // * ====================================== * // */}
          </Col>
          {/* // * ====================================== * // */}
        </Col>
      )}

      {
        // #region Modal Login Auction
        <ThemesModalAuctionLogin visible={isVisible} handleModal={handleModal} />
        // #endregion
      }
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
