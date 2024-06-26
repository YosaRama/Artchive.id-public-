// Components
import AppFormAuctionDetails from "dashboard/components/libs/form-auction-details";
import { useAuction } from "dashboard/hooks/auction";
import { useRouter } from "next/router";

function AppContentsAuctionDetailsGeneral() {
  const router = useRouter();
  const { id: auctionId } = router.query;
  const { data: auctionDetails, onEdit: auctionUpdate } = useAuction({ singleId: auctionId });
  return (
    <>
      {auctionDetails ? (
        <AppFormAuctionDetails
          isEdit={true}
          initialData={auctionDetails}
          onSubmit={auctionUpdate}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default AppContentsAuctionDetailsGeneral;
