// Libs
import { getSession } from "next-auth/react";

// Contents
import AppContentsExhibitionDetails from "dashboard/contents/exhibition/details";

// Helpers
import dashboardSession from "dashboard/helpers/dashboardSession";

function PageDashboardExhibitionDetails() {
  return (
    <>
      <AppContentsExhibitionDetails />
    </>
  );
}

export default PageDashboardExhibitionDetails;

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
