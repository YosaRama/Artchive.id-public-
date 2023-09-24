/* eslint-disable jsx-a11y/alt-text */

// Components
import AppTableAction from "app/components/libs/table-action";
import { useState } from "react";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";

function AuctionUserColumn({ onDelete, handleEdit }) {
  const [codeReveal, setCodeReveal] = useState();
  //? ============== Handle Delete ============= ?//
  const handleDelete = (id) => {
    onDelete(id);
  };
  // * ====================================== * //

  const column = [
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
      render: (t, r) => (
        <>
          {codeReveal === r.id ? (
            <div style={{ display: "flex", alignContent: "center", gap: "5px" }}>
              {t}{" "}
              <span onClick={() => setCodeReveal(null)} style={{ cursor: "pointer" }}>
                <EyeInvisibleFilled />
              </span>
            </div>
          ) : (
            <div style={{ display: "flex", alignContent: "center", gap: "5px" }}>
              ******
              <span onClick={() => setCodeReveal(r.id)} style={{ cursor: "pointer" }}>
                <EyeFilled />
              </span>
            </div>
          )}
        </>
      ),
    },
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
