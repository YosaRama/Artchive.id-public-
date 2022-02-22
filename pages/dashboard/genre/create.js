// Libs
import { getSession } from "next-auth/react";

// Contents
import AppContentsGenreCreate from "app/contents/genre/create";

function PageDashboardGenreCreate() {
  return (
    <>
      <AppContentsGenreCreate />
    </>
  );
}

export default PageDashboardGenreCreate;

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
