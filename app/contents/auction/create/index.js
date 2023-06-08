// Libs
import { PageHeader } from "antd";
import { useRouter } from "next/router";

// Components
import AppContainerBox from "app/components/container/box";
import AppContainerCard from "app/components/container/card";
import AppFormAuctionDetails from "app/components/libs/form-auction-details";
import { useExhibitions } from "app/hooks/exhibition";

function AppContentsAuctionCreate() {
  const router = useRouter();

  //? ============== Auction Hooks ============= ?//
  const { onAdd } = useExhibitions({ queryString: `` });
  // * ====================================== * //

  return (
    <>
      <AppContainerBox>
        <PageHeader title="Create New Exhibitions" onBack={() => router.back()} />
        <AppContainerCard>
          <AppFormAuctionDetails onSubmit={onAdd} />
        </AppContainerCard>
      </AppContainerBox>
    </>
  );
}

export default AppContentsAuctionCreate;
