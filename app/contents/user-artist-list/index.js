// Libs
import { useState } from "react";

// Component
import AppContainerBox from "app/components/container/box";
import UserListing from "app/components/libs/user-listing";

// Data Hook
import { useUsers } from "app/hooks/user";

function ArtistList() {
  //? ============== Handle Pagination ============= ?//
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePagination = (value) => {
    setCurrentPage(value);
  };
  // * ====================================== * //

  //? ============== Handle Search ============= ?//
  const [searchValue, setSearchValue] = useState();
  // * ====================================== * //

  //? ============== Data Fetching ============= ?//
  const { data, onDelete, total } = useUsers({
    queryString: `role=ARTIST&limit=${pageSize}&page=${currentPage}&fullName=${
      searchValue ? searchValue : ""
    }`,
  });
  // * ====================================== * //

  return (
    <AppContainerBox>
      {data && (
        <UserListing
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          data={data}
          onDelete={onDelete}
          title="Artist List"
          total={total}
          pageSize={pageSize}
          currentPage={currentPage}
          handlePagination={handlePagination}
        />
      )}
    </AppContainerBox>
  );
}

export default ArtistList;
