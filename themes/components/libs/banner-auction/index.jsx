// Libs
import { Col, Row } from "antd";
import propTypes from "prop-types";
import { useRouter } from "next/router";
import moment from "moment";

// Helper
import { useSession } from "next-auth/react";
import { useWindowSize } from "app/helpers/useWindowSize";
import nameAbbreviation from "app/helpers/nameAbbreviation";
import { auction_details } from "app/database/dummy/overview";

// Style
import s from "./index.module.scss";
import ThemesButton from "../button";

function ThemesBannerAuctionItem(props) {
  const { title, startDate, endDate, placeName, loading, overview, auctionDetails, auctionId } =
    props;
  const { data: session } = useSession();
  const userName = session?.user?.full_name;
  const { width } = useWindowSize();
  const router = useRouter();

  //? ============== Countdown Timer ============= ?//
  const targetMoment = moment(endDate);
  const currentMoment = moment();
  const duration = moment.duration(targetMoment.diff(currentMoment));
  const remainingDays = Math.floor(duration.asDays());

  return (
    loading &&
    (overview ? (
      <>
        <Col className={s.title}>
          <h1>{auctionDetails?.name}</h1>
          <h2>{auctionDetails?.sub_name}</h2>
          <br />
          <h4>
            {/* {moment(startDate).format("dddd, DD MMMM, YYYY")} -{" "}
            {moment(endDate).format("dddd, DD MMMM, YYYY")} */}
            Thursday, 16 November, 2023 - Sunday, 31 December, 2023
          </h4>
          <Row gutter={[40]} justify="center" align="middle">
            <Col xl={{ span: 6 }} lg={{ span: 6 }} md={{ span: 8 }} xs={{ span: 24 }}>
              <ThemesButton
                type={`primary + ${s.btnLot}`}
                size="large"
                onClick={() => router.push(`/auction/${auctionId}/lots/`)}
              >
                PLACE BID NOW!
              </ThemesButton>
            </Col>
            <Col xl={{ span: 6 }} lg={{ span: 6 }} md={{ span: 8 }} xs={{ span: 24 }}>
              <ThemesButton type={`secondary + ${s.btnLot}`} size="large">
                <a href={auction_details?.catalogue_url} target="_blank" rel="noreferrer">
                  E-CATALOGUE
                </a>
              </ThemesButton>
            </Col>
          </Row>
        </Col>
      </>
    ) : (
      <Row className={s.bannerItem}>
        <Col span={24} className={s.description}>
          <h2>{title}</h2>
          {session && session.user.role === "auction-participant" && (
            <h3>Welcome, {width <= 500 ? nameAbbreviation(userName, 14) : userName}</h3>
          )}

          <p style={{ marginBottom: "0px" }}>
            {/* Started on {moment(startDate).format("dddd, DD MMMM YYYY")}
            {placeName && `| {placeName}`} */}
            Started on Thursday, 16 November 2023
          </p>
          {/* <p style={{ marginBottom: "0px" }}>
            {currentMoment.isBefore(targetMoment)
              ? `${remainingDays} day${remainingDays > 1 ? "s" : ""} before the lot closed`
              : "This auction already ended"}
          </p> */}
        </Col>
      </Row>
    ))
  );
}

propTypes.ThemesBannerAuctionItem = {
  title: propTypes.string,
  todayDate: propTypes.string,
  startDate: propTypes.string,
  endDate: propTypes.string,
  placeName: propTypes.string,
  loading: propTypes.any,
  overview: propTypes.bool,
  auctionDetails: propTypes.string,
  auctionId: propTypes.string,
};

export default ThemesBannerAuctionItem;
