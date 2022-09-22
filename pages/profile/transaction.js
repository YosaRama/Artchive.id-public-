// Libs
import { getSession, useSession } from "next-auth/react";

// Helper
import profileSession from "app/helpers/profileSession";

// Contents
import ThemesContentsProfileTransaction from "themes/contents/profile/studio/transaction";

function PageProfileTransaction() {
  //? ============== Handle Session ============= ?//
  const { data: session, status: sessionLoading } = useSession();
  // * ====================================== * //

  return (
    <>
      <ThemesContentsProfileTransaction />
    </>
  );
}

export default PageProfileTransaction;
