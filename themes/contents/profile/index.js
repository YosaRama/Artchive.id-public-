// Libs
import { signOut } from "next-auth/react";

// Components
import ThemesButton from "themes/components/libs/button";

// Styles
import s from "./index.module.scss";

function ThemesContentsProfile() {
  //? ============== Handle Logout ============= ?//
  const handleLogout = () => {
    signOut();
  };
  // * ====================================== * //
  return (
    <>
      <ThemesButton onClick={handleLogout}>Logout</ThemesButton>
    </>
  );
}

export default ThemesContentsProfile;
