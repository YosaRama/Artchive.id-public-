// Libs
import { getSession } from "next-auth/react";

// Contents
import AppContentsUserListGallery from "app/contents/user/list/gallery";

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
  if (session && session.user.role == "ADMIN") {
    return {
      props: {
        session: session,
      },
    };
  } else {
    return {
      redirect: {
        destination: "/dashboard/login",
        permanent: true,
      },
    };
  }
  // * ====================================== * //
};
