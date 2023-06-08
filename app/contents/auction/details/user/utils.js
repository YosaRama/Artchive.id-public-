/* eslint-disable jsx-a11y/alt-text */

// Components
import AppTableAction from "app/components/libs/table-action";

function AuctionUserColumn({ onDelete, handleEdit }) {
  //? ============== Handle Delete ============= ?//
  const handleDelete = (id) => {
    onDelete(id);
  };
  // * ====================================== * //

  const column = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",

      render: (t, r) => <p>{t}</p>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (t, r) => <p>{t}</p>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (t, r) => <p>{t}</p>,
    },

    {
      title: "Action",
      dataIndex: "action",
      width: 100,
      key: "action",
      render: (t, r) => {
        return <AppTableAction id={r.id} onEdit={() => handleEdit(r.id)} onDelete={handleDelete} />;
      },
    },
  ];

  return column;
}

export default AuctionUserColumn;
