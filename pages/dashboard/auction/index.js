// Libs
import { getSession } from "next-auth/react";

// Contents
import AppContentsAuctionList from "dashboard/contents/auction/list";

// Helpers
import dashboardSession from "dashboard/helpers/dashboardSession";

function PageDashboardAuctionList() {
  return (
    <>
      <AppContentsAuctionList />
    </>
  );
}

export default PageDashboardAuctionList;

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
