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
import { useAuction } from "app/hooks/auction";

// Dummy
import { auctionList } from "app/database/dummy/auction-list";

// Styles
import s from "./index.module.scss";

function ThemesContentsAuctionDetails(props) {
  const router = useRouter();
  //? ============== Auction Details============= ?//
  const { data: auctionDetails, loading } = useAuction({ singleId: router.query.id });
  const auctionData = auctionDetails?.result;
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
      <Col className={s.detailsContainer}>
        <ThemesContainerMain>
          {/* //? ============== Overview ============= ?// */}
          <Col style={{ margin: "0px 0px 40px" }}>{auctionData?.description}</Col>
          <Divider className={s.divider} />
          <Col style={{ margin: "0px 0px 40px" }}>
            <h1>Visi</h1>
            <p>{auctionData?.vision}</p>
          </Col>
          <Col style={{ margin: "0px 0px 40px" }}>
            <h1>Misi</h1>
            <p>{auctionData?.mission}</p>
          </Col>
          <Divider style={{ margin: "0px" }} />
        </ThemesContainerMain>
      </Col>
      <ThemesContainerMain>
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
      </ThemesContainerMain>
    </>
  );
}

ThemesContentsAuctionDetails.propTypes = {
  auctionData: propTypes.any.isRequired,
};

export default ThemesContentsAuctionDetails;
