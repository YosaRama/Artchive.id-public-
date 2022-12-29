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
import ThemesButton from "themes/components/libs/button";

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
          <Row gutter={(20, 20)} className={s.offerContainer}>
            {dataList.map((item, index) => (
              <Col
                lg={{ span: 8 }}
                md={{ span: 12 }}
                xs={{ span: 24 }}
                className={s.description}
                key={index}
              >
                <Col className={s.artistImage}>
                  <Col className={s.icon}>{item.icon}</Col>
                </Col>
                <Col>
                  <h1>{item.offer}</h1>
                  <p>{item.description}</p>
                </Col>
              </Col>
            ))}
            <Col className={s.button}>
              <ThemesButton>CONTACT US</ThemesButton>
            </Col>
          </Row>
        </ThemesContainerMain>
      </Col>
    </>
  );
}

ThemesContentsHomepageV2WhatOfferSection.propTypes = {
  dataList: propTypes.array,
};

export default ThemesContentsHomepageV2WhatOfferSection;
