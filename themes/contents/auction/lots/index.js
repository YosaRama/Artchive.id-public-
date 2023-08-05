// Libs
import { Col, Row, Input, Select, Divider, Empty } from "antd";
import { AppstoreOutlined, SlidersOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { useState } from "react";
import propTypes from "prop-types";
import { useRouter } from "next/router";
import moment from "moment";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesBanner from "themes/components/libs/banner";
import ThemesAuctionLotsList from "themes/components/libs/auction-lots-list";
import ThemesBannerAuctionItem from "themes/components/libs/banner-auction";
import ThemesModalAuctionLogin from "themes/components/libs/modal-auction-login";
import ThemesNavbarSearchAuction from "themes/components/libs/navbar-search-auction";
// Hooks
import { useAuction } from "app/hooks/auction";
import { useAuctionItems } from "app/hooks/auction/item";

// Helper
import { useWindowSize } from "app/helpers/useWindowSize";

// Styles
import s from "./index.module.scss";

function ThemesContentsAuctionDetailsLots() {
  const router = useRouter();
  const { width: windowWidth } = useWindowSize();
  const { Search } = Input;

  // #region Handle Grid View
  const [isGridView, setIsGridView] = useState(false);
  const handleClick = () => {
    setIsGridView(!isGridView);
  };
  // #endregion

  // #region Auction Details
  const { data: auctionData, loading } = useAuction({ singleId: router.query.id });
  // #endregion

  // #region Auction Item Details
  const { data: auctionItems } = useAuctionItems({
    queryString: "",
    auctionId: router.query.id,
  });
  // #endregion

  // #region Timeline
  const todayDate = moment();
  const beforeEvent = todayDate.isBefore(auctionData?.start_date);
  const visibility = beforeEvent ? true : false;
  // #endregion

  // #region Check User and Visibility of Modal
  const [userRegistered, setUserRegistered] = useState(true);
  const [isVisible, setIsVisible] = useState(visibility);
  const handleModal = () => {
    setIsVisible(!isVisible);
  };
  //#endregion

  // #endregion

  // #region Option Value
  const options = [
    {
      value: "0",
      label: "Default",
    },
    {
      value: "1",
      label: "Lot Number (Hight to low)",
    },
    {
      value: "2",
      label: "Lot Number (Low to Hight)",
    },
    {
      value: "3",
      label: "Latest Bid (Hight to low)",
    },
    {
      value: "4",
      label: "Latest Bid (Low to Hight)",
    },
    {
      value: "5",
      label: "Estimate (Hight to low)",
    },
    {
      value: "6",
      label: "Estimate (Low to Hight)",
    },
    {
      value: "7",
      label: "Popularity",
    },
  ];
  // #endregion

  // #region Handle Filter
  const [selectedNumber, setSelectedNumber] = useState(null);
  const handleNumberChange = (value) => {
    setSelectedNumber(value);
  };
  // #endregion

  // #region Handle Filter
  //? ============== Open Menu Drawer ============= ?//
  const [openMenu, setOpenMenu] = useState(false);
  // * ====================================== * //
  // #endregion

  return (
    <>
      <ThemesBanner imgSrc={auctionData?.thumbnail} className={s.bannerContainer}>
        <ThemesBannerAuctionItem
          title={auctionData?.name}
          startDate={auctionData?.start_date}
          endDate={auctionData?.end_date}
          placeName={auctionData?.place_name}
        />
      </ThemesBanner>

      <Col className={s.bgWhite}>
        <ThemesContainerMain>
          {
            // #region Search Auction Item
            windowWidth >= 500 ? (
              <>
                <Row gutter={[32, 32]} className={s.searchContainer}>
                  {windowWidth > 768 && (
                    <Col onClick={handleClick} className={s.click}>
                      <h4>{isGridView ? <AppstoreOutlined /> : <UnorderedListOutlined />}</h4>
                    </Col>
                  )}

                  <Divider type="vertical" className={s.divider} />
                  <Row
                    gutter={16}
                    align="middle"
                    onClick={() => {
                      setOpenMenu(!openMenu);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <Col>
                      <p>Filter</p>
                    </Col>
                    <Col>
                      <h4>
                        <SlidersOutlined />
                      </h4>
                    </Col>
                  </Row>
                  <Divider type="vertical" className={s.divider} />
                  <Col>
                    <Select
                      size="large"
                      placeholder="Sort by"
                      style={{ width: windowWidth > 768 ? 300 : 200 }}
                      bordered={false}
                      options={options}
                    />
                  </Col>
                  <Divider type="vertical" className={s.divider} />

                  <Col>
                    <Search placeholder="Search Lot Item" size="large" />
                  </Col>
                </Row>
                <Divider className={s.dividerX} />
              </>
            ) : (
              <>
                <Col className={s.searchContainer}>
                  <Col span={24}>
                    <Row gutter={[16, 16]}>
                      <Col
                        span={2}
                        onClick={() => {
                          setOpenMenu(!openMenu);
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <h4>
                          <SlidersOutlined />
                        </h4>
                      </Col>
                      <Col span={22}>
                        <Search placeholder="Search Lot Item" />
                      </Col>
                    </Row>
                  </Col>
                  <Divider className={s.divider} />
                  <Col span={24}>
                    <Select
                      className={s.select}
                      defaultValue="Sort by"
                      style={{ width: 240 }}
                      options={options}
                    />
                  </Col>
                  <Divider className={s.divider} />
                </Col>
              </>
            )
            // #endregion
          }

          {
            // #region Item List Section
            <Row gutter={[16, 16]} style={{ paddingBottom: "80px" }} justify="flex-start">
              {auctionItems?.length > 0 ? (
                auctionItems?.map((item, index) => {
                  return (
                    <Col
                      xl={isGridView ? { span: 8 } : { span: 24 }}
                      lg={isGridView ? { span: 8 } : { span: 24 }}
                      sm={{ span: 12 }}
                      xs={{ span: 24 }}
                      key={index}
                    >
                      <ThemesAuctionLotsList
                        grid={windowWidth > 768 ? isGridView : true}
                        artworkDetails={item.artwork_details}
                        auctionDetails={item.auction_details}
                        auctionData={auctionData}
                        handleVisible={() => {
                          setIsVisible(true);
                        }}
                      />
                    </Col>
                  );
                })
              ) : (
                <Col style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                  <Empty />
                </Col>
              )}
            </Row>
            // #endregion
          }
        </ThemesContainerMain>
        {
          // #region Modal Login Auction
          <ThemesModalAuctionLogin visible={isVisible} handleModal={handleModal} />
          // #endregion
        }

        {
          // #region Navbar Search
          <ThemesNavbarSearchAuction visible={openMenu} onClose={() => setOpenMenu(false)} />
          // #endregion
        }
      </Col>
    </>
  );
}

export default ThemesContentsAuctionDetailsLots;
