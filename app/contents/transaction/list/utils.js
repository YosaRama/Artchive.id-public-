/* eslint-disable jsx-a11y/alt-text */

// Libs
import { useRouter } from "next/router";
import moment from "moment";

// Components
import AppTableAction from "app/components/libs/table-action";
import { Col, Image } from "antd";

// Styles
import s from "./index.module.scss";

// Helper
import priceFormatter from "app/helpers/priceFormatter";

function OrderColumn() {
  //? ============== Handle Edit ============= ?//
  const handleEdit = (id) => {
    router.push(`/dashboard/transaction/${id}`);
  };
  // * ====================================== * //

  const router = useRouter();

  const column = [
    {
      title: "Order Id",
      dataIndex: "id",
      key: "id",
      width: 100,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (t, r) => (
        <Col
          className={
            t == "PENDING"
              ? s.statusPending
              : t == "PROCEED"
              ? s.statusProceed
              : t == "SHIPPING"
              ? s.statusShipping
              : t == "CANCEL"
              ? s.statusCancel
              : s.statusSuccess
          }
        >
          {t}
        </Col>
      ),
    },
    {
      title: "Transaction Time",
      dataIndex: "transaction_time",
      key: "transaction_time",
      render: (t, r) => <Col>{moment(t).format("MMMM DD, YYYY")}</Col>,
    },
    {
      title: "Total Payment",
      dataIndex: "total_amount",
      key: "total_amount",
      render: (t, r) => <Col>IDR {priceFormatter(t, ",")}</Col>,
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (t, r) => {
        return <AppTableAction id={r.id} onEdit={handleEdit} activeDelete={false} />;
      },
    },
  ];

  return column;
}

export default OrderColumn;
