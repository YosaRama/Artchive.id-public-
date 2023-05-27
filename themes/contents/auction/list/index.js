// Libs
import { useRouter } from "next/router";
import { Col, Empty, Row, Card, Form, Input, Select, Slider, Spin, Divider } from "antd";
import { useExhibitionLoad } from "app/hooks/exhibition";
const { Option } = Select;
import { motion } from "framer-motion";
import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";
import Sticky from "react-sticky-el";
import propTypes from "prop-types";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesBanner from "themes/components/libs/banner";
import ThemesAuctionCard from "themes/components/libs/auction-card-list";
import ThemesButton from "themes/components/libs/button";

// Data Hook
import { auctionList } from "app/database/dummy/auction-list";

// Helpers
import { useWindowSize } from "app/helpers/useWindowSize";

// Styles
import s from "./index.module.scss";
import { searchCollapse } from "app/database/framer-motion";

function ThemesContentsAuctionList(props) {
  const router = useRouter();
  const { width } = useWindowSize();

  //? ============== Auction Hook ============= ?//

  // * ====================================== * //

  //? ============== Handle Get Viewport ============= ?//
  const viewport = useWindowSize();
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
      router.push(`/artwork?artistName=${submission.artistName}&genreId=${submission.genre}`);
      setSearchVisible(!searchVisible);
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
      {/* //? ============== Banner Section ============= ?// */}
      <section>
        <ThemesBanner imgSrc="/images/banner-auction-list.jpg" className="page-bannerContainer">
          <div className="page-bannerTitle">
            <Col>
              <h1>Auction List</h1>
            </Col>
          </div>
        </ThemesBanner>
      </section>
      {/* // * ====================================== * // */}

      {/* //? ============== Mobile Search Section ============= ?// */}
      {width <= 1024 && (
        <Col className={s.mobileSearchContainer} tabindex="1" span={24}>
          <Col span={24} className={`${handleCollapse}`}>
            <h1 style={{ textAlign: "center", fontSize: "24px" }}>SEARCH</h1>
            <Form form={searchForm}>
              <Form.Item name="auction_name">
                <Select showSearch placeholder="Auction Name" onSearch={""} allowClear>
                  {/* //TODO : Map auction name list// */}
                  <Option>TEST</Option>
                </Select>
              </Form.Item>
              <Form.Item name="auction_status">
                <Input placeholder="Status" disabled />
              </Form.Item>

              <Divider style={{ margin: "8px 0px" }} />
              <Col span={24} className={s.priceTitle}>
                <p>Auction Value</p>
              </Col>
              <Row justify="space-between">
                <Col className={s.priceTag}>IDR 0</Col>
                <Col className={s.priceTag}>IDR 0</Col>
              </Row>
              <Form.Item>
                <Slider />
              </Form.Item>
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
      )}
      {/* // * ====================================== * // */}

      {/* //? ============== Auction Section ============= ?// */}
      <section className={s.listSection}>
        <ThemesContainerMain>
          <section style={{ margin: "50px 0" }} className="">
            <Row
              style={{ width: "100%", margin: "auto" }}
              justify="space-between"
              className="boundary"
            >
              {/* //? ============== Desktop Search Section ============= ?// */}
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
                            <Select showSearch placeholder="Auction Name" onSearch={""} allowClear>
                              <Option>TEST</Option>
                              {/* //TODO : map auction name  list// */}
                            </Select>
                          </Form.Item>
                          <Form.Item name="auction_status">
                            <Input placeholder="Status" disabled />
                          </Form.Item>
                        </Form>
                        <Col span={24}>
                          <ThemesButton type={"default " + s.searchButton} onClick={handleSearch}>
                            SEARCH
                          </ThemesButton>
                        </Col>
                      </Col>
                    </Card>
                  </Sticky>
                </div>
              </Col>
              {/* // * ====================================== * // */}

              {/* //? ============== Auction List Section ============= ?// */}
              <Col span={18} style={{ paddingLeft: "32px" }}>
                {auctionList ? (
                  <Row gutter={[32, 32]}>
                    {auctionList?.map((item, index) => {
                      return (
                        <Col sm={{ span: 8 }} xs={{ span: 24 }} className={s.cardList} key={index}>
                          <ThemesAuctionCard
                            thumbnail={item?.thumbnail}
                            title={item?.title}
                            status={item?.status}
                            startDate={item.start_date}
                            endDate={item.end_date}
                            slug={item.slug}
                          />
                        </Col>
                      );
                    })}
                  </Row>
                ) : (
                  <Col span={24}>
                    <Spin>
                      <Empty />
                    </Spin>
                  </Col>
                )}
              </Col>
              {/* // * ====================================== * // */}
            </Row>
          </section>
        </ThemesContainerMain>
      </section>
      {/* // * ====================================== * // */}
    </>
  );
}

ThemesContentsAuctionList.propTypes = {
  auctionList: propTypes.any.isRequired,
};

export default ThemesContentsAuctionList;
