// Libs
import { getSession } from "next-auth/react";

// Contents
import AppContentsArtworkCreate from "app/contents/artwork/create";

// Helpers
import dashboardSession from "app/helpers/dashboardSession";

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
  const res = dashboardSession({ session: session, data: session });
  // * ====================================== * //

  return {
    props: res.props,
    redirect: res.redirect,
  };
};
