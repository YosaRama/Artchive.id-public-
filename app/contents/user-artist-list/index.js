// Libs
import { useState } from "react";

// Component
import ContainerBox from "app/components/container/containerBox";
import UserListing from "app/components/libs/user-listing";

// Data Hook
import { useUsers } from "app/hooks/user";

function ArtistList() {
  //? ============== Data Fetching ============= ?//
  const { data } = useUsers({ queryString: `role=ARTIST` });
  // * ====================================== * //

  //? ============== Search Handling ============= ?//
  const [searchValue, setSearchValue] = useState();
  // * ====================================== * //

  return (
    <ContainerBox>
      {data && (
        <UserListing searchValue={searchValue} setSearchValue={setSearchValue} data={data} />
      )}
    </ContainerBox>
  );
}

export default ArtistList;
