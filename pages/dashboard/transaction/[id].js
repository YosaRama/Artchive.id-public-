// Libs
import { getSession } from "next-auth/react";

// Contents
import AppContentsTranscationDetails from "app/contents/transaction/details";

// Helpers
import dashboardSession from "app/helpers/dashboardSession";

function PageDashboardTransactionDetails() {
  return (
    <>
      <AppContentsTranscationDetails />
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
