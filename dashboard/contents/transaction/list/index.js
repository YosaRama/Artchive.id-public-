// Libs
import { useState } from "react";
import { Empty, Table } from "antd";
import { useRouter } from "next/router";
import { v4 as uuid } from "uuid";

// Component
import AppContainerBox from "dashboard/components/container/box";
import AppContainerCard from "dashboard/components/container/card";
import OrderColumn from "./utils";

// Data Hook
import { useOrders } from "dashboard/hooks/order";

// Icon

function AppContentsTransactionLists(props) {
  const router = useRouter();

  //? ============== Handle Pagination ============= ?//
  const pageSize = 10;
  const [page, setPage] = useState();
  const handlePagination = (pagination, sort, filter) => {
    setPage(pagination.current);
  };
  // * ====================================== * //

  //? ============== Order Hooks ============= ?//
  const {
    data: orderData,
    total,
    loading,
  } = useOrders({
    queryString: `limit=${pageSize}&page=${page}`,
  });

  // * ====================================== * //

  //? ============== Handle Column ============= ?//
  const column = OrderColumn();
  // * ====================================== * //

  return (
    <AppContainerBox>
      <AppContainerCard title="Transaction List" style={{ margin: "30px 0" }}>
        {orderData && (
          <Table
            columns={column}
            dataSource={orderData}
            rowKey={() => uuid()}
            loading={loading}
            pagination={{ pageSize: pageSize, total: total }}
            onChange={handlePagination}
          />
        )}
        {!orderData && <Empty />}
      </AppContainerCard>
    </AppContainerBox>
  );
}

export default AppContentsTransactionLists;
