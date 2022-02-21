// Libs
import { getSession } from "next-auth/react";

// Contents
import AppContentsUserListArtist from "app/contents/user/list/artist";

function PageDashboardUsersArtistList() {
  return (
    <>
      <AppContentsUserListArtist />
    </>
  );
}

export default PageDashboardUsersArtistList;

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
