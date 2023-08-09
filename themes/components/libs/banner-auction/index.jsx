// Libs
import { Col, Row } from "antd";
import { useRouter } from "next/router";
import propTypes from "prop-types";
// import moment from "moment";
import moment from "moment-timezone";

// Style
import s from "./index.module.scss";

function ThemesBannerAuctionItem(props) {
  const { title, startDate, endDate, placeName, loading } = props;
  const timeZone = moment.tz.guess();
  //? ============== Countdown Timer ============= ?//
  const targetMoment = moment.tz(endDate, timeZone);
  const currentMoment = moment.tz(timeZone);
  const duration = moment.duration(targetMoment.diff(currentMoment));
  const remainingDays = Math.floor(duration.asDays());
  const zone = moment().format("ZZ");
  const IndonesiaTimeZone =
    zone === "+0700" ? "WIB" : zone === "+0800" ? "WITA" : zone === "+0900" ? "WIT" : "";

  // * ====================================== * //

  return (
    loading && (
      <Row className={s.bannerItem}>
        <Col span={24} className={s.description}>
          <h2>{title}</h2>
          <p style={{ marginBottom: "15px" }}>
            {currentMoment < targetMoment
              ? `${remainingDays} day${remainingDays > 1 ? "s" : ""} before the lot closed`
              : "This auction already ended"}
          </p>

          <p style={{ marginBottom: "0px" }}>
            {moment.tz(startDate, timeZone).format("DD MMMM YYYY | HH:mm")} {IndonesiaTimeZone}
            {placeName && `| {placeName}`}
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
