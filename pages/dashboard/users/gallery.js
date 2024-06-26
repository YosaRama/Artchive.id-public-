// Libs
import { getSession } from "next-auth/react";

// Contents
import AppContentsUserListGallery from "dashboard/contents/user/list/gallery";

// Helpers
import dashboardSession from "dashboard/helpers/dashboardSession";

function PageDashboardUsersGalleryList() {
  return (
    <>
      <AppContentsUserListGallery />
    </>
  );
}

export default PageDashboardUsersGalleryList;

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
