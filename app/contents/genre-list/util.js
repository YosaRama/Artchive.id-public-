// Libs
import { Col, Row } from "antd";
import { useRouter } from "next/router";

// Icons
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function GenreColumns({ onDelete }) {
  const router = useRouter();

  //? ============== Handle Edit ============= ?//
  const handleEdit = (id) => {
    router.push(`/dashboard/genre/${id}`);
  };
  // * ====================================== * //

  //? ============== Handle Delete ============= ?//
  const handleDelete = (id) => {
    onDelete(id);
  };
  // * ====================================== * //

  const column = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Genre",
      dataIndex: "title",
      key: "title",
      render: (t, r) => <p style={{ textTransform: "capitalize" }}>{t}</p>,
    },
    {
      title: "Action",
      dataIndex: "action",
      width: 100,
      key: "action",
      render: (t, r) => {
        return (
          <Row gutter={[16, 0]}>
            <Col>
              <EditOutlined onClick={() => handleEdit(r.id)} />
            </Col>
            <Col>
              <DeleteOutlined onClick={() => handleDelete(r.id)} />
            </Col>
          </Row>
        );
      },
    },
  ];

  return column;
}

export default GenreColumns;
