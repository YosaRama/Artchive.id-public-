// Libs
import { signOut } from "next-auth/react";

// Components
import PageContainerBox from "themes/components/container/box-container";
import ThemesButton from "themes/components/libs/button";

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
        <ThemesButton onClick={handleLogout}>Logout</ThemesButton>
      </PageContainerBox>
    </>
  );
}

export default ProfilePage;
