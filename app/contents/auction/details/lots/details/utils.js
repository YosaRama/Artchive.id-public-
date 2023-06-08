/* eslint-disable jsx-a11y/alt-text */

// Libs
import moment from "moment";

// Helper
import priceFormatter from "app/helpers/priceFormatter";

function AuctionLogsColumn() {
  const column = [
    {
      title: "User",
      dataIndex: "user_ref",
      key: "user_ref",

      render: (t, r) => <p>{t}</p>,
    },
    {
      title: "Bid Price",
      dataIndex: "bid_price",
      key: "bid_price",
      render: (t, r) => <p>IDR {priceFormatter(`${t}`, ",")}</p>,
    },
    {
      title: "Bid Time",
      dataIndex: "created_at",
      key: "created_at",
      render: (t, r) => <p>{moment(t).format("DD MMMM YYYY, hh:mm A")}</p>,
    },
  ];

  return column;
}

export default AuctionLogsColumn;
