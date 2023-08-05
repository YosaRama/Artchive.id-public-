// Libs
import { Empty, Table } from "antd";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/router";

// Components
import AppContainerBox from "app/components/container/box";
import AppContainerCard from "app/components/container/card";
import AppAddButton from "app/components/libs/add-button";
import deleteConfirmModal from "app/components/utils/delete-modal-confirm";
import AuctionColumn from "./utils";

// Hooks
import { useAuctions } from "app/hooks/auction";

function AppContentsAuctionList() {
  const router = useRouter();

  //#region Auction Hooks
  const {
    data: auctionDataList,
    loading: auctionListLoading,
    onDelete: auctionDelete,
  } = useAuctions({ queryString: "" });
  //#endregion

  //#region Handle delete
  const handleDelete = (id) => {
    deleteConfirmModal({ title: "Auction events", onDelete: () => auctionDelete(id) });
  };
  //#endregion

  const columns = AuctionColumn({ onDelete: handleDelete });

  return (
    <>
      <AppContainerBox>
        <AppContainerCard>
          <AppAddButton onCreate={() => router.push("/dashboard/auction/create")}>
            Add Auction
          </AppAddButton>
          {auctionDataList && (
            <Table
              columns={columns}
              rowKey={() => uuid()}
              dataSource={auctionDataList}
              loading={auctionListLoading}
            />
          )}
          {!auctionDataList && <Empty />}
        </AppContainerCard>
      </AppContainerBox>
    </>
  );
}

export default AppContentsAuctionList;
