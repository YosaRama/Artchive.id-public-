// Libs
import { getSession } from "next-auth/react";

// Contents
import AppContentsArtworkList from "dashboard/contents/artwork/list";

// Helpers
import dashboardSession from "dashboard/helpers/dashboardSession";

function PageDashboardArtworkList() {
  return (
    <>
      <AppContentsArtworkList />
    </>
  );
}

export default PageDashboardArtworkList;

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
