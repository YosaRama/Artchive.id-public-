/* eslint-disable @next/next/no-img-element */

// Libs
import propTypes from "prop-types";
import moment from "moment";
import { Col } from "antd";
import Link from "next/link";

// Styles
import s from "./index.module.scss";

function ThemesAuctionCard(props) {
  const { thumbnail, title, status, startDate, endDate, id } = props;
  const todayDate = moment();
  return (
    <>
      <Link key={id} href={`/auction/${id}/lots`} passHref>
        <Col className={s.container}>
          <img
            src={thumbnail ? thumbnail : "/images/artwork-1.jpg"}
            className={s.thumbnail}
            alt=""
          />
          <Col className={s.description}>
            <h3 className={s.title}>{title}</h3>
            <div>
              <p>
                {todayDate.isBefore(startDate) && "COMING SOON"}
                {todayDate.isBetween(startDate, endDate) && "LIVE NOW"}
                {todayDate.isAfter(endDate) && "ENDED"}
              </p>
              <p className={s.date}>
                {moment(startDate).format("DD MMMM")} - {moment(endDate).format("DD MMMM YYYY")}
              </p>
            </div>
          </Col>
        </Col>
      </Link>
    </>
  );
}

ThemesAuctionCard.propTypes = {
  thumbnail: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  status: propTypes.string.isRequired,
  startDate: propTypes.string.isRequired,
  endDate: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
};

export default ThemesAuctionCard;
