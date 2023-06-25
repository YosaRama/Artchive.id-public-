/* eslint-disable @next/next/no-img-element */

// Libs
import { PageHeader } from "antd";
import propTypes from "prop-types";
import { useRouter } from "next/router";

// Components
import ThemesContentsAuctionlotDataList from "themes/contents/auction/artwork/information";
import ThemesContainerMain from "themes/components/container/main";
import ThemesContentsAuctionBidDetails from "./bid";

// Hooks
import { useAuctionItem } from "app/hooks/auction/item";

// Styles
import s from "./index.module.scss";

function ThemesContentsAuctionDetails() {
  const router = useRouter();

  const { id: auctionId, lotId } = router.query;
  const { data: lotDetails } = useAuctionItem({ singleId: lotId, auctionId: auctionId });

  const itemsDetails = lotDetails?.artwork_details;
  const bidDetails = lotDetails?.auction_details;

  return (
    <>
      <section className={s.bgWhite}>
        <ThemesContainerMain>
          <PageHeader
            style={{ padding: 0, marginBottom: 20 }}
            title={`${itemsDetails?.title} Lot Details`}
            onBack={() => router.push(`/auction/${auctionId}/lots`)}
          />

          <ThemesContentsAuctionlotDataList />
        </ThemesContainerMain>
      </section>

      {
        <ThemesContentsAuctionBidDetails
          estimation={bidDetails?.end_estimation}
          startingBid={bidDetails?.initial_price}
          step={bidDetails?.step}
          sticky={true}
          // status={items?.status}
          // bidHistory={items?.logs}
        />
      }
    </>
  );
}

ThemesContentsAuctionDetails.propTypes = {
  lotDataList: propTypes.any.isRequired,
};

export default ThemesContentsAuctionDetails;
