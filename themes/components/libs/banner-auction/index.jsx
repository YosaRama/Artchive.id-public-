// Libs
import { Col, Row } from "antd";
import propTypes from "prop-types";
import moment from "moment";

// Helper
import { useSession } from "next-auth/react";
import { useWindowSize } from "app/helpers/useWindowSize";
import nameAbbreviation from "app/helpers/nameAbbreviation";

// Style
import s from "./index.module.scss";

function ThemesBannerAuctionItem(props) {
  const { title, startDate, endDate, placeName, loading } = props;
  const { data: session } = useSession();
  const userName = session?.user?.full_name;
  const { width } = useWindowSize();

  //? ============== Countdown Timer ============= ?//
  const targetMoment = moment(endDate);
  const currentMoment = moment();
  const duration = moment.duration(targetMoment.diff(currentMoment));
  const remainingDays = Math.floor(duration.asDays());

  return (
    loading && (
      <Row className={s.bannerItem}>
        <Col span={24} className={s.description}>
          <h2>{title}</h2>
          {session && session.user.role === "auction-participant" && (
            <h3>Welcome, {width <= 500 ? nameAbbreviation(userName, 14) : userName}</h3>
          )}

          <p style={{ marginBottom: "0px" }}>
            Started on {moment(startDate).format("dddd, DD MMMM YYYY")}
            {placeName && `| {placeName}`}
          </p>
          <p style={{ marginBottom: "0px" }}>
            {currentMoment.isBefore(targetMoment)
              ? `${remainingDays} day${remainingDays > 1 ? "s" : ""} before the lot closed`
              : "This auction already ended"}
          </p>
        </Col>
      </Row>
    )
  );
}

propTypes.ThemesBannerAuctionItem = {
  title: propTypes.string,
  todayDate: propTypes.string,
  startDate: propTypes.string,
  endDate: propTypes.string,
  placeName: propTypes.string,
  loading: propTypes.any,
};

export default ThemesBannerAuctionItem;
