// Libs
import { Empty, Table } from "antd";
import { useState } from "react";
import { v4 as uuid } from "uuid";

// Components
import AppContainerBox from "app/components/container/box";
import AppContainerCard from "app/components/container/card";
import AppAddButton from "app/components/libs/add-button";
import deleteConfirmModal from "app/components/utils/delete-modal-confirm";
import ExhibitionColumn from "./utils";

// Data Hook
import { useExhibitions } from "app/hooks/exhibition";

function AppContentsExhibitionList() {
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
          <AppAddButton>Add Exhibition</AppAddButton>
          <Table
            columns={columns}
            rowKey={() => uuid()}
            dataSource={exhibitionData}
            loading={loading}
            pagination={{ pageSize: pageSize, total: total }}
            onChange={handlePagination}
          />
          <Empty />
        </AppContainerCard>
      </AppContainerBox>
    </>
  );
}

export default AppContentsExhibitionList;
