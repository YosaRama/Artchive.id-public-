// Libs
import { useRouter } from "next/router";

// Components
import AppTableAction from "app/components/libs/table-action";

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
        return <AppTableAction id={r.id} onEdit={handleEdit} onDelete={handleDelete} />;
      },
    },
  ];

  return column;
}

export default GenreColumns;
