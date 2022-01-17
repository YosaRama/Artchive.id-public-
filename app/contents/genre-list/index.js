// Libs
import { v4 as uuid } from "uuid";
import { useRouter } from "next/router";
import { Empty, Table } from "antd";

// Components
import ContainerBox from "app/components/container/containerBox";
import ContainerCard from "app/components/container/containerCard";
import GenreColumns from "./util";
import deleteConfirmModal from "app/components/libs/delete-modal-confirm";
import AddButton from "app/components/libs/add-button";

// Data Hook
import { useGenres } from "app/hooks/genre";

function GenreList() {
  const router = useRouter();

  //? ============== Genre Hook ============= ?//
  const { data, onDelete, loading } = useGenres({ queryString: "" });
  // * ====================================== * //

  //? ============== Handle Delete ============= ?//
  const handleDelete = (id) => {
    deleteConfirmModal({ title: "genre", onDelete: () => onDelete(id) });
  };
  // * ====================================== * //

  //? ============== Handle Column ============= ?//
  const columns = GenreColumns({ onDelete: handleDelete });
  // * ====================================== * //

  return (
    <ContainerBox>
      <ContainerCard title="Genre List">
        <AddButton onCreate={() => router.push("/dashboard/genre/create")}>Add Genre</AddButton>
        {data && (
          <Table columns={columns} dataSource={data} rowKey={() => uuid()} loading={loading} />
        )}
        {!data && <Empty />}
      </ContainerCard>
    </ContainerBox>
  );
}

export default GenreList;
