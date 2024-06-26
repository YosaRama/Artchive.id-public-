// Libs
import { useRouter } from "next/router";
import { Col, Divider } from "antd";
import propTypes from "prop-types";
import moment from "moment";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesBanner from "themes/components/libs/banner";
import ThemesBannerAuctionItem from "themes/components/libs/banner-auction";
import ThemesCuratorCard from "themes/components/libs/curator-card";

// Hooks
import { useAuction } from "dashboard/hooks/auction";

// Dummy
import { auctionList } from "dashboard/database/dummy/auction-list";

// Styles
import s from "./index.module.scss";

function ThemesContentsAuctionDetails() {
  const router = useRouter();
  // #region Auction Data
  const { data: auctionData, loading } = useAuction({ singleId: router.query.id });
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
      {
        // #region Auction Details
        <Col className={s.detailsContainer}>
          <ThemesContainerMain>
            {/* <Col
              style={{ margin: "0px 0px 40px" }}
              dangerouslySetInnerHTML={{ __html: auctionData?.description }}
            /> */}
            {/* <Divider className={s.divider} /> */}
            <Col style={{ margin: "0px 0px 40px" }}>
              <h1>Visi</h1>
              <p
                dangerouslySetInnerHTML={{
                  __html: auctionData?.vision.replace(/<\/p>/g, "\n").replace(/<p>/g, "").trim(),
                }}
              />
            </Col>
            <Col style={{ margin: "0px 0px 40px" }}>
              <h1>Misi</h1>
              <p
                dangerouslySetInnerHTML={{
                  __html: auctionData?.mission.replace(/<\/p>/g, "\n").replace(/<p>/g, "").trim(),
                }}
              />
            </Col>
            <Divider style={{ margin: "0px" }} />
          </ThemesContainerMain>
        </Col>
        // #endregion
      }
      {/* <ThemesContainerMain>
        <Col className={s.curator}>
          <h1>Curatorial Statement</h1>
          {auctionList[0].curator.map((item, index) => {
            return (
              <>
                <ThemesCuratorCard
                  curatorName={item.name}
                  description={item.background}
                  imgUrl={item.img_url}
                />
              </>
            );
          })}
        </Col>
      </ThemesContainerMain> */}
    </>
  );
}

export default ThemesContentsAuctionDetails;
