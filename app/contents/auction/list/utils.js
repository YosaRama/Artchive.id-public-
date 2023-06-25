/* eslint-disable jsx-a11y/alt-text */

// Libs
import { useRouter } from "next/router";
import moment from "moment";

// Components
import AppTableAction from "app/components/libs/table-action";
import { Col, Image } from "antd";
import priceFormatter from "app/helpers/priceFormatter";

function AuctionColumn({ onDelete }) {
  const router = useRouter();

  //? ============== Handle Edit ============= ?//
  const handleEdit = (id) => {
    router.push(`/dashboard/auction/${id}`);
  };
  // * ====================================== * //

  //? ============== Handle Delete ============= ?//
  const handleDelete = (id) => {
    onDelete(id);
  };
  // * ====================================== * //

  const column = [
    {
      title: "Thumbnail",
      dataIndex: "thumbnail",
      key: "thumbnail",
      width: 300,
      render: (t, r) => {
        return (
          <>
            <Col>
              <Image
                src={`${r.thumbnail}`}
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
              />
            </Col>
          </>
        );
      },
    },
    {
      title: "Auction Name",
      dataIndex: "name",
      key: "name",
      render: (t, r) => <p>{t}</p>,
    },
    {
      title: "Start Date",
      dataIndex: "start_date",
      key: "start_date",
      render: (t, r) => <p>{moment(t).format("DD MMMM YYYY")}</p>,
    },
    {
      title: "End Date",
      dataIndex: "end_date",
      key: "end_date",
      render: (t, r) => <p>{moment(t).format("DD MMMM YYYY")}</p>,
    },
    {
      title: "Action",
      dataIndex: "action",
      width: 100,
      key: "action",
      render: (t, r) => {
        return <AppTableAction id={r.id} onEdit={handleEdit} onDelete={handleDelete} />;
      },
    },
  ];

  return column;
}

export default AuctionColumn;
