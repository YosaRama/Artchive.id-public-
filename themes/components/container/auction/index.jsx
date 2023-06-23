// Libs
import ThemesModalAuctionLogin from "themes/components/libs/modal-auction-login";
import { useRouter } from "next/router";
import moment from "moment";

import { useAuction } from "app/hooks/auction";

function ThemesContainerAuction(props) {
  const { children } = props;
  const router = useRouter();
  const { id } = router.query;
  const session = true;

  const { data: auctionData } = useAuction({ singleId: id });

  //? ============== Timeline ============= ?//
  const todayDate = moment();
  const beforeEvent = !session && todayDate.isBefore(auctionData?.start_date);
  // * ====================================== * //

  return (
    <>
      <section>{children}</section>
      {beforeEvent && <ThemesModalAuctionLogin />}
    </>
  );
}

export default ThemesContainerAuction;
