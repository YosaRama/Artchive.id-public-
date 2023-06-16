/* eslint-disable @next/next/no-img-element */

// Libs
import { PageHeader, Col } from "antd";
import propTypes from "prop-types";
import { useRouter } from "next/router";
import { useWindowSize } from "app/helpers/useWindowSize";

// Components
import ThemesContentsAuctionlotDataList from "themes/contents/auction/artwork/information";
import ThemesContainerMain from "themes/components/container/main";
import ThemesContentsAuctionBidDetails from "./bid";

// Styles
import s from "./index.module.scss";
import AppContentsArtworkDetails from "app/contents/artwork/details";

function ThemesContentsAuctionDetails(props) {
  const { lotDataList } = props;
  const router = useRouter();

  return (
    <>
      <section className={s.bgWhite}>
        <ThemesContainerMain>
          <PageHeader
            style={{ padding: 0, marginBottom: 20 }}
            title={`${lotDataList?.title} Lot Details`}
            onBack={() => router.back()}
          />

          <ThemesContentsAuctionlotDataList
            artworkImg={lotDataList?.media_cover.url}
            mediaGallery={lotDataList?.media_gallery}
            title={lotDataList?.title}
            artistName={lotDataList?.artist}
            imgWidth={lotDataList?.width}
            imgHeight={lotDataList?.height}
            media={lotDataList?.media}
            information={`${lotDataList?.artist} painted this in 1913`}
            description={lotDataList?.description}
            artistRole={"Artist"}
            artistDesc={
              "Lorem ipsum dolor sit amet consectetur. Massa lectus ut quis ultricies volutpat in. Eget amet ultrices et aliquam. Sed in condimentum pellentesque nulla gravida varius massa at risus. Neque duis blandit gravida sem lacus scelerisque metus. Lorem ipsum dolor sit amet consectetur. Massa lectus ut quis ultricies volutpat in. Eget amet ultrices et aliquam. Sed in condimentum pellentesque nulla gravida varius massa at risus. Neque duis blandit gravida sem lacus scelerisque metus.Lorem ipsum dolor sit amet consectetur. Massa lectus ut quis ultricies volutpat in. Eget amet ultrices et aliquam. Sed in condimentum pellentesque nulla gravida varius massa at risus. Neque duis blandit gravida sem lacus scelerisque metus."
            }
            imgCondition={lotDataList?.condition}
            conditionDesc={`Lorem ipsum dolor sit amet consectetur. Imperdiet tellus non sit risus aenean viverra. Interdum orci non accumsan posuere vel.`}
            lotEnd={lotDataList?.end_time}
            estimation={lotDataList?.estimation}
            startingBid={lotDataList?.initial_price}
            step={lotDataList?.step}
            logs={lotDataList?.logs}
            status={lotDataList?.status}
          />
        </ThemesContainerMain>
      </section>

      <ThemesContentsAuctionBidDetails
        estimation={lotDataList?.estimation}
        startingBid={lotDataList?.initial_price}
        step={lotDataList?.step}
        sticky={true}
        status={lotDataList?.status}
        bidHistory={lotDataList?.logs}
      />
    </>
  );
}

ThemesContentsAuctionDetails.propTypes = {
  lotDataList: propTypes.any.isRequired,
};

export default ThemesContentsAuctionDetails;
