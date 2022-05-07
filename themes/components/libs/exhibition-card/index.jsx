/* eslint-disable @next/next/no-img-element */

// Libs
import propTypes from "prop-types";
import moment from "moment";
import { Col } from "antd";
import { useRouter } from "next/router";

// Components
import ThemesButton from "../button";

// Styles
import s from "./index.module.scss";

function ThemesExhibitionCard(props) {
  const router = useRouter();
  const { thumbnail, title, organizedBy, startDate, endDate, description, slug } = props;

  //? ============== Handle See Details ============= ?//
  const handleSeeDetails = () => {
    router.push(`/exhibition/${slug}`);
  };
  // * ====================================== * //

  return (
    <>
      <Col span={24} className={s.container}>
        <img
          src={
            thumbnail ? `${process.env.NEXT_PUBLIC_S3_URL}/${thumbnail}` : "/images/artwork-1.jpg"
          }
          className={s.thumbnail}
          onClick={handleSeeDetails}
          alt=""
        />
        <h1 className={s.title} onClick={handleSeeDetails}>
          {title}
        </h1>
        <div>
          <p>{organizedBy}</p>
          <p className={s.date}>
            {moment(startDate).format("DD MMMM")} - {moment(endDate).format("DD MMMM YYYY")}
          </p>
        </div>
        <p className={s.description}>{description}</p>
        <ThemesButton onClick={handleSeeDetails}>READ MORE</ThemesButton>
      </Col>
    </>
  );
}

ThemesExhibitionCard.propTypes = {
  thumbnail: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  organizedBy: propTypes.string.isRequired,
  startDate: propTypes.string.isRequired,
  endDate: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  slug: propTypes.string.isRequired,
};

export default ThemesExhibitionCard;
