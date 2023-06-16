/* eslint-disable @next/next/no-img-element */

// Libs
import propTypes from "prop-types";
import moment from "moment";
import { Col } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";

// Styles
import s from "./index.module.scss";

function ThemesAuctionCard(props) {
  const { thumbnail, title, status, startDate, endDate, slug } = props;

  //? ============== Handle See Details ============= ?//
  // const handleSeeDetails = () => {
  //   router.push(`/auction/${slug}/lots`);
  // };
  // * ====================================== * //

  return (
    <>
      <Link key={slug} href={`/auction/${slug}/lots`}>
        <Col className={s.container}>
          <img
            src={
              thumbnail ? `${process.env.NEXT_PUBLIC_S3_URL}/${thumbnail}` : "/images/artwork-1.jpg"
            }
            className={s.thumbnail}
            alt=""
          />
          <Col className={s.description}>
            <h3 className={s.title}>{title}</h3>
            <div>
              <p>{status}</p>
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
  slug: propTypes.string.isRequired,
};

export default ThemesAuctionCard;
