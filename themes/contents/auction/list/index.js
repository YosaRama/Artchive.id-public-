// Libs
import { Col, Empty, Row, Card, Form, Input, Select, Slider, Spin, Divider } from "antd";
import { motion } from "framer-motion";
import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";
import Sticky from "react-sticky-el";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesBanner from "themes/components/libs/banner";
import ThemesAuctionCard from "themes/components/libs/auction-card-list";
import ThemesButton from "themes/components/libs/button";

// Data Hook
import { useAuctions } from "app/hooks/auction";

// Helpers
import { useWindowSize } from "app/helpers/useWindowSize";

// Styles
import s from "./index.module.scss";
import { searchCollapse } from "app/database/framer-motion";

function ThemesContentsAuctionList() {
  const { width } = useWindowSize();

  //? ============== Auction Hook ============= ?//
  const { data: auctionList, loading: auctionListLoading } = useAuctions({ queryString: "" });
  // * ====================================== * //

  //? ============== Handle Collapse State ============= ?//
  const [searchVisible, setSearchVisible] = useState(false);
  const handleSearchVisible = () => setSearchVisible(!searchVisible);
  const active = searchVisible ? s.searchArrowIconActive : s.searchArrowIcon;
  const handleCollapse = !searchVisible ? s.containerSearch : s.containerSearchCollapsed;
  // * ====================================== * //

  //? ============== Handle Search ============= ?//
  const [searchForm] = Form.useForm();
  const handleSearch = () => {
    searchForm.validateFields().then((values) => {
      const submission = {
        // auctionName: values?.artist_name ? values?.artist_name : "",
        // status: values.genre ? values.genre : "",
      };
      // router.push(`/artwork?artistName=${submission.artistName}&genreId=${submission.genre}`);
      // setSearchVisible(!searchVisible);
    });
  };
  // * ====================================== * //

  //? ============== Handle Load More ============= ?//
  const handleLoadMore = () => {
    setSize(size + 1);
  };
  // * ====================================== * //

  return (
    <>
      {
        // #region Banner Auction List
        <section>
          <ThemesBanner imgSrc="/images/banner-auction-list.jpg" className="page-bannerContainer">
            <div className="page-bannerTitle">
              <Col>
                <h1>Auction List</h1>
              </Col>
            </div>
          </ThemesBanner>
        </section>
        // #endregion
      }

      {
        // #region Mobile Search Sticky
        width <= 1024 && (
          <Col className={s.mobileSearchContainer} tabindex="1" span={24}>
            <Col span={24} className={`${handleCollapse}`}>
              <h1 style={{ textAlign: "center", fontSize: "24px" }}>SEARCH</h1>
              <Form form={searchForm}>
                <Form.Item name="auction_name">
                  <Select showSearch placeholder="Auction Name" onSearch={""} allowClear />
                </Form.Item>
                <Form.Item name="auction_status">
                  <Input placeholder="Status" disabled />
                </Form.Item>

                <Divider style={{ margin: "8px 0px" }} />
              </Form>
              <Col span={24}>
                <ThemesButton type={"default " + s.searchButton} onClick={handleSearch}>
                  SEARCH
                </ThemesButton>
              </Col>
            </Col>

            <motion.div
              variants={searchCollapse}
              initial="hidden"
              animate="visible"
              span={24}
              className={s.searchCollapse}
              onClick={handleSearchVisible}
            >
              FILTER <DownOutlined className={`${active}`} />
            </motion.div>
          </Col>
        )
        // #endregion
      }

      {
        // #region Auction Section
        <section className={s.listSection}>
          <ThemesContainerMain>
            <section style={{ margin: "50px 0" }} className="">
              <Row
                style={{ width: "100%", margin: "auto" }}
                justify="space-between"
                className="boundary"
              >
                {
                  // #region Desktop Search
                  width > 768 && (
                    <Col span={6} className={`${s.mobileHidden} `} style={{ height: "auto" }}>
                      <div className="affixContainer">
                        <Sticky
                          boundaryElement=".boundary"
                          hideOnBoundaryHit={false}
                          stickyStyle={{ paddingTop: 80 }}
                        >
                          <Card>
                            <Col span={24} className={s.searchTitle}>
                              <h1>Search By</h1>
                            </Col>
                            <Col span={24}>
                              <Form form={searchForm}>
                                <Form.Item name="auction_name">
                                  <Select
                                    showSearch
                                    placeholder="Auction Name"
                                    onSearch={""}
                                    allowClear
                                  />
                                </Form.Item>
                                <Form.Item name="auction_status">
                                  <Input placeholder="Status" disabled />
                                </Form.Item>
                              </Form>
                              <Col span={24}>
                                <ThemesButton
                                  type={"default " + s.searchButton}
                                  onClick={handleSearch}
                                >
                                  SEARCH
                                </ThemesButton>
                              </Col>
                            </Col>
                          </Card>
                        </Sticky>
                      </div>
                    </Col>
                  )

                  // #endregion
                }

                {
                  // #region Auction List
                  <Col
                    span={width > 1024 ? 18 : 24}
                    style={{ paddingLeft: width >= 1024 ? "32px" : "0px", width: "100%" }}
                  >
                    <Spin spinning={auctionListLoading}>
                      {auctionList ? (
                        <Row gutter={width > 768 ? [32, 32] : [20, 20]} justify="flex-start">
                          {auctionList?.map((item, index) => {
                            return (
                              <Col
                                key={index}
                                lg={{ span: 8 }}
                                md={{ span: 8 }}
                                sm={{ span: 8 }}
                                xs={{ span: 24 }}
                              >
                                <ThemesAuctionCard
                                  thumbnail={item?.thumbnail}
                                  title={item?.name}
                                  status={item?.status}
                                  startDate={item.start_date}
                                  endDate={item.end_date}
                                  id={item.id}
                                />
                              </Col>
                            );
                          })}
                        </Row>
                      ) : (
                        <Col span={24}>
                          <Empty />
                        </Col>
                      )}
                    </Spin>
                  </Col>
                  // #endregion
                }
              </Row>
            </section>
          </ThemesContainerMain>
        </section>
        // #endregion
      }
    </>
  );
}

export default ThemesContentsAuctionList;
