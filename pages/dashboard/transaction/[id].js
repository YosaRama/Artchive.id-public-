// Libs
import { getSession } from "next-auth/react";

// Contents
import AppContentsTransactionDetails from "dashboard/contents/transaction/details";

// Helpers
import dashboardSession from "dashboard/helpers/dashboardSession";

function PageDashboardTransactionDetails() {
  return (
    <>
      <AppContentsTransactionDetails />
    </>
  );
}

export default PageDashboardTransactionDetails;

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
