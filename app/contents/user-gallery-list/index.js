// Libs
import { useState } from "react";

// Component
import ContainerBox from "app/components/container/containerBox";
import UserListing from "app/components/libs/user-listing";

// Data Hook
import { useUsers } from "app/hooks/user";

function GalleryList() {
  //? ============== Data Fetching ============= ?//
  const { data } = useUsers({ queryString: `role=GALLERY` });
  const allData = data?.data;
  // * ====================================== * //

  //? ============== Search Handling ============= ?//
  const [searchValue, setSearchValue] = useState();
  // * ====================================== * //
  return (
    <ContainerBox>
      <UserListing searchValue={searchValue} setSearchValue={setSearchValue} data={allData} />
    </ContainerBox>
  );
}

export default GalleryList;
