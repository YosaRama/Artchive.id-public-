// Libs
import { getSession } from "next-auth/react";

// Contents
import AppContentsHome from "dashboard/contents/home";

// Helpers
import dashboardSession from "dashboard/helpers/dashboardSession";

function PageDashboard() {
  return <AppContentsHome />;
}

export default PageDashboard;

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
