/* eslint-disable @next/next/no-img-element */
// Libs
import propTypes from "prop-types";
import moment from "moment";
import Link from "next/link";
import { Col } from "antd";
import { useRouter } from "next/router";

// Components
import ThemesButton from "../button";

// Styles
import s from "./index.module.scss";

function ThemesArticleListCard(props) {
  const router = useRouter();
  const { className, title, author, postDate, shortDescription, url, thumbnailSrc } = props;

  return (
    <>
      <Col className={className}>
        <Col span={24} className={s.imageContainer}>
          <Link href={`${url}`}>
            <a>
              <img src={thumbnailSrc ? thumbnailSrc : "/images/default-images.jpg"} alt="" />
            </a>
          </Link>
        </Col>
        <Col span={24} className={s.contentContainer}>
          <Col className={s.contentTitleContainer}>
            <a>
              <h1>{title}</h1>
            </a>
          </Col>
          <Col className={s.contentSubContainer}>
            <p>By {author}</p>
            <p>Posted on {postDate && moment(postDate).format("DD MMMM YYYY")}</p>
          </Col>
          <Col className={s.contentDescriptionContainer}>
            <p>{shortDescription}</p>
          </Col>
          <Col className={s.contentBtnContainer}>
            <a>
              <ThemesButton onClick={() => router.push(`${url}`)}>READ MORE</ThemesButton>
            </a>
          </Col>
        </Col>
      </Col>
    </>
  );
}

ThemesArticleListCard.propTypes = {
  className: propTypes.string,
  title: propTypes.string,
  author: propTypes.string,
  postDate: propTypes.string,
  shortDescription: propTypes.string,
  url: propTypes.string,
  thumbnailSrc: propTypes.string,
};

export default ThemesArticleListCard;
