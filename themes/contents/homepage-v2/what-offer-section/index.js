// Libs
import propTypes from "prop-types";
import { Col, Row } from "antd";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesHeadline from "themes/components/libs/headline";

// Styles
import s from "./index.module.scss";

// Icons
import { BookOutlined } from "@ant-design/icons";

function ThemesContentsHomepageV2WhatOfferSection(props) {
  const { dataList } = props;
  return (
    <>
      <Col className={s.offer}>
        <ThemesHeadline
          title="What We Offer"
          subtitle="Various offer to upgrade you popularity"
          className={s.pageTitle}
        />
        <ThemesContainerMain>
          <Row gutter={(40, 20)} className={s.offerContainer}>
            {dataList.map((item, index) => (
              <Col md={{ span: 7 }} xs={{ span: 22 }} className={s.description} key={index}>
                <Col className={s.artistImage}>
                  <Col className={s.icon}>{item.icon}</Col>
                </Col>
                <Col>
                  <h1>{item.offer}</h1>
                  <p>{item.description}</p>
                </Col>
              </Col>
            ))}
          </Row>
          <Col className={s.offerContainer}>
            <Col md={{ span: 7 }} xs={{ span: 22 }} className={s.description}>
              <Col className={s.artistImage}>
                <Col className={s.icon}>
                  <BookOutlined />
                </Col>
              </Col>
              <Col>
                <h1>Archive Artworks</h1>
                <p>
                  We gonna archive all of your artworks so the existence of your artwork would never
                  went missing!
                </p>
              </Col>
            </Col>
          </Col>
        </ThemesContainerMain>
      </Col>
    </>
  );
}

ThemesContentsHomepageV2WhatOfferSection.propTypes = {
  dataList: propTypes.array,
};

export default ThemesContentsHomepageV2WhatOfferSection;
