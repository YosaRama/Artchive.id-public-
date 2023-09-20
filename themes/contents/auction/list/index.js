// Libs
import { Col, Empty, Row, Spin } from "antd";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesBanner from "themes/components/libs/banner";
import ThemesAuctionCard from "themes/components/libs/auction-card-list";

// Data Hook
import { useAuctions } from "app/hooks/auction";

// Helpers
import { useWindowSize } from "app/helpers/useWindowSize";

// Styles
import s from "./index.module.scss";

function ThemesContentsAuctionList() {
  const { width } = useWindowSize();

  //? ============== Auction Hook ============= ?//
  const { data: auctionList, loading: auctionListLoading } = useAuctions({ queryString: "" });
  // * ====================================== * //
  console.log(auctionList);
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
                  // #region Auction List
                  <Col span={24} style={{ width: "100%" }}>
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
                                  thumbnail={
                                    item?.thumbnail !==
                                    "https://s3.ap-southeast-1.amazonaws.com/artchivestagingbucket/undefined"
                                      ? item?.thumbnail
                                      : "/images/default-images.jpg"
                                  }
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
