// Libs
import propTypes from "prop-types";
import moment from "moment";
import { Col, Row, Image, Divider } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

// Helper
import priceFormatter from "app/helpers/priceFormatter";
import stringCapitalize from "app/helpers/capitalize";

// Components
import ThemesButton from "../button";

// Hooks
import { useAuctionItemsLogs } from "app/hooks/auction/logs";

// Styles
import s from "./index.module.scss";

function ThemesAuctionLotsList(props) {
  const { artworkDetails, auctionDetails, auctionData, grid, handleVisible } = props;
  const router = useRouter();
  const { id: auctionId } = router.query;
  const itemId = auctionDetails.id;

  //#region Handle session
  const { data: auctionLogs } = useAuctionItemsLogs({
    auctionId: auctionId,
    itemId: itemId,
    queryString: "",
  });
  //#endregion

  //#region Handle session
  const { data: sessionData } = useSession();
  const session = sessionData?.user?.auction_id === auctionId;
  //#endregion

  //#region User Current Bid
  const matchingLogs = auctionLogs?.filter(
    (logEntry) => logEntry?.user?.phone_number === sessionData?.user?.phone_number
  );
  const currentUserBid = matchingLogs?.[0]?.bid_price;
  //#endregion

  //#region Lots Price
  const lotPrice = priceFormatter(
    `${
      auctionDetails?.current_price ? auctionDetails?.current_price : auctionDetails?.initial_price
    }`,
    ","
  );
  //#endregion

  const todayDate = moment();
  const beforeLotStarted = todayDate.isBefore(auctionDetails?.started_at);
  const afterLotClosed = todayDate.isAfter(auctionDetails?.stopped_at);
  const liveLot = todayDate.isBetween(auctionDetails?.started_at, auctionDetails?.stopped_at);

  //#region Handle button content
  const [buttonContent, setButtonContent] = useState("");
  useEffect(() => {
    if (beforeLotStarted) {
      setButtonContent("START SOON");
    }
    if (liveLot) {
      setButtonContent(session ? "PLACE BID" : "LOGIN TO BID");
    }
    if (artworkDetails?.status === "SOLD" || afterLotClosed) {
      setButtonContent("SEE DETAILS");
    }
  }, [afterLotClosed, artworkDetails?.status, auctionData, beforeLotStarted, liveLot, session]);
  //#endregion

  //#region Handle button
  const handleButton = () => {
    if (!session && liveLot) {
      handleVisible();
    } else {
      router.push(`/auction/${auctionId}/lots/${auctionDetails?.id}`);
    }
  };
  //#endregion

  return (
    <>
      <Col
        span={24}
        className={`${grid ? s.cartContainerGrid : s.cartContainer} ${
          beforeLotStarted ? `` : s.cartHover
        }`}
        onClick={handleButton}
      >
        <Row gutter={[0, 10]} className={s.cartLotsContainer}>
          {
            //#region Image Container
            <Col span={grid ? 24 : 6} className={s.imgSrcContainer}>
              {afterLotClosed ? (
                <Col className={s.tag}>
                  <p>ENDED</p>
                </Col>
              ) : (
                ""
              )}
              {artworkDetails?.status === "SOLD" ? (
                <Col className={s.tag}>
                  <p>SOLD</p>
                </Col>
              ) : (
                ""
              )}

              <Image
                preview={false}
                className={s.imgSrc}
                alt=""
                src={`${process.env.NEXT_PUBLIC_S3_URL}/${artworkDetails?.media_cover?.url}`}
              />
            </Col>
            // #endregion
          }
          {
            // #region Artwork Details Container
            <Col span={grid ? 24 : 8} className={s.descContainer}>
              {!grid && <p>LOT</p>}
              <Col>
                <h2 className={s.title}>{artworkDetails?.title}</h2>
                {artworkDetails?.artist ? <p>by {artworkDetails?.artist?.full_name}</p> : ""}
              </Col>
              {!grid && (
                <Col>
                  <p className={s.description}>{artworkDetails?.description}</p>
                  <p>{`${artworkDetails?.width} x ${artworkDetails?.height} cm`}</p>
                  <p>{stringCapitalize(artworkDetails?.material?.replace(/_/g, " "))}</p>
                </Col>
              )}

              <Col style={{ fontWeight: "bold" }}>
                {grid ? (
                  <p>
                    {moment(auctionDetails?.started_at).format("DD MMMM")} -{" "}
                    {moment(auctionDetails?.stopped_at).format("DD MMMM YYYY")}
                  </p>
                ) : (
                  <>
                    <p>Open: {moment(auctionDetails?.started_at).format("dddd, DD MMMM YYYY")} </p>
                    <p>Close: {moment(auctionDetails?.stopped_at).format("dddd, DD MMMM YYYY")} </p>
                  </>
                )}
              </Col>

              {grid && (
                <Col>
                  <p>
                    Estimation : IDR{" "}
                    {priceFormatter(
                      `${auctionDetails?.start_estimation} - ${auctionDetails?.end_estimation} `,
                      ","
                    )}
                  </p>
                  <h4>
                    {artworkDetails?.status === "PUBLISH" && "Current Bid: "}
                    {artworkDetails?.status === "SOLD" && "Final Bid: "}
                    IDR {lotPrice}
                  </h4>
                  {session && (
                    <Col>
                      <p style={{ fontWeight: "bold" }}>
                        Your Bid: IDR{" "}
                        {currentUserBid ? priceFormatter(`${currentUserBid}`, ",") : "-"}
                      </p>
                    </Col>
                  )}
                </Col>
              )}
            </Col>
            // #endregion
          }

          {
            //#region Divider
            <>
              {!grid && (
                <Divider
                  type="vertical"
                  style={{ margin: "5px 0px", backgroundColor: "grey", height: "auto" }}
                />
              )}
            </>
            // #endregion
          }

          {
            //#region Auction Details Container
            <Col span={grid ? 24 : 8} className={s.priceContainer}>
              {!grid && (
                <>
                  <Col>
                    <p>Estimation :</p>
                    <p>
                      IDR{" "}
                      {priceFormatter(
                        `${auctionDetails?.start_estimation} - ${auctionDetails?.end_estimation} `,
                        ","
                      )}
                    </p>
                  </Col>
                  <Col>
                    <h3>
                      {artworkDetails?.status === "PUBLISH" && "Current Bid: "}
                      {artworkDetails?.status === "SOLD" && "Final Bid: "}
                      IDR {lotPrice}
                    </h3>
                  </Col>

                  {session && (
                    <Col>
                      <h4 style={{ fontWeight: "bold" }}>
                        Your Bid: IDR{" "}
                        {currentUserBid ? priceFormatter(`${currentUserBid}`, ",") : "-"}
                      </h4>
                    </Col>
                  )}
                </>
              )}
              <ThemesButton
                type={`primary + ${s.btn}`}
                onClick={handleButton}
                disabled={beforeLotStarted ? true : false}
              >
                {buttonContent}
              </ThemesButton>
            </Col>
            // #endregion
          }
        </Row>
      </Col>
    </>
  );
}

ThemesAuctionLotsList.propTypes = {
  artworkDetails: propTypes.string.isRequired,
  auctionDetails: propTypes.string.isRequired,
  grid: propTypes.bool,
  auctionData: propTypes.string,
  handleVisible: propTypes.func,
};

export default ThemesAuctionLotsList;
