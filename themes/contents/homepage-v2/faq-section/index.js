// Libs
import { Collapse, Col } from "antd";
import propTypes from "prop-types";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesHeadline from "themes/components/libs/headline";

// Dummy
import { faqList } from "app/database/dummy/homepage-v2";

// Styles
import s from "./index.module.scss";

function ThemesContentsHomepageV2FaqSection() {
  const { Panel } = Collapse;

  return (
    <Col>
      <ThemesContainerMain>
        <Col span={16} className={s.container}>
          <Collapse
            bordered={false}
            expandIconPosition="end"
            defaultActiveKey={["1"]}
            className={s.collapse}
          >
            {faqList.map((item, index) => {
              return (
                <Panel header={item.header} key={item.key}>
                  <p>{item.description}</p>
                </Panel>
              );
            })}
          </Collapse>
        </Col>
      </ThemesContainerMain>
    </Col>
  );
}

export default ThemesContentsHomepageV2FaqSection;
