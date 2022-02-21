// Libs
import { Col, Row, Tooltip } from "antd";
import { useRouter } from "next/router";

// Icons
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

// Styles
import s from "./util.module.scss";

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
              <Tooltip title="Edit">
                <EditOutlined onClick={() => handleEdit(r.id)} className={s.action} />
              </Tooltip>
            </Col>
            <Col>
              <Tooltip title="Delete">
                <DeleteOutlined onClick={() => handleDelete(r.id)} className={s.action} />
              </Tooltip>
            </Col>
          </Row>
        );
      },
    },
  ];

  return column;
}

export default GenreColumns;
