// Libs
import { getSession } from "next-auth/react";

// Contents
import AppContentsExhibitionCreate from "dashboard/contents/exhibition/create";

// Helpers
import dashboardSession from "dashboard/helpers/dashboardSession";

function PageDashboardExhibitionCreate() {
  return (
    <>
      <AppContentsExhibitionCreate />
    </>
  );
}

export default PageDashboardExhibitionCreate;

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
