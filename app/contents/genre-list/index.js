// Libs
import { useRouter } from "next/router";
import { Table } from "antd";

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
  const { data } = useGenres({ queryString: "" });
  console.log(data);
  // * ====================================== * //

  //? ============== Handle Delete ============= ?//
  const onDelete = (id) => {
    console.log(id);
  };
  const handleDelete = (id) => {
    deleteConfirmModal({ title: "genre", onDelete: () => onDelete(id) });
  };
  // * ====================================== * //
  const columns = GenreColumns({ onDelete: handleDelete });
  const dummyData = [
    { id: 1, title: "Cubism" },
    { id: 2, title: "Realism" },
  ];
  return (
    <ContainerBox>
      <ContainerCard title="Genre List">
        <AddButton onCreate={() => router.push("/dashboard/genre/create")}>Add Genre</AddButton>
        <Table columns={columns} dataSource={dummyData} />
      </ContainerCard>
    </ContainerBox>
  );
}

export default GenreList;
