// Libs
import moment from "moment";

// Dummy
import { auctionList } from "dashboard/database/dummy/auction-list";
import { useAuction } from "dashboard/hooks/auction";

// Contents
import ThemesContentsAuctionDetailsLots from "themes/contents/auction/lots";
import ThemesContainerAuction from "themes/components/container/auction";

function PageAuctionDetailsLots(props) {
  return (
    <>
      <ThemesContainerAuction>
        <ThemesContentsAuctionDetailsLots />
      </ThemesContainerAuction>
    </>
  );
}

export default PageAuctionDetailsLots;

//TODO : Handle dynamic pages
