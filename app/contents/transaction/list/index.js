// Libs
import { Empty, Table } from "antd";
import { useRouter } from "next/router";
import { v4 as uuid } from "uuid";

// Component
import AppContainerBox from "app/components/container/box";
import AppContainerCard from "app/components/container/card";
import OrderColumn from "./utils";

// Data Hook
import { useOrderLoad } from "app/hooks/order";

// Icon

function AppContentsTranscationLists(props) {
  const router = useRouter();

  //? ============== Order Hooks ============= ?//
  const {
    data: orderData,
    total,
    size,
    setSize,
    loading,
  } = useOrderLoad({
    limit: 5,
    queryString: `userId=${userId || ""}`,
  });

  // * ====================================== * //
  console.log(orderData);
  const { userId } = props;

  const column = OrderColumn();

  return (
    <AppContainerBox>
      <AppContainerCard title="Transaction List" style={{ margin: "30px 0" }}>
        {orderData && (
          <Table columns={column} dataSource={orderData} rowKey={() => uuid()} loading={loading} />
        )}
        {!orderData && <Empty />}
      </AppContainerCard>
    </AppContainerBox>
  );
}

export default AppContentsTranscationLists;
