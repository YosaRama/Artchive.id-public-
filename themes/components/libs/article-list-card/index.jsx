// Libs
import propTypes from "prop-types";
import Link from "next/link";
import { Col } from "antd";

// Components
import ThemesButton from "../button";

// Styles
import s from "./index.module.scss";

function ThemesArticleListCard(props) {
  const { className } = props;

  return (
    <>
      <Col className={className}>
        <Col span={24} className={s.imageContainer}>
          <Link href={""}>
            <a>
              <img src="/images/artwork-1.jpg" />
            </a>
          </Link>
        </Col>
        <Col span={24} className={s.contentContainer}>
          <Col className={s.contentTitleContainer}>
            <a>
              <h1>Jepun Artfriends</h1>
            </a>
          </Col>
          <Col className={s.contentSubContainer}>
            <p>By you know who</p>
            <p>Posted on 15 may 2022</p>
          </Col>
          <Col className={s.contentDescriptionContainer}>
            <p>lorem ipsum dolor sit amet </p>
          </Col>
          <Col className={s.contentBtnContainer}>
            <ThemesButton>READ MORE</ThemesButton>
          </Col>
        </Col>
      </Col>
    </>
  );
}

ThemesArticleListCard.propTypes = {
  className: propTypes.string,
};

export default ThemesArticleListCard;
