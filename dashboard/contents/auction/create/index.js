// Libs
import { PageHeader } from "antd";
import { useRouter } from "next/router";

// Components
import AppContainerBox from "dashboard/components/container/box";
import AppContainerCard from "dashboard/components/container/card";
import AppFormAuctionDetails from "dashboard/components/libs/form-auction-details";
import { useAuctions } from "dashboard/hooks/auction";

function AppContentsAuctionCreate() {
  const router = useRouter();

  const { onAdd } = useAuctions({ queryString: "" });

  return (
    <>
      <AppContainerBox>
        <PageHeader title="Create New Auction" onBack={() => router.back()} />
        <AppContainerCard>
          <AppFormAuctionDetails onSubmit={onAdd} />
        </AppContainerCard>
      </AppContainerBox>
    </>
  );
}

export default AppContentsAuctionCreate;
