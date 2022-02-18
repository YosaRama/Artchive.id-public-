// Libs
import { signOut } from "next-auth/react";

// Components
import PageContainerBox from "themes/components/container/box-container";
import PageButton from "themes/components/libs/page-button";

// Styles
import s from "./index.module.scss";

function ProfilePage() {
  //? ============== Handle Logout ============= ?//
  const handleLogout = () => {
    signOut();
  };
  // * ====================================== * //
  return (
    <>
      <PageContainerBox>
        <PageButton onClick={handleLogout}>Logout</PageButton>
      </PageContainerBox>
    </>
  );
}

export default ProfilePage;
