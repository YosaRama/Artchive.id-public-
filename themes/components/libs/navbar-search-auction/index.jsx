// Libs
import propTypes from "prop-types";
import { Col, Drawer, Row, Collapse, Input, Radio, Divider, Checkbox } from "antd";
import { useRouter } from "next/router";

// Helper
import { useWindowSize } from "dashboard/helpers/useWindowSize";

// Styles
import s from "./index.module.scss";

// Icons
import ThemesButton from "../button";
import { useState } from "react";

function ThemesNavbarSearchAuction(props) {
  const { visible, setVisible, setFilterParams } = props;
  const router = useRouter();
  const { Panel } = Collapse;

  const { width } = useWindowSize();

  const [filterValues, setFilterValues] = useState({
    estMinPrice: 0,
    estMaxPrice: 0,
    minCurPrice: 0,
    maxCurPrice: 0,
    sltBidTypes: [],
  });

  const handleFilter = () => {
    setFilterParams(filterValues);
    setVisible(false);
  };

  return (
    <>
      <Drawer
        title="Filter"
        visible={visible}
        onClose={() => setVisible(false)}
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
                        type="number"
                        value={filterValues?.estMinPrice}
                        min={0}
                        onChange={(e) =>
                          setFilterValues({ ...filterValues, estMinPrice: e?.target?.value })
                        }
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
                        type="number"
                        value={filterValues?.estMaxPrice}
                        min={0}
                        onChange={(e) =>
                          setFilterValues({ ...filterValues, estMaxPrice: e?.target?.value })
                        }
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
                        type="number"
                        value={filterValues?.minCurPrice}
                        min={0}
                        onChange={(e) =>
                          setFilterValues({ ...filterValues, minCurPrice: e?.target?.value })
                        }
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
                        type="number"
                        value={filterValues?.maxCurPrice}
                        min={0}
                        onChange={(e) =>
                          setFilterValues({
                            ...filterValues,
                            maxCurPrice: e?.target?.value,
                          })
                        }
                      />
                    </Col>
                  </Row>
                </Panel>
                <Divider style={{ margin: "10px 0px" }} />

                <Panel header={<h3>Status</h3>} key="3">
                  <Checkbox.Group
                    value={filterValues?.sltBidTypes}
                    onChange={(value) =>
                      setFilterValues({
                        ...filterValues,
                        sltBidTypes: value,
                      })
                    }
                  >
                    <Row>
                      <Col span={24}>
                        <Checkbox value="available">Available Bid</Checkbox>
                      </Col>
                      <Col span={24}>
                        <Checkbox value="close">Close Bid</Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>
                </Panel>
                <Divider style={{ margin: "10px 0px" }} />
              </Collapse>
            </Col>
          </Col>

          <Col span={24} className={s.footerContainer}>
            <ThemesButton type={`primary + ${s.button}`} onClick={handleFilter}>
              APPLY
            </ThemesButton>
          </Col>
        </section>
      </Drawer>
    </>
  );
}

ThemesNavbarSearchAuction.propTypes = {
  visible: propTypes.bool,
  setVisible: propTypes.func,
};

export default ThemesNavbarSearchAuction;
