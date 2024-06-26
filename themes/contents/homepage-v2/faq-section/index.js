// Libs
import { Collapse, Col, Space, Row } from "antd";
import propTypes from "prop-types";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesHeadline from "themes/components/libs/headline";

// Dummy
import { faqList } from "dashboard/database/dummy/homepage-v2";

// Styles
import s from "./index.module.scss";

function ThemesContentsHomepageV2FaqSection() {
  const { Panel } = Collapse;

  return (
    <Col>
      <ThemesContainerMain>
        <ThemesHeadline
          title="Frequently Asked Question (FAQ)"
          subtitle="Let's find out your curiousity"
          className={s.pageTitle}
        />
        <Col
          xl={{ span: 16 }}
          lg={{ span: 16 }}
          md={{ span: 16 }}
          xs={{ span: 24 }}
          className={s.container}
        >
          <Space direction="vertical" className={s.collapse}>
            {faqList.map((item, index) => {
              return (
                <Collapse
                  expandIconPosition="end"
                  // defaultActiveKey={["1"]}
                  className={s.collapse}
                  key={index}
                >
                  <Panel header={item.header} key={item.key}>
                    <Row>{item.description}</Row>
                  </Panel>
                </Collapse>
              );
            })}
          </Space>
        </Col>
      </ThemesContainerMain>
    </Col>
  );
}

export default ThemesContentsHomepageV2FaqSection;
