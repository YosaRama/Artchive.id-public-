// Libs
import { Col, Row } from "antd";
import { useRouter } from "next/router";
import propTypes from "prop-types";
// import moment from "moment";
import moment from "moment-timezone";

// Style
import s from "./index.module.scss";

function ThemesBannerAuctionItem(props) {
  const { title, startDate, endDate, slug, placeName } = props;
  const router = useRouter();
  const timeZone = moment.tz.guess();

  //? ============== Countdown Timer ============= ?//
  const targetMoment = moment.tz(endDate, timeZone);
  const currentMoment = moment.tz(timeZone);
  const duration = moment.duration(targetMoment.diff(currentMoment));
  const remainingDays = Math.floor(duration.asDays());
  const remainingHours = duration.hours();
  // * ====================================== * //
  console.log(remainingDays);
  return (
    <Row className={s.bannerItem}>
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Col
            onClick={() => {
              router.push(`/auction/${slug}`);
            }}
            className={router.asPath === `/auction/${slug}` ? s.btnActive : s.btn}
          >
            <h3>Overview</h3>
          </Col>
          <Col
            onClick={() => {
              router.push(`/auction/${slug}/lots`);
            }}
            className={router.asPath === `/auction/${slug}/lots` ? s.btnActive : s.btn}
          >
            <h3>Lots</h3>
          </Col>
          <Col
            onClick={() => {
              router.push(`/auction/${slug}/details`);
            }}
            className={router.asPath === `/auction/${slug}/details` ? s.btnActive : s.btn}
          >
            <h3>Auction Details</h3>
          </Col>
        </Row>
      </Col>
      <Col span={24} className={s.description}>
        <h1>{title}</h1>
        {currentMoment < targetMoment ? (
          <p>
            {remainingDays} day{remainingDays > 1 ? "s" : ""} before the lot closed
          </p>
        ) : (
          ""
        )}

        <p>
          {moment.tz(startDate, timeZone).format("DD MMMM YYYY | HH:mm")} WITA | {placeName}
        </p>
      </Col>
    </Row>
  );
}

propTypes.ThemesBannerAuctionItem = {
  title: propTypes.string,
  todayDate: propTypes.string,
  startDate: propTypes.string,
  endDate: propTypes.string,
  placeName: propTypes.string,
  slug: propTypes.string,
};

export default ThemesBannerAuctionItem;
