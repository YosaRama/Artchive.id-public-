// Libs
import { getSession } from "next-auth/react";

// Contents
import AppContentsGenreList from "app/contents/genre/list";

function PageDashboardGenreList() {
  return (
    <>
      <AppContentsGenreList />
    </>
  );
}

export default PageDashboardGenreList;

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
