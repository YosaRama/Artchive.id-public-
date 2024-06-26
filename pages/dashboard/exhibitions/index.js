// Libs
import { getSession } from "next-auth/react";

// Contents
import AppContentsExhibitionList from "dashboard/contents/exhibition/list";

// Helpers
import dashboardSession from "dashboard/helpers/dashboardSession";

function PageDashboardExhibitionList() {
  return (
    <>
      <AppContentsExhibitionList />
    </>
  );
}

export default PageDashboardExhibitionList;

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
