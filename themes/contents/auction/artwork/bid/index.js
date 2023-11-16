// Libs
import { Col, Divider, Row } from "antd";
import ThemesButton from "themes/components/libs/button";
import { useState, useEffect } from "react";
import { CaretUpOutlined, CaretDownOutlined, InfoCircleOutlined } from "@ant-design/icons";
import propTypes from "prop-types";
import moment from "moment-timezone";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

// Components
import ThemesModalAuctionLogin from "themes/components/libs/modal-auction-login";

// Helper
import priceFormatter from "app/helpers/priceFormatter";
import { useWindowSize } from "app/helpers/useWindowSize";

// Hooks
import { useAuctionItem } from "app/hooks/auction/item";

// Style
import s from "./index.module.scss";
import { useAuctionUser } from "app/hooks/auction/user";

function ThemesContentsAuctionBidDetails(props) {
  const { estimation, startingBid, step, sticky, status, bidHistory } = props;
  const session = useSession();
  const router = useRouter();
  const { id: auctionId, lotId: artworkId } = router.query;
  const { data: auctionItem } = useAuctionItem({ singleId: artworkId, auctionId: auctionId });
  const initialPrice = auctionItem?.auction_details?.initial_price;

  const { width } = useWindowSize();

  //#region Handle Collapse
  const [open, setOpen] = useState(false);
  const handleCollapse = () => {
    setOpen(!open);
  };
  //#endregion

  // #region Check User and Visibility of Modal
  const [isVisible, setIsVisible] = useState(false);
  const handleModal = () => {
    setIsVisible(!isVisible);
  };
  //#endregion

  //#region Moment Timezone
  const timeZone = moment.tz.guess();
  const todayDate = moment();
  const beforeLotStarted = todayDate.isBefore(auctionItem?.auction_details?.started_at);
  const afterLotClosed = todayDate.isAfter(auctionItem?.auction_details?.stopped_at);
  const liveLot = todayDate.isBetween(
    auctionItem?.auction_details?.started_at,
    auctionItem?.auction_details?.stopped_at
  );
  //#endregion

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

  //#region Handle winner section
  const { data: winnerDetails } = useAuctionUser({
    singleId: auctionItem?.auction_details?.winner,
    auctionId: auctionId,
  });

  const bidStatus = auctionItem?.auction_details?.item_status;
  const winnerName = winnerDetails?.name;
  const finalPrice = auctionItem?.auction_details?.final_price;
  const closedAt = auctionItem?.auction_details?.closed_at;
  const winnerId = auctionItem?.auction_details?.winner;

  const iframeParams = `userId=${session?.data?.user?.id}&userName=${session?.data?.user?.full_name}&eventId=${auctionId}&itemId=${artworkId}&initialPrice=${initialPrice}&step=${step}`;

  return (
    <>
      {width > 768 && !sticky && (
        <Col span={24} className={s.lotContainer}>
          {/* //? ============== Lot Details ============= ?// */}
          <Col span={24} className={s.lotDetails}>
            {session && session?.data?.user?.role === "auction-participant" ? (
              bidStatus === "READY" ? (
                <>
                  <iframe
                    title="Auction History"
                    className={s.bidBoardIframeDesktop}
                    src={`https://auctioo-id.vercel.app/live-auction?mode=desktop&${iframeParams}`}
                  />
                  <Row className={s.info}>
                    <Col span={1}>
                      <InfoCircleOutlined />
                    </Col>
                    <Col span={23}>
                      <p>Bid increments or decrements : 10% of Initial Price</p>
                      <p>This Lot Initial Price : IDR {priceFormatter(`${initialPrice}`, ",")}</p>
                    </Col>
                  </Row>
                </>
              ) : (
                bidStatus === "CLOSED" && (
                  <Col className={s.final}>
                    <h2>
                      Congratulations, <span>Bidder {winnerName}</span>!
                    </h2>
                    <h3>You are the proud winner of this lot!</h3>
                    <Divider style={{ margin: "8px 0px" }} />
                    <h4>
                      Winning bid : <span>IDR {priceFormatter(`${finalPrice}`, ",")}</span>
                    </h4>
                    <h4>
                      This item met the requirements and officially closed on{" "}
                      <span>
                        {/* {moment(closedAt).format("LL, LT")}  */}
                        Tuesday, 28 November 2023
                      </span>
                    </h4>
                    {winnerId === session?.data?.user?.id && (
                      <p>
                        <InfoCircleOutlined /> Please get in touch with our admin to proceed with
                        the purchase details and complete the process.
                      </p>
                    )}
                  </Col>
                )
              )
            ) : (
              <>
                <Col className={s.warning}>
                  <h3>Sorry, you are not allowed to bid.</h3>
                  <p>
                    <InfoCircleOutlined /> Please please check your participant account id on your
                    email or login here if already have this auction participant account!
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
          {session &&
            session?.data?.user?.role === "auction-participant" &&
            bidStatus === "READY" && (
              <Col className={s.collapseButton} onClick={handleCollapse}>
                {!open ? <CaretUpOutlined /> : <CaretDownOutlined />}
              </Col>
            )}

          <Col span={24} className={s.lotDetails}>
            {session && session?.data?.user?.role === "auction-participant" ? (
              bidStatus === "READY" ? (
                <>
                  <iframe
                    title="Auction History"
                    className={s.bidBoardIframeMobile}
                    src={`https://auctioo-id.vercel.app/live-auction?mode=mobile&${iframeParams}`}
                  />
                  <Row gutter={[10]} className={s.info}>
                    <Col lg={{ span: 1 }} md={{ span: 1 }} xs={{ span: 2 }}>
                      <InfoCircleOutlined />
                    </Col>
                    <Col span={22}>
                      <p>Bid increments or decrements : 10% of Initial Price</p>
                      <p>This Lot Initial Price : IDR {priceFormatter(`${initialPrice}`, ",")}</p>
                    </Col>
                  </Row>
                </>
              ) : (
                bidStatus === "CLOSED" && (
                  <Col className={s.final}>
                    <h2>
                      Congratulations, <span>Bidder {winnerName}</span>!
                    </h2>
                    <h3>You&apos;ve secured the winning bid!</h3>
                    <h4>
                      Winning bid : <span>IDR {priceFormatter(`${finalPrice}`, ",")}</span>
                    </h4>
                    <h4>
                      Closed on{" "}
                      <span>
                        {/* {moment(closedAt).format("LL, LT")}  */}
                        Tuesday, 28 November 2023
                      </span>
                    </h4>
                    {winnerId === session?.id && (
                      <p>
                        <InfoCircleOutlined /> Contact admin to finalize your purchase.
                      </p>
                    )}
                  </Col>
                )
              )
            ) : (
              <>
                <Col className={s.warning}>
                  <h3>Sorry, you are not allowed to bid.</h3>
                  <p>
                    <InfoCircleOutlined /> Please please check your participant account id on your
                    email or login here if already have this auction participant account!
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
