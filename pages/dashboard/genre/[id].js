// Libs
import { getSession } from "next-auth/react";

// Contents
import AppContentsGenreDetails from "dashboard/contents/genre/details";

// Helpers
import dashboardSession from "dashboard/helpers/dashboardSession";

function PageDashboardGenreDetails() {
  return (
    <>
      <AppContentsGenreDetails />
    </>
  );
}

export default PageDashboardGenreDetails;

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
