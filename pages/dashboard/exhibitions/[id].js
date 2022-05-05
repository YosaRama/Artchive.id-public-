// Libs
import { getSession } from "next-auth/react";

// Contents

// Helpers
import dashboardSession from "app/helpers/dashboardSession";

function PageDashboardExhibitionDetails() {
  return (
    <>
      <></>
    </>
  );
}

export default PageDashboardExhibitionDetails;

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
