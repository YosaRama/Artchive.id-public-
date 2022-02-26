// Libs
import { getSession } from "next-auth/react";

// Contents
import AppContentsUserListCollector from "app/contents/user/list/collector";

// Helpers
import dashboardSession from "app/helpers/dashboardSession";

function PageDashboardUsersCollectorList() {
  return (
    <>
      <AppContentsUserListCollector />
    </>
  );
}

export default PageDashboardUsersCollectorList;

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
