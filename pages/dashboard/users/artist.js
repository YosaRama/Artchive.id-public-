// Libs
import { getSession } from "next-auth/react";

// Contents
import AppContentsUserListArtist from "dashboard/contents/user/list/artist";

// Helpers
import dashboardSession from "dashboard/helpers/dashboardSession";

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
  const res = dashboardSession({ session: session, data: session });
  // * ====================================== * //

  return {
    props: res.props,
    redirect: res.redirect,
  };
};
