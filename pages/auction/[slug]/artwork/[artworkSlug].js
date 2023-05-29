// Libs
import { useRouter } from "next/router";

// Contents
import ThemesContentsAuctionArtwork from "themes/contents/auction/artwork";

// Dummy
import { auctionList } from "app/database/dummy/auction-list";

function PageArtworkOnAuctionDetails(props) {
  return (
    <>
      <ThemesContentsAuctionArtwork artworkData={auctionList[0]} />
    </>
  );
}

export default PageArtworkOnAuctionDetails;
