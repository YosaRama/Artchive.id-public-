// Libs
import propTypes from "prop-types";
import { Col, Drawer, Row, Collapse, Input, Radio, Divider } from "antd";
import { useRouter } from "next/router";

// Helper
import { useWindowSize } from "app/helpers/useWindowSize";

// Styles
import s from "./index.module.scss";

// Icons
import ThemesButton from "../button";

function ThemesNavbarSearchAuction(props) {
  const { visible, onClose } = props;
  const router = useRouter();
  const { Panel } = Collapse;

  const { width } = useWindowSize();

  return (
    <>
      <Drawer
        title="Filter"
        visible={visible}
        onClose={onClose}
        width={width > 500 ? 500 : 350}
        bodyStyle={{ padding: 0 }}
        placement="left"
      >
        <section className={s.container}>
          <Col span={24} className={s.bodyContainer}>
            <Col>
              <Collapse ghost expandIconPosition="end" size={width > 500 ? "large" : "small"}>
                <Panel header={<h3>Estimate</h3>} key="1">
                  <Row justify="space-between">
                    <Col span={11}>
                      <Input
                        prefix="IDR"
                        placeHolder="1000000"
                        size={width > 500 ? "large" : "medium"}
                      />
                    </Col>
                    <Col span={1} style={{ height: "100%", margin: "auto", textAlign: "center" }}>
                      -
                    </Col>
                    <Col span={11}>
                      <Input
                        prefix="IDR"
                        placeHolder="1000000"
                        size={width > 500 ? "large" : "medium"}
                      />
                    </Col>
                  </Row>
                </Panel>
                <Divider style={{ margin: "10px 0px " }} />

                <Panel header={<h3>Current Price</h3>} key="2">
                  <Row justify="space-between">
                    <Col span={11}>
                      <Input
                        prefix="IDR"
                        placeHolder="1000000"
                        size={width > 500 ? "large" : "medium"}
                      />
                    </Col>
                    <Col span={1} style={{ height: "100%", margin: "auto", textAlign: "center" }}>
                      -
                    </Col>
                    <Col span={11}>
                      <Input
                        prefix="IDR"
                        placeHolder="1000000"
                        size={width > 500 ? "large" : "medium"}
                      />
                    </Col>
                  </Row>
                </Panel>
                <Divider style={{ margin: "10px 0px" }} />

                <Panel header={<h3>Status</h3>} key="3">
                  <Col span={24}>
                    <Radio>Available Bid</Radio>
                  </Col>

                  <Col span={24}>
                    <Radio>Closed Bid</Radio>
                  </Col>
                </Panel>
                <Divider style={{ margin: "10px 0px" }} />
              </Collapse>
            </Col>
          </Col>

          <Col span={24} className={s.footerContainer}>
            <ThemesButton type={`primary + ${s.button}`}>APPLY</ThemesButton>
          </Col>
        </section>
      </Drawer>
    </>
  );
}

ThemesNavbarSearchAuction.propTypes = {
  visible: propTypes.bool,
  onClose: propTypes.func,
};

export default ThemesNavbarSearchAuction;
