// Libs
import { getSession } from "next-auth/react";

// Contents
import AppContentsUserCreate from "dashboard/contents/user/create";

// Helpers
import dashboardSession from "dashboard/helpers/dashboardSession";

function PageDashboardUsersCreate() {
  return (
    <>
      <AppContentsUserCreate />
    </>
  );
}

export default PageDashboardUsersCreate;

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
