// Libs

import { Col, Divider } from "antd";
import propTypes from "prop-types";
import moment from "moment";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesBanner from "themes/components/libs/banner";
import ThemesBannerAuctionItem from "themes/components/libs/banner-auction";
import ThemesCuratorCard from "themes/components/libs/curator-card";

// Styles
import s from "./index.module.scss";

function ThemesContentsAuctionDetails(props) {
  const { auctionData } = props;

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
      <Col className={s.detailsContainer}>
        <ThemesContainerMain>
          {/* //? ============== Overview ============= ?// */}
          <Col style={{ margin: "0px 0px 40px" }}>{auctionData.details}</Col>
          <Divider className={s.divider} />
          <Col style={{ margin: "0px 0px 40px" }}>
            <h1>Visi</h1>
            <p>{auctionData.visi}</p>
          </Col>
          <Col style={{ margin: "0px 0px 40px" }}>
            <h1>Misi</h1>
            <p>{auctionData.misi}</p>
          </Col>
          <Divider style={{ margin: "0px" }} />
        </ThemesContainerMain>
      </Col>
      <ThemesContainerMain>
        <Col className={s.curator}>
          <h1>Curatorial Statement</h1>
          {auctionData.curator.map((item, index) => {
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
