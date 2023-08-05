// Libs
import { getSession } from "next-auth/react";

// Contents
import AppContentsAuctionCreate from "app/contents/auction/create";

// Helpers
import dashboardSession from "app/helpers/dashboardSession";

function PageDashboardAuctionCreate() {
  return (
    <>
      <AppContentsAuctionCreate />
    </>
  );
}

export default PageDashboardAuctionCreate;

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
