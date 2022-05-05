// Libs
import { getSession } from "next-auth/react";

// Contents

// Helpers
import dashboardSession from "app/helpers/dashboardSession";

function PageDashboardExhibitionCreate() {
  return (
    <>
      <></>
    </>
  );
}

export default PageDashboardExhibitionCreate;

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
