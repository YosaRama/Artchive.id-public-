// Libs
import { signOut } from "next-auth/react";

// Components
import ThemesContainerMain from "themes/components/container/main";
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
      <ThemesContainerMain>
        <ThemesButton onClick={handleLogout}>Logout</ThemesButton>
      </ThemesContainerMain>
    </>
  );
}

export default ProfilePage;
