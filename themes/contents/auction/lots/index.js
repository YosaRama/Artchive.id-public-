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
import ThemesModalAuctionLogin from "themes/components/libs/modal-auction-login";

// Helper
import { useWindowSize } from "app/helpers/useWindowSize";

// Styles
import s from "./index.module.scss";

function ThemesContentsAuctionDetailsLots(props) {
  const { auctionData } = props;
  const todayDate = moment();
  const { width } = useWindowSize();
  const { Search } = Input;

  ///? ============== MODAL LOGIN============= ?//
  const [haveAccount, setHaveAccount] = useState(false);
  const [login, setLogin] = useState(false);
  const [visible, setVisible] = useState(false);
  const handleVisible = () => {
    setVisible(!visible);
  };
  const [verified, setVerified] = useState(false);
  const [register, setRegister] = useState(false);
  // * ====================================== * //

  //? ============== Handle Grid and Default View ============= ?//
  const [view, setView] = useState(false);
  const gridView = () => {
    setView(view);
  };
  const toggleState = () => {
    setView(!view);
  };
  // * ====================================== * //

  return (
    <>
      <ThemesBanner
        imgSrc={`${process.env.NEXT_PUBLIC_S3_URL}/${auctionData.thumbnail.url}`}
        className={s.bannerContainer}
        slug={auctionData.slug}
      >
        <ThemesBannerAuctionItem
          title={auctionData.title}
          startDate={auctionData.start_date}
          endDate={auctionData.end_date}
          placeName={auctionData.place_name}
        />
      </ThemesBanner>

      {/* //? ============== Modal ============= ?// */}

      <ThemesModalAuctionLogin
        startDate={auctionData.start_date}
        endDate={auctionData.end_date}
        visible={todayDate.isBefore(auctionData.start_date) ? true : visible}
        onLogin={() => setLogin(!login)}
        onVerified={() => setVerified(!verified)}
        onRegister={() => setRegister(!register)}
        onVisible={() => setVisible(!visible)}
        onHaveAccount={() => {
          setHaveAccount(!haveAccount);
          setVerified(!verified);
          setVisible(!visible);
        }}
        login={login}
        verified={verified}
        register={register}
      />

      {/* // * ====================================== * // */}

      <Col className={s.bgWhite}>
        <ThemesContainerMain>
          {/* //? ============== Search Auction ============= ?// */}

          {width >= 500 ? (
            <>
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
                <Divider className={s.divider} />
              </Col>
            </>
          )}

          {/* // * ====================================== * // */}

          {/* //? ============== Item Section ============= ?// */}
          <Row gutter={[16, 16]} style={{ paddingBottom: "80px" }}>
            {auctionData.lots.map((item, index) => {
              return (
                <Col
                  xl={view ? { span: 8 } : { span: 24 }}
                  lg={view ? { span: 8 } : { span: 24 }}
                  sm={view ? { span: 12 } : { span: 24 }}
                  xs={{ span: 24 }}
                  key={index}
                >
                  <ThemesAuctionLotsList
                    imgHeight={item.height}
                    imgWidth={item.width}
                    title={item.title}
                    lot={item.id}
                    artistName={item.artist}
                    media={item.media}
                    estimation={item.estimation}
                    initialPrice={item.initial_price}
                    lotOpenDate={item.start_time}
                    lotCloseDate={item.end_time}
                    imgUrl={item.media_cover.url}
                    grid={width > 500 ? view : gridView}
                    status={item.status}
                    artworkUrl={`/auction/${auctionData.slug}/artwork/${item.slug}`}
                    onClick={
                      todayDate.isBetween(item.start_time, item.end_time) ? handleVisible : ""
                    }
                    haveAccount={haveAccount}
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
