/* eslint-disable @next/next/no-img-element */

// Libs
import moment from "moment";
import propTypes from "prop-types";
import Link from "next/link";
import { Card, Col } from "antd";

// Components
import ThemesLinkWithArrow from "../link-with-arrow";

// Styles
import s from "./index.module.scss";

function ThemesArticleCard(props) {
  const { title, shortDescription, postedDate, url, imageSrc } = props;
  return (
    <>
      <Card bodyStyle={{ padding: 0 }}>
        <Col style={{ paddingLeft: 0, paddingRight: 0 }} className={s.imageContainer}>
          <Link href={url ? url : "/"}>
            <a>
              <img
                src={
                  imageSrc
                    ? `${process.env.NEXT_PUBLIC_S3_URL}/${imageSrc}`
                    : `/images/default-images.jpg`
                }
                alt=""
              />
            </a>
          </Link>
        </Col>
        <Col className={s.contentContainer}>
          <Col className={s.titleContainer}>
            <Link href={url ? url : "/"}>
              <a>
                <h1>{title && title}</h1>
              </a>
            </Link>
          </Col>
          <Col className={s.descriptionContainer}>
            <p>{shortDescription && shortDescription}</p>
          </Col>
          <Col className={s.postedDateContainer}>
            <p>Posted on {postedDate ? moment(postedDate).format("DD MMMM YYYY") : ""}</p>
          </Col>
          <Col>
            <ThemesLinkWithArrow text={"Read More"} link={url ? url : "/"} />
          </Col>
        </Col>
      </Card>
    </>
  );
}

ThemesArticleCard.propTypes = {
  title: propTypes.string,
  shortDescription: propTypes.string,
  postedDate: propTypes.string,
  url: propTypes.string,
  imageSrc: propTypes.string,
};

export default ThemesArticleCard;
