// Libs
import { getSession } from "next-auth/react";

// Contents
import AppContentsTransactionLists from "app/contents/transaction/list";

// Helpers
import dashboardSession from "app/helpers/dashboardSession";

function PageDashboardTransactionLists() {
  return (
    <>
      <AppContentsTransactionLists />
    </>
  );
}

export default PageDashboardTransactionLists;

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
