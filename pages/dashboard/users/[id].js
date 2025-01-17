// Libs
import { getSession } from "next-auth/react";

// Contents
import AppContentsUserDetails from "dashboard/contents/user/details";

// Helpers
import dashboardSession from "dashboard/helpers/dashboardSession";

function PageDashboardUsersDetails() {
  return (
    <>
      <AppContentsUserDetails />
    </>
  );
}

export default PageDashboardUsersDetails;

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
