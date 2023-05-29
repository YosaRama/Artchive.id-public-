// Libs
import { Col, Row, Input, Select, Divider } from "antd";

import { AppstoreOutlined, SlidersOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { useState } from "react";
import propTypes from "prop-types";
import moment from "moment";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesBanner from "themes/components/libs/banner";
import ThemesAuctionLotsList from "themes/components/libs/auction-lots-list";
import ThemesBannerAuctionItem from "themes/components/libs/banner-auction";
import ThemesModalAuctionRegister from "themes/components/libs/modal-auction-register";
import ThemesModalAuctionLogin from "themes/components/libs/modal-auction-login";

// Styles
import s from "./index.module.scss";

function ThemesContentsAuctionDetailsLots(props) {
  const { auctionData } = props;
  const todayDate = moment();
  const [view, setView] = useState(false);
  const toggleState = () => {
    setView(!view);
  };
  const [haveAccount, setHaveAccount] = useState(true);
  const toggleAccount = () => {
    setHaveAccount(!haveAccount);
  };

  const { Search } = Input;

  return (
    <>
      <ThemesBanner imgSrc={auctionData.thumbnail} className={s.bannerContainer}>
        <ThemesBannerAuctionItem
          title={auctionData.title}
          startDate={auctionData.start_date}
          placeName={auctionData.place_name}
          slug={auctionData.slug}
        />
      </ThemesBanner>

      {/* //? ============== Modal ============= ?// */}
      {/* //TODO : If not login, show modal register, if login, show modal login// */}
      {todayDate.isBefore(auctionData.end_date) ? (
        <>
          {haveAccount ? (
            <ThemesModalAuctionLogin
              startDate={auctionData.start_date}
              endDate={auctionData.end_date}
            />
          ) : (
            <ThemesModalAuctionRegister
              startDate={auctionData.start_date}
              endDate={auctionData.end_date}
            />
          )}
        </>
      ) : (
        ""
      )}
      {/* // * ====================================== * // */}

      <Col className={s.bgWhite}>
        <ThemesContainerMain>
          {/* //? ============== Search Auction ============= ?// */}

          <Row gutter={[32, 32]} className={s.searchContainer}>
            <Col onClick={toggleState} className={s.click}>
              <h4>{view ? <AppstoreOutlined /> : <UnorderedListOutlined />}</h4>
            </Col>
            <Divider type="vertical" className={s.divider} />
            <Col>
              <p>Filter</p>
            </Col>
            <Col>
              <h4>
                <SlidersOutlined />
              </h4>
            </Col>
            <Col>
              <Select
                defaultValue="Sort by"
                style={{ width: 240 }}
                options={[
                  {
                    value: "-",
                    label: (
                      <p>
                        Sort by <span>Estimate (Low to High)</span>
                      </p>
                    ),
                  },
                  {
                    value: "-",
                    label: (
                      <p>
                        Sort by <span>Estimate (High to Low)</span>
                      </p>
                    ),
                  },
                ]}
              />
            </Col>
            <Divider type="vertical" className={s.divider} />

            <Col>
              <Search placeholder="Search Lot Item" />
            </Col>
          </Row>
          <Divider className={s.dividerX} />

          {/* // * ====================================== * // */}

          {/* //? ============== Item Section ============= ?// */}
          <Row gutter={[16, 16]} style={{ paddingBottom: "80px" }}>
            {auctionData.lots.map((item, index) => {
              return (
                <Col span={view ? 8 : 24} key={index}>
                  <ThemesAuctionLotsList
                    imgHeight={item.imgHeight}
                    imgWidth={item.imgWidth}
                    title={item.title}
                    lot={item.id}
                    artistName={item.artist}
                    media={item.media}
                    estimation={item.estimation}
                    current={item.current}
                    lotOpenDate={item.start_date}
                    lotCloseDate={item.end_date}
                    imgUrl={item.imgUrl}
                    grid={view}
                    status={item.status}
                    artworkUrl={`/auction/${auctionData.slug}/artwork/${item.slug}`}
                  />
                </Col>
              );
            })}
          </Row>
          {/* // * ====================================== * // */}
        </ThemesContainerMain>
      </Col>
    </>
  );
}

ThemesContentsAuctionDetailsLots.propTypes = {
  auctionData: propTypes.any.isRequired,
};

export default ThemesContentsAuctionDetailsLots;
