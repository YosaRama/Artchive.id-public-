// Libs
import { useState } from "react";

// Component
import ContainerBox from "app/components/container/containerBox";
import UserListing from "app/components/libs/user-listing";

// Data Hook
import { useUsers } from "app/hooks/user";

function GalleryList() {
  //? ============== Data Fetching ============= ?//
  const { data, onDelete } = useUsers({ queryString: `role=GALLERY` });
  // * ====================================== * //

  //? ============== Search Handling ============= ?//
  const [searchValue, setSearchValue] = useState();
  // * ====================================== * //
  return (
    <ContainerBox>
      {data && (
        <UserListing
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          data={data}
          onDelete={onDelete}
        />
      )}
    </ContainerBox>
  );
}

export default GalleryList;
