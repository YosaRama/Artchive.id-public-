// Libs
import { getSession } from "next-auth/react";

// Contents
import AppContentsGenreList from "app/contents/genre/list";

// Helpers
import dashboardSession from "app/helpers/dashboardSession";

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
  const res = dashboardSession({ session: session, data: session });
  // * ====================================== * //

  return {
    props: res.props,
    redirect: res.redirect,
  };
};
