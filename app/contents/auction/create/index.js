// Libs
import { PageHeader } from "antd";
import { useRouter } from "next/router";

// Components
import AppContainerBox from "app/components/container/box";
import AppContainerCard from "app/components/container/card";
import AppFormAuctionDetails from "app/components/libs/form-auction-details";
import { useAuctions } from "app/hooks/auction";

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
