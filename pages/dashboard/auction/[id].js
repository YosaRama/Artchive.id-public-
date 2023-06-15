// Libs
import { getSession } from "next-auth/react";
import dashboardSession from "app/helpers/dashboardSession";

// Contents
import AppContentsAuctionDetails from "app/contents/auction/details";

function PageDashboardExhibitionDetails(props) {
  return (
    <>
      <AppContentsAuctionDetails />
    </>
  );
}

export default PageDashboardExhibitionDetails;

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  const res = dashboardSession({ session: session, data: session });

  return {
    props: res.props,
    redirect: res.redirect,
  };
};
