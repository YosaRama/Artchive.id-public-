// Libs
import { Empty, Table } from "antd";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/router";

// Components
import AppContainerBox from "dashboard/components/container/box";
import AppContainerCard from "dashboard/components/container/card";
import AppAddButton from "dashboard/components/libs/add-button";
import deleteConfirmModal from "dashboard/components/utils/delete-modal-confirm";
import ExhibitionColumn from "./utils";

// Data Hook
import { useExhibitions } from "dashboard/hooks/exhibition";

function AppContentsExhibitionList() {
  const router = useRouter();
  //? ============== Handle Pagination ============= ?//
  const pageSize = 10;
  const [page, setPage] = useState();
  const handlePagination = (pagination, sort, filter) => {
    setPage(pagination.current);
  };
  // * ====================================== * //

  //? ============== Exhibition Hook ============= ?//
  const {
    data: exhibitionData,
    loading,
    onAdd,
    onDelete,
    total,
  } = useExhibitions({ queryString: `page=${page}&limit=${pageSize}` });
  // * ====================================== * //

  //? ============== Handle Delete ============= ?//
  const handleDelete = (id) => {
    deleteConfirmModal({ title: "genre", onDelete: () => onDelete(id) });
  };
  // * ====================================== * //

  //? ============== Handle Column ============= ?//
  const columns = ExhibitionColumn({ onDelete: handleDelete });
  // * ====================================== * //

  return (
    <>
      <AppContainerBox>
        <AppContainerCard>
          <AppAddButton onCreate={() => router.push("/dashboard/exhibitions/create")}>
            Add Exhibition
          </AppAddButton>
          {exhibitionData && (
            <Table
              columns={columns}
              rowKey={() => uuid()}
              dataSource={exhibitionData}
              loading={loading}
              pagination={{ pageSize: pageSize, total: total }}
              onChange={handlePagination}
            />
          )}
          {!exhibitionData && <Empty />}
        </AppContainerCard>
      </AppContainerBox>
    </>
  );
}

export default AppContentsExhibitionList;
