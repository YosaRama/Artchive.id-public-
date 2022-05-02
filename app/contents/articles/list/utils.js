/* eslint-disable jsx-a11y/alt-text */

// Libs
import moment from "moment";
import { useRouter } from "next/router";

// Components
import AppTableAction from "app/components/libs/table-action";
import { Col, Image } from "antd";

function ArticlesColumn({ onDelete }) {
  const router = useRouter();

  //? ============== Handle Edit ============= ?//
  const handleEdit = (id) => {
    router.push(`/dashboard/articles/${id}`);
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
      title: "Thumbnail",
      dataIndex: "thumbnail",
      key: "thumbnail",
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
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (t, r) => <p>{t}</p>,
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
      render: (t, r) => <p>{t}</p>,
    },
    {
      title: "Details",
      dataIndex: "details",
      key: "details",
      render: (t, r) => {
        return (
          <>
            <p>{`Created By : ${r.created_by.full_name}`}</p>
            <p>{`Created At : ${
              r.created_at ? moment(r.created_at).format("DD MMMM YYYY") : "-"
            }`}</p>
            <p>{`Updated By : ${r.updated_by ? r.updated_by.full_name : "-"}`}</p>
            <p>{`Updated At : ${
              r.updated_at ? moment(r.updated_at).format("DD MMMM YYYY") : "-"
            }`}</p>
          </>
        );
      },
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

export default ArticlesColumn;
