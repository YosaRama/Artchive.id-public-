// Libs
import { v4 as uuid } from "uuid";
import { useRouter } from "next/router";
import { Empty, Table } from "antd";

// Components
import AppContainerBox from "app/components/container/box";
import AppContainerCard from "app/components/container/card";
import GenreColumns from "./util";
import deleteConfirmModal from "app/components/utils/delete-modal-confirm";
import AppAddButton from "app/components/libs/add-button";

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
    <AppContainerBox>
      <AppContainerCard title="Genre List">
        <AppAddButton onCreate={() => router.push("/dashboard/genre/create")}>
          Add Genre
        </AppAddButton>
        {data && (
          <Table columns={columns} dataSource={data} rowKey={() => uuid()} loading={loading} />
        )}
        {!data && <Empty />}
      </AppContainerCard>
    </AppContainerBox>
  );
}

export default GenreList;
