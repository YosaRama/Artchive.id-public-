/* eslint-disable @next/next/no-img-element */

// Libs
import { Card, Col } from "antd";

// Components
import ThemesLinkWithArrow from "../link-with-arrow";

// Styles
import s from "./index.module.scss";

function ThemesArticleCard() {
  return (
    <>
      <Card bodyStyle={{ padding: 0 }}>
        <Col style={{ paddingLeft: 0, paddingRight: 0 }} className={s.imageContainer}>
          <img src="/images/default-images.jpg" alt="" />
        </Col>
        <Col className={s.contentContainer}>
          <Col className={s.titleContainer}>
            <h1>Article Title</h1>
          </Col>
          <Col>
            <p>Article description lorem ipsum dolor sit amet</p>
          </Col>
          <Col className={s.postedDateContainer}>
            <p>Posted on POSTED DATE</p>
          </Col>
          <Col>
            <ThemesLinkWithArrow text={"Read More"} link={"/article/some-article-slug"} />
          </Col>
        </Col>
      </Card>
    </>
  );
}

export default ThemesArticleCard;
