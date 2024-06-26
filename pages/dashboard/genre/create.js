// Libs
import { getSession } from "next-auth/react";

// Contents
import AppContentsGenreCreate from "dashboard/contents/genre/create";

// Helpers
import dashboardSession from "dashboard/helpers/dashboardSession";

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
  const res = dashboardSession({ session: session, data: session });
  // * ====================================== * //

  return {
    props: res.props,
    redirect: res.redirect,
  };
};
