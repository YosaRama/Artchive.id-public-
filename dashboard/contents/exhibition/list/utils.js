/* eslint-disable jsx-a11y/alt-text */

// Libs
import { useRouter } from "next/router";

// Components
import AppTableAction from "dashboard/components/libs/table-action";
import { Col, Image } from "antd";

function ExhibitionColumn({ onDelete }) {
  const router = useRouter();

  //? ============== Handle Edit ============= ?//
  const handleEdit = (id) => {
    router.push(`/dashboard/exhibitions/${id}`);
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
      width: 350,
      render: (t, r) => {
        return (
          <>
            <Col>
              <Image
                src={`${process.env.NEXT_PUBLIC_S3_URL}/${r.thumbnail.url}`}
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
              />
            </Col>
          </>
        );
      },
    },
    {
      title: "Exhibition Name",
      dataIndex: "title",
      key: "title",
      render: (t, r) => <p>{t}</p>,
    },
    {
      title: "Organized By",
      dataIndex: "organized_by",
      key: "organized_by",
      render: (t, r) => <p>{t}</p>,
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

export default ExhibitionColumn;
