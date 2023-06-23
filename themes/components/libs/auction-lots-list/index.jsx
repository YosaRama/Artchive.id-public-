// Libs
import propTypes from "prop-types";
import moment from "moment-timezone";
import { Col, Row, Image, Divider } from "antd";
import { useRouter } from "next/router";

// Helper
import priceFormatter from "app/helpers/priceFormatter";
import stringCapitalize from "app/helpers/capitalize";

// Styles
import s from "./index.module.scss";

// Icons
import ThemesButton from "../button";
import user from "prisma/seeds/user";

function ThemesAuctionLotsList(props) {
  const {
    artworkDetails,
    auctionDetails,
    grid,
    userRegistered,
    isPrivate,
    handleVisible,
    auctionData,
  } = props;
  const router = useRouter();

  //? ============== Timeline ============= ?//
  const timeZone = moment.tz.guess();
  const todayDate = moment.tz();
  const beforeLotStarted = todayDate.isBefore(auctionDetails?.started_at);
  const afterLotClosed = todayDate.isAfter(auctionDetails?.stopped_at);
  const liveLot = todayDate.isBetween(auctionDetails?.started_at, auctionDetails?.stopped_at);
  const afterEvent = todayDate.isAfter(auctionData?.end_date);

  return (
    <>
      <Col
        span={24}
        className={`${grid ? s.cartContainerGrid : s.cartContainer} ${
          beforeLotStarted ? `` : s.cartHover
        }`}
        onClick={
          userRegistered || afterLotClosed
            ? () => router.push(`/auction/${auctionDetails.id}/lots/${artworkDetails?.slug}`)
            : handleVisible
        }
      >
        <Row gutter={[0, 10]} className={s.cartLotsContainer}>
          {/* //? ============== Image Container ============= ?// */}
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
          {/* // * ====================================== * // */}

          {/* //? ============== Artwork Details Container ============= ?// */}

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
                <p>{stringCapitalize(artworkDetails?.material.replace(/_/g, " "))}</p>
              </Col>
            )}

            {grid ? (
              <Col>
                <>
                  <p>
                    {moment.tz(auctionDetails?.started_at, timeZone).format("DD MMMM")} -{" "}
                    {moment.tz(auctionDetails?.stopped_at, timeZone).format("DD MMMM YYYY")}
                  </p>
                </>
              </Col>
            ) : (
              <Col>
                <>
                  <p>
                    Open:{" "}
                    {moment.tz(auctionDetails?.started_at, timeZone).format("DD MMMM YYYY | HH:mm")}{" "}
                    WITA
                  </p>
                  <p>
                    Close:{" "}
                    {moment.tz(auctionDetails?.stopped_at, timeZone).format("DD MMMM YYYY | HH:mm")}{" "}
                    WITA
                  </p>
                </>
              </Col>
            )}

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
                  IDR {priceFormatter(auctionDetails?.initial_price, ",")}
                </h4>
                {userRegistered && (
                  <Col>
                    <p style={{ fontWeight: "bold" }}>Your Bid: IDR -</p>
                  </Col>
                )}
              </Col>
            )}
          </Col>
          {/* // * ====================================== * // */}

          {!grid && (
            <Divider
              type="vertical"
              style={{ margin: "5px 0px", backgroundColor: "grey", height: "auto" }}
            />
          )}

          {/* //? ============== Auction Details Container ============= ?// */}

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
                    IDR {priceFormatter(auctionDetails?.initial_price, ",")}
                  </h3>
                </Col>

                {userRegistered && (
                  <Col>
                    <h4 style={{ fontWeight: "bold" }}>Your Bid: IDR -</h4>
                  </Col>
                )}
              </>
            )}
            <ThemesButton
              type={`primary + ${s.btn}`}
              onClick={() => {
                if (!userRegistered) {
                  handleVisible();
                } else {
                  () => router.push(`/auction/${auctionDetails.id}/lots/${artworkDetails?.slug}`);
                }
              }}
              disabled={beforeLotStarted ? true : false}
            >
              {userRegistered && "PLACE BID"}
              {!userRegistered && "LOGIN TO BID"}
              {beforeLotStarted && "START SOON"}
              {artworkDetails?.status === "SOLD" && afterLotClosed && "SEE DETAILS"}
            </ThemesButton>
          </Col>
          {/* // * ====================================== * // */}
        </Row>
      </Col>
    </>
  );
}

ThemesAuctionLotsList.propTypes = {
  artworkDetails: propTypes.string.isRequired,
  auctionDetails: propTypes.string.isRequired,
  userRegistered: propTypes.bool,
  grid: propTypes.bool,
  isPrivate: propTypes.bool,
  auctionData: propTypes.string,
  handleVisible: propTypes.func,
};

export default ThemesAuctionLotsList;
