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
import AppContentsArtworkDetails from "app/contents/artwork/details";

// Hooks
import { useAuctionItem, useAuctionItems } from "app/hooks/auction/item";

// Styles
import s from "./index.module.scss";

function ThemesContentsAuctionDetails() {
  const router = useRouter();
  // const { data: auctionItem } = useAuctionItem({
  //   singleId: router.query.artworkSlug,
  //   auctionId: router.query.id,
  // });
  // const item = auctionItem;
  const { id: auctionId, lotId } = router.query;
  const { data: lotDetails } = useAuctionItem({ singleId: lotId, auctionId: auctionId });

  const itemsDetails = lotDetails?.artwork_details;
  const bidDetails = lotDetails?.auction_details;
  // console.log(bidDetails);

  return (
    <>
      <section className={s.bgWhite}>
        <ThemesContainerMain>
          <PageHeader
            style={{ padding: 0, marginBottom: 20 }}
            title={`${itemsDetails?.title} Lot Details`}
            onBack={() => router.back()}
          />

          <ThemesContentsAuctionlotDataList
            artworkImg={itemsDetails?.media_cover.url}
            mediaGallery={itemsDetails?.media_gallery}
            title={itemsDetails?.title}
            artistName={itemsDetails?.artist.full_name}
            imgWidth={itemsDetails?.width}
            imgHeight={itemsDetails?.height}
            media={itemsDetails?.material}
            information={`${itemsDetails?.artist.full_name} painted this in 1913`}
            description={itemsDetails?.description}
            artistRole={"Artist"}
            artistDesc={
              "Lorem ipsum dolor sit amet consectetur. Massa lectus ut quis ultricies volutpat in. Eget amet ultrices et aliquam. Sed in condimentum pellentesque nulla gravida varius massa at risus. Neque duis blandit gravida sem lacus scelerisque metus. Lorem ipsum dolor sit amet consectetur. Massa lectus ut quis ultricies volutpat in. Eget amet ultrices et aliquam. Sed in condimentum pellentesque nulla gravida varius massa at risus. Neque duis blandit gravida sem lacus scelerisque metus.Lorem ipsum dolor sit amet consectetur. Massa lectus ut quis ultricies volutpat in. Eget amet ultrices et aliquam. Sed in condimentum pellentesque nulla gravida varius massa at risus. Neque duis blandit gravida sem lacus scelerisque metus."
            }
            imgCondition={"Good"}
            conditionDesc={`Lorem ipsum dolor sit amet consectetur. Imperdiet tellus non sit risus aenean viverra. Interdum orci non accumsan posuere vel.`}
            lotEnd={bidDetails?.stoped_at}
            estimation={bidDetails?.end_estimation}
            startingBid={bidDetails?.initial_price}
            step={bidDetails?.step}
            // logs={items?.logs}
            // status={bidDetails?.status}
          />
        </ThemesContainerMain>
      </section>

      <ThemesContentsAuctionBidDetails
        estimation={bidDetails?.end_estimation}
        startingBid={bidDetails?.initial_price}
        step={bidDetails?.step}
        sticky={true}
        // status={items?.status}
        // bidHistory={items?.logs}
      />
    </>
  );
  // return <></>;
}

ThemesContentsAuctionDetails.propTypes = {
  lotDataList: propTypes.any.isRequired,
};

export default ThemesContentsAuctionDetails;
