// Libs
import { getSession } from "next-auth/react";

// Contents
import AppContentsArtworkCreate from "app/contents/artwork/create";

function PageDashboardArtworkCreate() {
  return (
    <>
      <AppContentsArtworkCreate />
    </>
  );
}

export default PageDashboardArtworkCreate;

export const getServerSideProps = async (ctx) => {
  //? ============== Handle Session ============= ?//
  const session = await getSession(ctx);
  if (session && session.user.role == "ADMIN") {
    return {
      props: {
        session: session,
      },
    };
  } else {
    return {
      redirect: {
        destination: "/dashboard/login",
        permanent: true,
      },
    };
  }
  // * ====================================== * //
};
