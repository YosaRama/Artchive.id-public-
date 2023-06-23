// Libs
import { Col, Row, Input, Select, Divider, Empty } from "antd";
import { AppstoreOutlined, SlidersOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { useState } from "react";
import propTypes from "prop-types";
import { useRouter } from "next/router";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesBanner from "themes/components/libs/banner";
import ThemesAuctionLotsList from "themes/components/libs/auction-lots-list";
import ThemesBannerAuctionItem from "themes/components/libs/banner-auction";
import ThemesModalAuctionLogin from "themes/components/libs/modal-auction-login";

// Hooks
import { useAuction } from "app/hooks/auction";
import { useAuctionItems } from "app/hooks/auction/item";

// Helper
import { useWindowSize } from "app/helpers/useWindowSize";

// Styles
import s from "./index.module.scss";

function ThemesContentsAuctionDetailsLots() {
  const router = useRouter();
  const { width } = useWindowSize();
  const { Search } = Input;

  //? ============== Handle Grid and Default View ============= ?//
  const view = width > 768 ? false : true;
  const [isGrid, setisGrid] = useState(view);
  const toggleState = () => {
    setisGrid(!isGrid);
  };
  // * ====================================== * //

  //? ============== Auction Details============= ?//
  const { data: auctionData, loading } = useAuction({ singleId: router.query.id });
  // * ====================================== * //

  //? ============== Auction Item List ============= ?//
  const { data: auctionItems } = useAuctionItems({
    queryString: "",
    auctionId: router.query.id,
  });
  // * ====================================== * //

  //#region Handle Modal
  const [isVisible, setIsVisible] = useState(false);
  const handleModal = () => {
    setIsVisible(!isVisible);
  };
  //#endregion

  //? ============== Option Value ============= ?//
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
  // * ====================================== * //

  //? ============== Handle Filter ============= ?//
  const [selectedNumber, setSelectedNumber] = useState(null);
  const handleNumberChange = (value) => {
    setSelectedNumber(value);
  };

  // * ====================================== * //

  return (
    <>
      <ThemesBanner
        imgSrc={auctionData?.thumbnail}
        className={s.bannerContainer}
        id={router.query.id}
      >
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
            // #region Search Auction
            <>
              {width >= 500 ? (
                <>
                  <Row gutter={[32, 32]} className={s.searchContainer}>
                    <Col onClick={toggleState} className={s.click}>
                      <h4>{isGrid ? <AppstoreOutlined /> : <UnorderedListOutlined />}</h4>
                    </Col>
                    <Divider type="vertical" className={s.divider} />
                    <Row gutter={16} align="middle">
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
                        style={{ width: width > 768 ? 300 : 200 }}
                        bordered={false}
                        options={options}
                        // value={selectedNumber}
                        // onChange={handleNumberChange}
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
                        <Col span={2}>
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
              )}
            </>
            //#endregion
          }
          {
            //#region Item Section
            <Row gutter={[16, 16]} style={{ paddingBottom: "80px" }} justify="flex-start">
              {auctionItems?.length > 0 ? (
                auctionItems?.map((item, index) => {
                  return (
                    <Col
                      xl={isGrid ? { span: 8 } : { span: 24 }}
                      lg={isGrid ? { span: 8 } : { span: 24 }}
                      sm={isGrid ? { span: 12 } : { span: 24 }}
                      xs={{ span: 24 }}
                      key={index}
                    >
                      <ThemesAuctionLotsList
                        grid={isGrid}
                        artworkDetails={item.artwork_details}
                        auctionDetails={item.auction_details}
                        auctionData={auctionData}
                        handleVisible={handleModal}
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
            //#endregion
          }
        </ThemesContainerMain>

        {
          //#region Modal
          <ThemesModalAuctionLogin visible={isVisible} handleModal={handleModal} />
          //#endregion
        }
      </Col>
    </>
  );
}

ThemesContentsAuctionDetailsLots.propTypes = {
  auctionData: propTypes.any.isRequired,
};

export default ThemesContentsAuctionDetailsLots;
