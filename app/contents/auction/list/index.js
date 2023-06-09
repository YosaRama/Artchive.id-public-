// Libs
import { Empty, Table } from "antd";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/router";

// Components
import AppContainerBox from "app/components/container/box";
import AppContainerCard from "app/components/container/card";
import AppAddButton from "app/components/libs/add-button";
import deleteConfirmModal from "app/components/utils/delete-modal-confirm";
import AuctionColumn from "./utils";

// Dummy
import { auctionList } from "app/database/dummy/auction-list";
import { useAuctions } from "app/hooks/auction";

function AppContentsAuctionList() {
  const router = useRouter();
  //? ============== Handle Pagination ============= ?//
  const pageSize = 10;
  const [page, setPage] = useState();
  const handlePagination = (pagination, sort, filter) => {
    setPage(pagination.current);
  };
  // * ====================================== * //

  //? ============== Handle Delete ============= ?//
  const handleDelete = (id) => {
    deleteConfirmModal({ title: "genre", onDelete: () => onDelete(id) });
  };
  // * ====================================== * //

  //? ============== Handle Column ============= ?//
  const columns = AuctionColumn({ onDelete: handleDelete });
  // * ====================================== * //

  //#region Auction Hooks
  const { data: auctionDataList, loading: auctionListLoading } = useAuctions({ queryString: "" });
  console.log("auctionDataList", auctionDataList);

  //#endregion

  return (
    <>
      <AppContainerBox>
        <AppContainerCard>
          <AppAddButton onCreate={() => router.push("/dashboard/auction/create")}>
            Add Auction
          </AppAddButton>
          {auctionList && (
            <Table
              columns={columns}
              rowKey={() => uuid()}
              dataSource={auctionList}
              // loading={loading}
              // pagination={{ pageSize: pageSize, total: total }}
              onChange={handlePagination}
            />
          )}
          {!auctionList && <Empty />}
        </AppContainerCard>
      </AppContainerBox>
    </>
  );
}

export default AppContentsAuctionList;
