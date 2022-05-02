// Libs
import { Empty, Table } from "antd";
import { useState } from "react";
import { v4 as uuid } from "uuid";

// Components
import AppContainerBox from "app/components/container/box";
import AppContainerCard from "app/components/container/card";
import AppAddButton from "app/components/libs/add-button";
import ArticlesColumn from "./utils";
import deleteConfirmModal from "app/components/utils/delete-modal-confirm";

// Data Hook
import { useArticles } from "app/hooks/articles";

function AppContentsArticleList() {
  //? ============== Article Hook ============= ?//
  const { data: articlesData, loading, onDelete, total } = useArticles({ queryString: "" });
  console.log(articlesData);
  // * ====================================== * //

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
  const columns = ArticlesColumn({ onDelete: handleDelete });
  // * ====================================== * //

  return (
    <>
      <AppContainerBox>
        <AppContainerCard title="Articles List">
          <AppAddButton>Add Articles</AppAddButton>
          {articlesData && (
            <Table
              columns={columns}
              dataSource={articlesData}
              rowKey={() => uuid()}
              loading={loading}
              pagination={{ pageSize: pageSize, total: total }}
              onChange={handlePagination}
            />
          )}
          {!articlesData && <Empty />}
        </AppContainerCard>
      </AppContainerBox>
    </>
  );
}

export default AppContentsArticleList;
