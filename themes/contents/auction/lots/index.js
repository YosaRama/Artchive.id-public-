// Libs
import { Col, Row, Input, Select, Divider, Empty, Segmented, Spin } from "antd";
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
import ThemesButton from "themes/components/libs/button";
// Hooks
import { useAuction } from "app/hooks/auction";
import { useAuctionItems } from "app/hooks/auction/item";

// Helper
import { useWindowSize } from "app/helpers/useWindowSize";
import { useSession } from "next-auth/react";

// Styles
import s from "./index.module.scss";

function ThemesContentsAuctionDetailsLots() {
  const router = useRouter();

  const [filterParams, setFilterParams] = useState({
    estMinPrice: 0,
    estMaxPrice: 0,
    minCurPrice: 0,
    maxCurPrice: 0,
    sltBidTypes: [],
  });
  const [sortParam, setSortParam] = useState({
    value: "0",
    label: "Default",
  });

  //#region Handle search
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  //#endregion

  // #region Auction Details
  const { data: auctionData, loading } = useAuction({ singleId: router.query.id });
  // #endregion

  // #region Auction Item Details
  const { data: auctionItems, loading: auctionItemsLoading } = useAuctionItems({
    queryString: `search=${search || ""}&sortBy=lot&sortDirection=ASC`,
    auctionId: router.query.id,
  });
  // #endregion

  const { data: session } = useSession();

  const { width: windowWidth } = useWindowSize();

  // #region Handle Grid View
  const [isGridView, setIsGridView] = useState(false);
  const handleClick = () => {
    setIsGridView(!isGridView);
  };
  // #endregion

  // #region Timeline
  const todayDate = moment();
  const beforeEvent = todayDate.isBefore(auctionData?.start_date);
  const visibility = beforeEvent ? true : false;
  // #endregion

  // #region Check User and Visibility of Modal
  const [isVisible, setIsVisible] = useState(visibility);
  const handleModal = () => {
    setIsVisible(!isVisible);
  };
  //#endregion
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
      <ThemesBanner imgSrc={auctionData?.thumbnail} className={s.bannerContainer} initial="visible">
        <ThemesBannerAuctionItem
          overview={false}
          loading={auctionData}
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
            <>
              <Row
                gutter={windowWidth > 768 ? [32, 32] : [0, 0]}
                className={s.searchContainer}
                justify={windowWidth <= 500 && "space-around"}
              >
                {windowWidth > 768 && (
                  <>
                    <Col onClick={handleClick} className={s.click}>
                      <h4>{isGridView ? <AppstoreOutlined /> : <UnorderedListOutlined />}</h4>
                    </Col>
                    <Divider type="vertical" className={s.divider} />
                  </>
                )}
                <Col
                  onClick={() => {
                    setOpenMenu(!openMenu);
                  }}
                  className={s.click}
                >
                  <Row gutter={16} align="middle">
                    <Col>
                      <h4>
                        <SlidersOutlined />
                      </h4>
                    </Col>
                    {windowWidth > 768 && (
                      <Col>
                        <p>Filter</p>
                      </Col>
                    )}
                  </Row>
                </Col>
                <Divider type="vertical" className={s.divider} />
                <Col lg={{ span: 6 }} md={{ span: 11 }} xs={{ span: 8 }} className={s.select}>
                  <Select
                    size="large"
                    placeholder={<p>Sort By</p>}
                    bordered={false}
                    options={options}
                    style={{ width: "100%" }}
                    dropdownClassName={s.dropdown}
                    value={sortParam}
                    onChange={(_, value) => setSortParam(value)}
                  />
                </Col>
                <Divider type="vertical" className={s.divider} />

                <Col lg={{ span: 6 }} md={{ span: 11 }} xs={{ span: 12 }}>
                  <Input
                    allowClear={true}
                    placeholder={windowWidth <= 500 ? "Search" : "Search Lot Item"}
                    size="large"
                    style={{ width: "100%" }}
                    onChange={handleSearch}
                    value={search}
                  />
                </Col>
              </Row>
              <Divider className={s.dividerX} />
            </>

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
                        artworkDetails={item?.artwork_details}
                        auctionDetails={item?.auction_details}
                        auctionData={auctionData}
                        handleVisible={handleModal}
                      />
                    </Col>
                  );
                })
              ) : (
                <Col style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                  {auctionItemsLoading ? <Spin size="large" tip="loading" /> : <Empty />}
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
          <ThemesNavbarSearchAuction
            setFilterParams={setFilterParams}
            visible={openMenu}
            setVisible={setOpenMenu}
          />
          // #endregion
        }
      </Col>
    </>
  );
}

export default ThemesContentsAuctionDetailsLots;
